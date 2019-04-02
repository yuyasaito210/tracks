import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import { FeedbackPill, GradedPill, LatePill, MissingPill } from "/components/Helpers/Pill"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class ToDoRow extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onItem: PropTypes.func.isRequired,
  }

  assignmentRow(assignment) {
    let completeIcon = "circle"
    let iconStyle = "circle"
    let statusStyle = "Incomplete"
    let statusText = "Due Soon"
    let PillTag = View
    if (assignment.submitted) {
      completeIcon = "check"
      iconStyle = assignment.late ? "grayCheck" : "greenCheck"
      if (assignment.late) {
        PillTag = LatePill
      }
      statusText = "Complete"
      statusStyle = "Complete"
    } else if (assignment.past_due) {
      completeIcon = "filled-circle"
      statusText = "Past Due"
      iconStyle = "filledCircle"
      PillTag = MissingPill
    }
    const dueDate = assignment.due_date ? `${moment(assignment.due_date).format("MMMM DD")}` : ""

    return (
      <TouchableHighlight
        key={assignment.id}
        onPress={() => this.props.onItem(assignment)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.assignmentButton}>
          <View style={styles.icon}>
            <Icon name={completeIcon} size={getSize(25, 25, 35, 50)} style={styles[`${iconStyle}Icon`]} />
          </View>
          <View style={styles.rightSide}>
            <View style={styles.topRow}>
              <View style={styles.leftSide}>
                <Text style={[styles.rowStatus, styles[`rowStatus${statusStyle}`]]}>{assignment.name}</Text>
              </View>
              <View style={styles.dueDate}>
                <Text style={styles.dueDateText}>{dueDate}</Text>
                <Icon name={"back"} size={getSize(20, 20, 30, 45)} style={styles.rightArrowIcon} />
              </View>
            </View>
            <View style={{ ...styles.bottomRow, flexDirection: "row" }}>
              <Text style={styles.assignmentName}>Points: {assignment.points_possible || "No Points"}</Text>
              <PillTag />
              { (assignment.submission_comments || []).length > 0 && <FeedbackPill /> }
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  calendarEventRow(calendarEvent) {
    const startDate = calendarEvent.start_at ? `${moment(calendarEvent.start_at).format("MMMM DD")}` : ""

    return (
      <TouchableHighlight
        key={`planner-${calendarEvent.id}`}
        onPress={() => this.props.onItem(calendarEvent)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.assignmentButton}>
          <View style={styles.icon} />
          <View style={styles.rightSide}>
            <View style={styles.topRow}>
              <View style={styles.leftSide}>
                <Text style={[styles.rowStatus, styles[`rowStatusIncomplete`]]}>{calendarEvent.title}</Text>
              </View>
              <View style={styles.dueDate}>
                <Text style={styles.dueDateText}>{startDate}</Text>
                <Icon name={"back"} size={getSize(20, 20, 30, 45)} style={styles.rightArrowIcon} />
              </View>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.assignmentName} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  plannerNoteRow(plannerNote) {
    const startDate = plannerNote.todo_date ? `${moment(plannerNote.todo_date).format("MMMM DD")}` : ""

    return (
      <TouchableHighlight
        key={`planner-${plannerNote.id}`}
        onPress={() => this.props.onItem(plannerNote)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.assignmentButton}>
          <View style={styles.icon} />
          <View style={styles.rightSide}>
            <View style={styles.topRow}>
              <View style={styles.leftSide}>
                <Text style={[styles.rowStatus, styles[`rowStatusIncomplete`]]}>{plannerNote.title}</Text>
              </View>
              <View style={styles.dueDate}>
                <Text style={styles.dueDateText}>{startDate}</Text>
                <Icon name={"back"} size={getSize(20, 20, 30, 45)} style={styles.rightArrowIcon} />
              </View>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.assignmentName} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    switch (this.props.item.plannable_type) {
      case "calendar_event":
        return this.calendarEventRow(this.props.item)
      case "planner_note":
        return this.plannerNoteRow(this.props.item)
      default:
        return this.assignmentRow(this.props.item)
    }
  }
}
