import React, { PureComponent } from "react"
import { View, StatusBar } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as assessmentActions from "/actions/assessmentActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AssessmentView from "/components/Assessment"
import TabBar from "/components/Helpers/TabBar"
import AppView from "/containers/AppView"
import styles from "./styles"

class SelfAssessments extends PureComponent {
  componentDidMount() {
    const { assignment } = this.props
    const data = {
      id: assignment.id,
      name: assignment.name,
    }
    this.props.actions.recordMobileUserEvent("AssignmentHistoryViewed", data, this.props.courseId)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <AssessmentView
            startNewAssessment={this.props.actions.startNewAssessment}
            continueAttempt={this.props.actions.continueAttempt}
            assessmentIntro={this.props.assessmentIntro}
            assignment={this.props.assignment}
            courseId={this.props.courseId}
            sectionId={this.props.sectionId} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    assessmentIntro: state.assessment.assessmentIntro,
    assignment: state.course.selectedAssignment,
    courseId: state.assessment.courseId,
    sectionId: ((state.course.selectedCourse.sections || [])[0] || {}).id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...assessmentActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfAssessments)
