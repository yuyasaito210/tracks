import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  View,
} from "react-native"
import styles from "./styles"
import ToDoRow from "./ToDoRow"

export default class ToDoItems extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItem: PropTypes.func.isRequired,
  }

  toDoRow(toDoItem) {
    let id
    switch (toDoItem.plannable_type) {
      case "calendar_event":
        id = `planner-${toDoItem.id}`
        break
      case "planner_note":
        id = `planner-${toDoItem.id}`
        break
      default:
        id = `assignment-${toDoItem.id}`
    }

    return <ToDoRow key={id} item={toDoItem} onItem={this.props.onItem} />
  }

  toDoRows(toDoItems) {
    if (toDoItems.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no upcoming assignments!
        </Text>
      )
    }
    return toDoItems.map(item => this.toDoRow(item))
  }

  render() {
    return (
      <View>
        {this.toDoRows(this.props.items)}
      </View>
    )
  }
}
