import React, { Component } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as courseActions from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import CoursesView from "/components/Courses"
import styles from "./styles"

class Courses extends Component {
  componentDidMount() {
    this.props.actions.getCourses()
    this.props.actions.recordMobileUserEvent("CoursesViewed")
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <CoursesView
            actions={this.props.actions}
            courses={this.props.courses} />
        </AppView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.course.courses,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...courseActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
