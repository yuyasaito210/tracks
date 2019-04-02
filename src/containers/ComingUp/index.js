import moment from "moment"
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as courseActions from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import ComingUpView from "/components/ComingUp"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class ComingUp extends PureComponent {
  componentDidMount() {
    this.props.actions.recordMobileUserEvent("ComingUpViewed", {}, this.props.courseId)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <ComingUpView
            actions={this.props.actions}
            assignments={this.props.assignments}
            plannerItems={this.props.plannerItems} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const now = new Date()
  return {
    assignments: state.course.assignments.filter(assignment => assignment.to_do),
    courseId: state.course.selectedCourse.id,
    plannerItems: state.course.plannerItems.filter(plannerItem => plannerItem.end_at && moment(plannerItem.end_at).isAfter(now)),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...courseActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingUp)
