import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { Actions } from "react-native-router-flux"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import IconBadge from "react-native-icon-badge"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class Home extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    activityData: PropTypes.shape({
      late_assignments: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      missing_assignments: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
    announcements: PropTypes.arrayOf(PropTypes.object).isRequired,
    assignments: PropTypes.arrayOf(PropTypes.object).isRequired,
    course: PropTypes.object.isRequired,
    gradeData: PropTypes.shape({
      current_grade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
    plannerItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)

    this.goToAssignment = this.goToAssignment.bind(this)
  }

  componentDidMount() {
    this.refreshCourseDataIfNeeded()
  }

  componentDidUpdate() {
    this.refreshCourseDataIfNeeded()
  }

  onAnnouncements() {
    Actions.Announcements()
  }

  onAssignments() {
    Actions.Assignments()
  }

  goToAssignment(assignment) {
    this.props.actions.selectAssignment(assignment)
  }

  refreshCourseDataIfNeeded() {
    const refreshInterval = 14400000 // 4 hours
    const shouldRefreshCourse = ((this.props.course.courseUpdatedAt || Date.now()) + refreshInterval) < Date.now()
    if (shouldRefreshCourse) {
      this.props.actions.getCourse(this.props.course.id)
    }
  }

  render() {
    const gradeStyle = Number.isInteger(this.props.gradeData.current_grade) && this.props.gradeData.current_grade < 60 ? "activityDanger" : ""
    const upcomingAssignmentCount = this.props.assignments.filter(assignment => assignment.to_do).length + this.props.plannerItems.filter(plannerItem => plannerItem.end_at && moment(plannerItem.end_at).isAfter(new Date())).length
    const unreadAnnouncementCount = this.props.announcements.filter(announcement => !announcement.read).length
    const upcomingAssignment = this.props.assignments.filter(assignment => assignment.to_do && assignment.due_date).sort((a, b) => {
      const aDate = moment(a.due_date)
      const bDate = moment(b.due_date)
      if (aDate.isBefore(bDate)) {
        return -1
      }
      return 1
    })[0]
    const dueDate = upcomingAssignment ? `${moment(upcomingAssignment.due_date).format("dddd, MMMM Do")}` : ""
    return (
      <View style={styles.container}>
        <Text style={{ color: StyleConsts.colors.navy, fontSize: getSize(17, 17, 25, 34), fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
          {this.props.course.name}
        </Text>
        <View style={styles.activityRow}>
          <View style={styles.activityWrapper}>
            <Text style={[styles.activityNumber, styles[gradeStyle]]}>{this.props.gradeData.current_grade}%</Text>
            <Text style={[styles.activityText, styles[gradeStyle]]}>GRADE</Text>
          </View>
          <View style={styles.activityWrapper}>
            <Text style={[styles.activityNumber, styles[gradeStyle]]}>{this.props.activityData.missing_assignments}</Text>
            <Text style={[styles.activityText, styles[gradeStyle]]}>MISSING</Text>
          </View>
          <View style={styles.activityWrapper}>
            <Text style={[styles.activityNumber, styles[gradeStyle]]}>{this.props.activityData.late_assignments}</Text>
            <Text style={[styles.activityText, styles[gradeStyle]]}>LATE</Text>
          </View>
        </View>
        { upcomingAssignment &&
          <TouchableHighlight
            onPress={() => this.goToAssignment(upcomingAssignment)}>
            <View style={styles.dataInfo}>
              <Icon name={"calendar"} size={getSize(45, 45, 65, 90)} style={{ color: "#fff" }} />
              <View style={styles.infoText}>
                <Text style={{ color: "#fff", fontSize: getSize(15, 15, 23, 30) }}>Your next assignment is due:</Text>
                <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{dueDate}</Text>
              </View>
            </View>
          </TouchableHighlight> }

        <View style={styles.topRow}>
          <IconBadge
            MainElement={
              <TouchableHighlight
                style={styles.assignmentsWrapper}
                      onPress={() => this.onAssignments()}
                      underlayColor={StyleConsts.colors.navy}>
                <View style={{ color: StyleConsts.colors.white, justifyContent: "center", alignItems: "center" }}>
                  <View style={{ alignItems: "center" }}>
                    <Icon name={"notebook"} size={getSize(45, 45, 70, 90)} color={StyleConsts.colors.white} />
                  </View>
                  <Text style={{ color: StyleConsts.colors.white, fontWeight: "bold", fontSize: getSize(17, 17, 25, 34), marginTop: 20 }}>To Do</Text>
                  <Text style={{ color: StyleConsts.colors.white, fontWeight: "300", fontSize: getSize(15, 15, 22, 30), marginTop: 5 }}>What&apos;s Next?</Text>
                </View>
              </TouchableHighlight>
            }
            BadgeElement={
              <Text style={{ color: StyleConsts.colors.white }}>{upcomingAssignmentCount}</Text>
            }
            IconBadgeStyle={styles.iconBadge}
            Hidden={upcomingAssignmentCount === 0} />

          <IconBadge
            MainElement={
              <TouchableHighlight
                style={styles.announcementsWrapper}
                      onPress={() => this.onAnnouncements()}
                      underlayColor={StyleConsts.colors.teal}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <View style={{ alignItems: "center" }}>
                    <Icon name={"bullhorn"} size={getSize(45, 45, 70, 90)} color={StyleConsts.colors.white} />
                  </View>
                  <Text style={{ color: StyleConsts.colors.white, fontWeight: "bold", fontSize: getSize(17, 17, 25, 34), marginTop: 20 }}>Announcements</Text>
                  <Text style={{ color: StyleConsts.colors.white, fontWeight: "300", fontSize: getSize(15, 15, 22, 30), marginTop: 5 }}>From Your Prof</Text>
                </View>
              </TouchableHighlight>
            }
            BadgeElement={
              <Text style={{ color: StyleConsts.colors.white }}>{unreadAnnouncementCount}</Text>
            }
            IconBadgeStyle={styles.iconBadge}
            Hidden={unreadAnnouncementCount === 0} />
        </View>

        {/* <TouchableHighlight
            style={styles.assessmentsWrapper}
            onPress={() => this.props.actions.getCourse(this.props.course.id)}
            underlayColor={StyleConsts.colors.yellow}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
            <Icon name={"assessment"} size={getSize(45, 45, 70, 90)} />
            </View>
            <Text style={{ fontWeight: "bold", fontSize: getSize(17, 17, 25, 34), marginTop: 20 }}>Self-Assessments</Text>
            <Text style={{ fontWeight: "300", fontSize: getSize(15, 15, 22, 30), marginTop: 5 }}>Learn about yourself.</Text>
            </View>
            </TouchableHighlight> */}

      </View>
    )
  }
}
