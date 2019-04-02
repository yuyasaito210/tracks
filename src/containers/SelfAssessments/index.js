import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as assessmentActions from "/actions/assessmentActions"
import AppView from "/containers/AppView"
import SelfAssessmentsView from "/components/SelfAssessments"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class SelfAssessments extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <SelfAssessmentsView
            renderAssessmentIntro={this.props.actions.renderAssessmentIntro}
            assessments={this.props.assessments}
            assignments={this.props.assignments}
            assessmentsLoading={this.props.assessmentsLoading} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.user.assignments,
    assessments: state.user.assessments,
    assessmentsLoading: state.user.assessmentsLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...assessmentActions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfAssessments)
