import React, { Component } from 'react'
import {
  View,
  Text,
  PanResponder,
  Animated,
  Platform
} from 'react-native'
import styles from './styles'
import { getSize } from '/lib/helpers/styleSizes'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class OtherAssessmentComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      value: null,
      showDragable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY()
    }
    this.itemCenterValues = this.itemCenterValues.bind(this)
  }

  componentWillMount () {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleOnPanResponderMove.bind(this),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
      onPanResponderRelease: this.handleOnPanResponderRelease.bind(this)
    })
  }

  handleOnPanResponderMove (e, gesture) {
    Animated.spring(this.state.pan, {
      toValue: {
        x: gesture.dx + this.state.x,
        y: gesture.dy + this.state.y
      }
    }).start()
  }

  handlePanResponderEnd () {
    this.props.changeDropZoneStyle()
  }

  handlePanResponderGrant () {
    this.props.changeDropZoneStyle()
  }

  handleOnPanResponderRelease (event, gesture) {
    if (gesture.moveX !== 0 && gesture.moveY !== 0) {
      const dragableItemValues = this.isDropZone(gesture)

      if (dragableItemValues) {
        Animated.spring(this.state.pan, {
          toValue: {
            x: dragableItemValues.x,
            y: dragableItemValues.y
          }
        }).start()

        this.setState({
          value: dragableItemValues.value,
          x: dragableItemValues.x,
          y: dragableItemValues.y
        })
      }
    }

    this.props.changeDropZoneStyle()
  }

  isDropZone (gesture) {
    const { dropZoneValues, value } = this.state
    const { item, index } = this.props
    const dragableItemValues =
      this.props.isDropZone(gesture, dropZoneValues, item, value, index)

    return dragableItemValues
  }

  itemCenterValues (event) {
    const dropZoneValues = event.nativeEvent.layout

    this.setState({
      dropZoneValues
    })
  }

  render () {
    const { item, style } = this.props
    const activeStyle = style && !this.state.value ? styles.activeItemStyle : null
    const styling = Platform.OS === 'ios' ? '' : 'Android'

    return (
      <Animated.View
        onLayout={(event) => this.itemCenterValues(event)}
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(),
          activeStyle,
          styles[`assessmentRow${styling}`],
          { backgroundColor: item.color, zIndex: 2 }]}>
        <View style={styles.iconWrapper}>
          <Icon name={item.icon} size={getSize(30, 30, 45, 60)} style={styles.icon} />
        </View>
        <View style={[styles.assessmentTextWrapper, styles[`padding${styling}`]]}>
          <View style={styles.assessmentInfo}>
            <Text style={{ color: item.color }}>{item.type}</Text>
          </View>
          <View style={styles.assessmentInfo}>
            <Text style={styles.assessmentInfoText}>
              {item.satisfaction}
              <Text style={{ color: '#111' }}> satisfaction</Text>
            </Text>
            <Text style={styles.assessmentInfoText}>
              {item.confidence}
              <Text style={{ color: '#111' }}> confidence</Text>
            </Text>
          </View>
        </View>
      </Animated.View>
    )
  }
}
