import React, { Component } from "react"
import {
  StatusBar,
  View,
} from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Actions, ActionConst } from "react-native-router-flux"
import AppView from "/containers/AppView"
import * as authActions from "/actions/authActions"
import { getCourse, selectAnnouncement, selectAssignment, selectCourseById } from "/actions/courseActions"
import * as globalActions from "/actions/globalActions"
import * as userActions from "/actions/userActions"
import HomeScreen from "/components/Home"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

function mapStateToProps(state) {
  return {
    activityData: state.course.activityData,
    announcements: state.course.announcements,
    assignments: state.course.assignments,
    course: state.course.selectedCourse,
    external: state.external,
    gradeData: state.course.gradeData,
    isAuthenticated: state.auth.isAuthenticated,
    isLoadingCourseData: state.course.isLoadingCourseData,
    needsCourseData: state.course.needsCourseData,
    plannerItems: state.course.plannerItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...userActions, ...authActions, ...globalActions, getCourse, selectAnnouncement, selectAssignment, selectCourseById }, dispatch),
  }
}

class Home extends Component {

  constructor(props) {
    super(props)
    if (!this.props.course || !this.props.course.id) {
      Actions.Courses({ type: ActionConst.RESET })
    }
  }

  componentDidMount() {
    // this.props.actions.getAssessments()
    this.getCourseData(true)
  }

  componentDidUpdate() {
    this.getCourseData()
  }

  getCourseData(mounted = false) {
    if (this.props.isLoadingCourseData) {
      return
    }
    if (this.props.external.course_id && this.props.external.announcement_id) {
      const announcement = this.props.announcements.find(announce => announce.id === this.props.external.announcement_id)
      if (!announcement) {
        this.props.actions.getCourse(this.props.external.course_id)
      } else {
        const shouldSelectCourse = this.props.external.course_id !== (this.props.course || {}).id
        if (shouldSelectCourse) {
          this.props.actions.selectCourseById(this.props.external.course_id)
        } else {
          this.props.actions.selectAnnouncement(announcement)
          Actions.Announcement({ type: ActionConst.RESET })
        }
      }
    } else if (this.props.external.course_id && this.props.external.assignment_id) {
      const assignment = this.props.assignments.find(tempAssignment => tempAssignment.id === this.props.external.assignment_id)
      if (!assignment) {
        this.props.actions.getCourse(this.props.external.course_id)
      } else {
        const shouldSelectCourse = this.props.external.course_id !== (this.props.course || {}).id
        if (shouldSelectCourse) {
          this.props.actions.selectCourseById(this.props.external.course_id)
        } else {
          this.props.actions.selectAssignment(assignment)
          Actions.Assignment({ type: ActionConst.RESET })
        }
      }
    } else if (this.props.needsCourseData && !this.props.isLoadingCourseData) {
      this.props.actions.getCourse(this.props.course.id)
    } else if (mounted) {
      const { course } = this.props
      const data = {
        id: course.id,
        name: course.name,
      }
      this.props.actions.recordMobileUserEvent("CourseViewed", data, course.id)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          { this.props.isAuthenticated &&
            !this.props.isLoadingCourseData &&
            <HomeScreen
              actions={this.props.actions}
              activityData={this.props.activityData}
              announcements={this.props.announcements}
              assignments={this.props.assignments}
              course={this.props.course}
              gradeData={this.props.gradeData}
              plannerItems={this.props.plannerItems} />
          }
        </AppView>
        <TabBar />
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
