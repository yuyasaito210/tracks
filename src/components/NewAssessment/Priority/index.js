import React, { Component } from "react"
import {
  Platform,
  Text,
  View,
} from "react-native"
import styles from "./styles"
import DragableItem from "./DragableItem"

export default class Priority extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDragable: true,
      dropZone: [
        { value: 1, item: null, layout: {} },
        { value: 2, item: null, layout: {} },
        { value: 3, item: null, layout: {} },
        { value: 4, item: null, layout: {} },
        { value: 5, item: null, layout: {} },
        { value: 6, item: null, layout: {} },
        { value: 7, item: null, layout: {} },
        { value: 8, item: null, layout: {} },
      ],
      activeDrag: false,
    }

    this.setDropZoneValues = this.setDropZoneValues.bind(this)
    this.changeDropZoneStyle = this.changeDropZoneStyle.bind(this)
    this.isDropZone = this.isDropZone.bind(this)
  }

  setDropZoneValues(index, event) {
    const layout = event.nativeEvent.layout
    const dropZone = this.state.dropZone

    dropZone[index].layout = layout
    this.setState({
      dropZone: this.state.dropZone,
    })
  }

  isDropZone(gesture, dropZoneValues, item, value, index) {
    const { dropZone } = this.state
    let dragableItemValues = { x: 0, y: 0 }

    dropZone.map((values, i) => {
      const dropZoneTopY = values.layout.y - values.layout.height / 3
      const dropZoneBottomY = values.layout.y + values.layout.height
      const horizontal = dropZoneValues.x >= dropZoneValues.width / 2
      const top = dropZoneValues.y >= dropZoneTopY
      const bottom = dropZoneValues.y <= dropZoneBottomY

      if (horizontal && top && bottom && !value && !values.item) {
        const point = dropZoneValues.y - values.layout.y
        values.item = item
        this.setState({ dropZone })
        dragableItemValues = {
          x: values.layout.width + 10,
          y: gesture.dy - point,
          value: values.value,
        }
      } else if (horizontal && top && bottom && !values.item) {
        const point = index * 50 - index
        values.item = item
        dropZone[value - 1].item = null
        this.setState({ dropZone })
        dragableItemValues = {
          x: values.layout.width + 10,
          y: values.layout.y - point + index - 5,
          value: values.value,
        }
      } else if (values.value === value && dropZoneValues.x < dropZoneValues.width) {
        values.item = null
        this.setState({ dropZone })
        dragableItemValues = {
          x: 0,
          y: 0,
          value: null,
        }
      }
    })

    return dragableItemValues
  }

  changeDropZoneStyle() {
    this.setState({
      activeDrag: !this.state.activeDrag,
    })
    if (this.isPrioritizeCompleted(this.state.dropZone)) {
      const priorityList = this.state.dropZone.map(dimension => dimension.item.type)
      this.props.onAnswerPut(this.props.content.attemptId, this.props.content.questions[0].id, priorityList.join(","), "")
    }
  }
  isPrioritizeCompleted(dimensions) {
    const isCompleted = dimensions.filter(dimension => dimension.item === null)
    return isCompleted.length === 0
  }
  renderDropZone(item, index) {
    const activeStyle = this.state.activeDrag && !this.state.dropZone[index].item ? styles.activeDropZone : ""
    const styling = Platform.OS === "ios" ? "" : "Android"
    return (
      <View
        onLayout={this.setDropZoneValues.bind(this, index)}
        key={index}
        style={[
          styles[`assessmentRow${styling}`],
          activeStyle,
          { zIndex: 1 },
        ]}>
        <Text style={styles.dropZoneIndex}>{index + 1}</Text>
      </View>
    )
  }

  renderAssessments(assessment, i) {
    return (
      <DragableItem
        key={i}
        index={i}
        changeDropZoneStyle={this.changeDropZoneStyle}
        item={assessment}
        onResponderGrant={this.changeDropZoneStyle}
        dropZone={this.state.dropZoneValues}
        isDropZone={this.isDropZone}
        style={this.state.activeDrag} />
    )
  }

  render() {
    const { priorityData } = this.props.content
    const zIndex = Platform.OS === "ios" ? { drag: { zIndex: 2 }, drop: { zIndex: 1 } } : ""
    const style = Platform.OS === "ios" && { flex: 1 }
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.header}>Prioritize.</Text>
          <Text style={styles.instructionText}>
            Drag and drop each dimension in order from the most important to least important.
          </Text>
        </View>
        <View style={styles.importantView}>
          <Text style={styles.importantText}>Most Important to Me</Text>
        </View>
        <View style={[styles.dragAndDropWrapper, style]}>
          <View style={[styles.dragAndDropViews, zIndex.drag]}>
            {priorityData.map((item, i) => this.renderAssessments(item, i))}
          </View>
          <View style={[styles.dragAndDropViews, zIndex.drop]}>
            {this.state.dropZone.map((item, i) => this.renderDropZone(item, i))}
          </View>
        </View>
        <View style={styles.importantView}>
          <Text style={styles.importantText}>Least Important to Me</Text>
        </View>
      </View>
    )
  }
}
