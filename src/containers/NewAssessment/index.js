import React, { PureComponent } from "react"
import {
  StatusBar,
  View,
} from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as assessmentActions from "/actions/assessmentActions"
import * as globalActions from "/actions/globalActions"
import styles from "./styles"
import AppView from "/containers/AppView"
import NewAssessmentView from "/components/NewAssessment"
import TabBar from "/components/Helpers/TabBar"

function mapStateToProps(state) {
  return {
    answersList: state.assessment.answersList,
    areAnswersSubmitting: state.assessment.areAnswersSubmitting,
    assessment: state.assessment.assessment,
    assessmentResults: state.assessment.assessmentResults,
    assignmentId: state.course.selectedAssignment.id,
    attemptId: state.assessment.attemptId,
    courseId: state.course.selectedCourse.id,
    dynamicData: state.assessment.dynamicData,
    isAllowedScroll: state.global.isAllowedScroll,
    isCompletingAssessment: state.assessment.isCompletingAssessment,
    isGuidedLearning: state.assessment.isGuidedLearning,
    isNextPageAllowed: state.assessment.isNextPageAllowed,
    isResultsPageAllowed: state.assessment.isResultsPageAllowed,
    isWBA: state.assessment.isWBA,
    isWaitingOnDynamicData: state.assessment.isWaitingOnDynamicData,
    priorityData: state.assessment.priorityData,
    showGlossary: state.assessment.showGlossary,
    showTOC: state.assessment.showTOC,
    standardResponses: state.assessment.standardResponses,
    title: state.assessment.title,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...assessmentActions, ...globalActions }, dispatch),
  }
}

class NewAssessment extends PureComponent {
  render() {
    const showButtons = !this.props.assessment.onLastPage() || this.props.isGuidedLearning

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <NewAssessmentView {...this.props} />
        </AppView>
        <TabBar
          assessment={this.props.assessment}
          standardResponses={this.props.standardResponses}
          buttons={showButtons}
          actions={this.props.actions}
          isCompletingAssessment={this.props.isCompletingAssessment}
          isGuidedLearning={this.props.isGuidedLearning}
          isNextPageAllowed={this.props.isNextPageAllowed}
          showGlossary={this.props.showGlossary}
          showTOC={this.props.showTOC} />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAssessment)
