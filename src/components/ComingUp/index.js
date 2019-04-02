import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  View,
} from "react-native"
import { sortUpcomingItems } from "/lib/helpers"
import styles from "/components/Assignments/styles"
import ToDoItems from "/components/Assignments/ToDoItems"

export default class ComingUpView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    assignments: PropTypes.arrayOf(PropTypes.shape({
      available_on_mobile: PropTypes.bool.isRequired,
      course_id: PropTypes.number.isRequired,
      description: PropTypes.string,
      due_date: PropTypes.string,
      grade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      id: PropTypes.number.isRequired,
      late: PropTypes.bool,
      missing: PropTypes.bool,
      name: PropTypes.string.isRequired,
      past_due: PropTypes.bool,
      points_possible: PropTypes.number,
      position: PropTypes.number,
      status: PropTypes.string,
      submitted: PropTypes.bool,
      to_do: PropTypes.bool,
      url: PropTypes.string,
    })).isRequired,
    plannerItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)

    this.onItem = this.onItem.bind(this)
  }

  onItem(assignment) {
    return this.props.actions.selectAssignment(assignment, { backTitle: "Coming Up" })
  }

  toDoRows(toDoItems) {
    if (toDoItems.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no upcoming assignments!
        </Text>
      )
    }
    return (<ToDoItems key={"todos-1"} items={sortUpcomingItems(toDoItems)} onItem={this.onItem} />)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.upcomingAssignmentRows}>
          {this.toDoRows([...this.props.assignments, ...this.props.plannerItems])}
        </View>
      </ScrollView>
    )
  }
}
