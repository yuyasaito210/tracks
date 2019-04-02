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

export default class PastRow extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onItem: PropTypes.func.isRequired,
  }

  assignmentRow(assignment) {
    let completeIcon = "close"
    let iconStyle = "closed"
    let PillTag = MissingPill
    if (assignment.submitted) {
      completeIcon = "check"
      iconStyle = assignment.late ? "grayCheck" : "greenCheck"
      PillTag = assignment.late ? LatePill : GradedPill
    }
    const dueDate = assignment.due_date ? `${moment(assignment.due_date).format("MMMM DD")}` : ""

    return (
      <TouchableHighlight
        key={assignment.id}
        onPress={() => this.props.onItem(assignment)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.pastAssignmentButton}>
          <View style={[styles.icon, styles.pastAssignmentIcon]}>
            <Icon name={completeIcon} size={getSize(25, 25, 35, 50)} style={styles[`${iconStyle}Icon`]} />
          </View>
          <View style={styles.pastAssignmentTitle}>
            <Text style={[styles.rowStatus, styles.rowStatusIncomplete, { flex: 1 }]}>{assignment.name}</Text>
            <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
              <Text style={styles.assignmentName}>Points: {assignment.points_possible || "No Points"}</Text>
              <PillTag />
              { (assignment.submission_comments || []).length > 0 && <FeedbackPill /> }
            </View>
          </View>
          <View style={styles.pastAssignmentGrade}>
            <Text style={styles.pastAssignmentDateText}>{dueDate}</Text>
            <Text style={styles.pastAssignmentGradeText}>{assignment.grade}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  calendarEventRow(calendarEvent) {
    return (
      <TouchableHighlight
        key={`planner-${calendarEvent.id}`}
        onPress={() => this.props.onItem(calendarEvent)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.pastAssignmentButton}>
          <View style={[styles.icon, styles.pastAssignmentIcon]} />
          <View style={styles.pastAssignmentTitle}>
            <Text style={styles.pastAssignmentTitleText}>{calendarEvent.title}</Text>
          </View>
          <View style={styles.pastAssignmentGrade}>
            <Text style={styles.pastAssignmentGradeText} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  plannerNoteRow(plannerNote) {
    return (
      <TouchableHighlight
        key={`planner-${plannerNote.id}`}
        onPress={() => this.props.onItem(plannerNote)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.pastAssignmentButton}>
          <View style={[styles.icon, styles.pastAssignmentIcon]} />
          <View style={styles.pastAssignmentTitle}>
            <Text style={styles.pastAssignmentTitleText}>{plannerNote.title}</Text>
          </View>
          <View style={styles.pastAssignmentGrade}>
            <Text style={styles.pastAssignmentGradeText} />
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
