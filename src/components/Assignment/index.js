import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import { htmlView } from "/lib/helpers"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import announcementStyles from "/components/Announcement/styles"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class AssignmentView extends Component {
  static propTypes = {
    assignment: PropTypes.object.isRequired,
    isRefreshingAssignment: PropTypes.bool.isRequired,
    renderAssessmentIntro: PropTypes.func.isRequired,
  }

  goToAssignment(assignment) {
    if (assignment.available_on_mobile) {
      this.props.renderAssessmentIntro(assignment)
    } else {
      Linking.openURL(assignment.url)
    }
  }

  assignmentBanner(assignment) {
    const dueDate = assignment.due_date && assignment.to_do ? `${moment(assignment.due_date).format("dddd, MMMM Do")}` : ""
    if (dueDate === "") {
      return undefined
    }
    return (
      <View style={styles.dataInfo}>
        <Icon name={"calendar"} size={getSize(45, 45, 65, 90)} style={{ color: "#fff" }} />
        <View style={styles.infoText}>
          <Text style={{ color: "#fff", fontSize: getSize(15, 15, 23, 30) }}>This assignment is due:</Text>
          <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{dueDate}</Text>
        </View>
      </View>
    )
  }

  assignmentButton(assignment) {
    let color = ""
    let icon = ""
    let bodyText = ""
    let footerText = ""
    let backgroundColor = ""
    if (assignment.available_on_mobile) {
      icon = "assessment"
      bodyText = "Take Assessment"
      footerText = assignment.name
      backgroundColor = StyleConsts.colors.yellow
      color = StyleConsts.colors.navy
    } else {
      icon = "bearface-logo"
      bodyText = "Login to your course online to complete the assignment."
      backgroundColor = StyleConsts.colors.navy
      color = StyleConsts.colors.white
    }
    return (
      <TouchableHighlight
        style={[styles.assignmentButtonWrapper, { backgroundColor }]}
        onPress={() => this.goToAssignment(assignment)}
        underlayColor={backgroundColor}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Icon color={color} name={icon} size={getSize(45, 45, 70, 90)} />
          </View>
          <Text style={{ color, fontWeight: "bold", fontSize: getSize(17, 17, 25, 34), marginTop: 20 }}>{bodyText}</Text>
          <Text style={{ color, fontWeight: "300", fontSize: getSize(15, 15, 22, 30), marginTop: 5 }}>{footerText}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  assignmentStatus(assignment) {
    let completeIcon = "close"
    let iconStyle = "closed"
    let statusText = "Closed and Incomplete"
    if (assignment.submitted) {
      completeIcon = "check"
      iconStyle = assignment.late ? "grayCheck" : "greenCheck"
      statusText = "Complete"
    } else if (assignment.past_due && !assignment.locked) {
      completeIcon = "filled-circle"
      statusText = "Past Due"
      iconStyle = "filledCircle"
    } else if (assignment.to_do && !assignment.past_due) {
      completeIcon = "circle"
      statusText = "Due Soon"
      iconStyle = "circle"
    }

    return (
      <View style={styles.assignmentStatus}>
        <View style={styles.icon}>
          <Icon name={completeIcon} size={getSize(25, 25, 35, 50)} style={styles[`${iconStyle}Icon`]} />
        </View>
        <View style={styles.status}>
          <Text style={styles.rowStatus}>Assignment {statusText}</Text>
        </View>
      </View>
    )
  }

  renderAssignment(assignment) {
    let gradeData = `Points: ${assignment.points_possible || "No Points"}`
    if (!assignment.to_do && assignment.grade) {
      gradeData = assignment.grade
    }

    return (
      <ScrollView style={styles.container}>
        {this.assignmentBanner(assignment)}
        <View style={styles.assignmentInfo}>
          <View style={styles.assignmentTitleRow}>
            <Text style={styles.assignmentTitle}>
              {assignment.name}
            </Text>
          </View>
          { (assignment.description || "") !== "" &&
            <View style={styles.assignmentDescriptionRow}>
              <Text style={styles.assignmentDescription}>
                {htmlView(assignment.description)}
              </Text>
            </View> }
          <View style={styles.assignmentScoreRow}>
            <Text style={styles.assignmentGrade}>
              {gradeData}
            </Text>
          </View>
        </View>
        { this.assignmentButton(assignment) }
        { this.assignmentStatus(assignment) }
      </ScrollView>
    )
  }

  renderCalendarEvent(calendarEvent) {
    const eventDate = moment(calendarEvent.start_at).format("dddd, MMMM Do")
    const eventTime = moment(calendarEvent.start_at).format("hh:mma")

    return (
      <ScrollView style={announcementStyles.container} contentContainerStyle={announcementStyles.containerContent}>
        <View style={announcementStyles.announcementInfo}>
          <View style={announcementStyles.dataInfoTall}>
            <Icon name={"calendar"} size={getSize(45, 45, 65, 90)} style={{ color: "#fff" }} />
            <View style={announcementStyles.infoText}>
              <Text style={{ color: "#fff", fontSize: getSize(15, 15, 23, 30) }}>A calendar event at:</Text>
              <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{eventDate}</Text>
              <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{eventTime}</Text>
            </View>
          </View>
          <View style={announcementStyles.announcementTitleRow}>
            <Text style={announcementStyles.announcementTitle}>
              {calendarEvent.title}
            </Text>
          </View>
          {
            calendarEvent.description &&
            calendarEvent.description !== "" &&
            <View style={announcementStyles.announcementMessageRow}>
              <Text style={announcementStyles.announcementMessage}>
                {htmlView(calendarEvent.description)}
              </Text>
            </View>
          }
        </View>
      </ScrollView>
    )
  }

  renderPlannerNote(plannerNote) {
    const eventDate = moment(plannerNote.todo_date).format("dddd, MMMM Do")
    const eventTime = moment(plannerNote.todo_date).format("hh:mma")

    return (
      <ScrollView style={announcementStyles.container} contentContainerStyle={announcementStyles.containerContent}>
        <View style={announcementStyles.announcementInfo}>
          <View style={announcementStyles.dataInfoTall}>
            <Icon name={"calendar"} size={getSize(45, 45, 65, 90)} style={{ color: "#fff" }} />
            <View style={announcementStyles.infoText}>
              <Text style={{ color: "#fff", fontSize: getSize(15, 15, 23, 30) }}>A To Do at:</Text>
              <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{eventDate}</Text>
              <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{eventTime}</Text>
            </View>
          </View>
          <View style={announcementStyles.announcementTitleRow}>
            <Text style={announcementStyles.announcementTitle}>
              {plannerNote.title}
            </Text>
          </View>
          {
            plannerNote.details &&
            plannerNote.details !== "" &&
            <View style={announcementStyles.announcementMessageRow}>
              <Text style={announcementStyles.announcementMessage}>
                {htmlView(plannerNote.details)}
              </Text>
            </View>
          }
        </View>
      </ScrollView>
    )
  }

  render() {
    if (this.props.isRefreshingAssignment) {
      return <View />
    }

    const { assignment } = this.props

    switch (assignment.plannable_type) {
      case "calendar_event":
        return this.renderCalendarEvent(assignment)
      case "planner_note":
        return this.renderPlannerNote(assignment)
      default:
        return this.renderAssignment(assignment)
    }
  }
}
