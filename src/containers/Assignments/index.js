import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as courseActions from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import AssignmentsView from "/components/Assignments"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class Assignments extends PureComponent {
  componentDidMount() {
    this.props.actions.recordMobileUserEvent("AssignmentsViewed", {}, this.props.courseId)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <AssignmentsView
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
  return {
    assignments: state.course.assignments,
    courseId: state.course.selectedCourse.id,
    plannerItems: state.course.plannerItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...courseActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignments)
