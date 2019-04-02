import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default class Graphics extends Component {
  render () {
    const {assessments} = this.props


    return (
      <View style={styles.graphicsWrapper} >
        <View style={styles.topWrapper}>
          <View style={styles.rows}>
            <View style={styles.leftTop}>
              <Text style={styles.graphicsText}>{'already doing well'.toUpperCase()}</Text>
            </View>
            <View style={styles.leftTopWrapper}>
              {assessments.type === 'already doing well'}
            </View>
          </View>
          <View style={styles.rows}>
            <View style={styles.rightTop}>
              <Text style={[styles.graphicsText, {textAlign: 'right'}]}>{'ready to change'.toUpperCase()}</Text>
            </View>
            <View style={styles.rightTopWrapper}>
              {assessments.type === 'ready to change'}
            </View>
          </View>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.rows}>
            <View style={styles.leftBottomWrapper}>
              {assessments.type === 'no ready to change'}
            </View>
            <View style={styles.leftBottom}>
              <Text style={styles.graphicsText}>{'no ready to change'.toUpperCase()}</Text>
            </View>
          </View>
          <View style={styles.rows}>
            <View style={styles.rightBottomWrapper}>
              {assessments.type === 'plan to change soon'}
            </View>
            <View style={styles.rightBottom}>
              <Text style={[styles.graphicsText, {textAlign: 'right'}]}>{'plan to change soon'.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
