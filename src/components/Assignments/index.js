import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { Actions, ActionConst } from "react-native-router-flux"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import ListButtonControl from "/components/Helpers/ListButtonControl"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import PastItems from "./PastItems"
import { sortPastItems, sortUpcomingItems } from "/lib/helpers"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"
import ToDoItems from "./ToDoItems"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)
const NUMBER_OF_TO_DOS = 6

export default class AssignmentsView extends Component {
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
    this.state = {
      pastAssignmentsButton: false,
    }
  }

  onItem(assignment) {
    return this.props.actions.selectAssignment(assignment)
  }

  toDoRows(toDoItems) {
    if (toDoItems.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no upcoming assignments!
        </Text>
      )
    }
    const toDos = (<ToDoItems key={"todos-1"} items={sortUpcomingItems(toDoItems).slice(0, NUMBER_OF_TO_DOS)} onItem={this.onItem} />)
    if (toDoItems.length <= NUMBER_OF_TO_DOS) {
      return toDos
    }

    return [toDos,
      <TouchableHighlight
        key={-1}
        onPress={() => Actions.ComingUp()}
        underlayColor={StyleConsts.colors.white}>
        <View>
          <Text style={styles.seeMoreButton}>+ View {toDoItems.length - NUMBER_OF_TO_DOS} More</Text>
        </View>
      </TouchableHighlight>]
  }

  pastRows(pastItems) {
    if (pastItems.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no past assignments!
        </Text>
      )
    }

    const pastThings = (<PastItems key={"pastItems-1"} items={sortPastItems(pastItems).slice(0, NUMBER_OF_TO_DOS)} onItem={this.onItem} />)

    if (pastItems.length <= NUMBER_OF_TO_DOS) {
      return pastThings
    }

    return [pastThings,
      <TouchableHighlight
        key={-1}
        onPress={() => Actions.PastAssignments()}
        underlayColor={StyleConsts.colors.white}>
        <View>
          <Text style={styles.seeMoreButton}>+ View {pastItems.length - NUMBER_OF_TO_DOS} More</Text>
        </View>
      </TouchableHighlight>]
  }

  render() {
    const now = new Date()
    const pastAssignments = this.props.assignments.filter(assignment => !assignment.to_do)
    const pastPlannerItems = this.props.plannerItems.filter(plannerItem => plannerItem.end_at && moment(plannerItem.end_at).isBefore(now))
    const upcomingAssignments = this.props.assignments.filter(assignment => assignment.to_do)
    const upcomingPlannerItems = this.props.plannerItems.filter(plannerItem => plannerItem.end_at && moment(plannerItem.end_at).isAfter(now))

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerText}>
            What&apos;s Next?
          </Text>
        </View>
        <View style={styles.toDoRow}>
          <View style={styles.toDoCount}>
            <Text style={styles.toDoCountText}>
              {upcomingAssignments.length + upcomingPlannerItems.length}
            </Text>
          </View>
          <View style={styles.toDo}>
            <Text style={styles.toDoText}>
              Coming Up
            </Text>
          </View>
        </View>
        <View style={styles.upcomingAssignmentRows}>
          {this.toDoRows([...upcomingAssignments, ...upcomingPlannerItems])}
        </View>
        <ListButtonControl
          style={{ marginTop: 10 }}
          textStyle={styles.pastAssignmentsText}
          text={"Past Assignments"}
          active={this.state.pastAssignmentsButton}
          onPress={() => { this.setState({ pastAssignmentsButton: !this.state.pastAssignmentsButton }) }} />
        { this.state.pastAssignmentsButton && this.pastRows([...pastAssignments, ...pastPlannerItems]) }
      </ScrollView>
    )
  }
}
