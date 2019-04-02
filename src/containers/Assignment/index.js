import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { Actions } from "react-native-router-flux"
import { bindActionCreators } from "redux"
import * as assessmentActions from "/actions/assessmentActions"
import { clearCustomBackTitle } from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import AssignmentView from "/components/Assignment"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class Assignment extends PureComponent {
  componentDidMount() {
    const { assignment } = this.props
    const data = {
      id: assignment.id,
      name: assignment.name,
    }
    this.props.actions.recordMobileUserEvent("AssignmentViewed", data, assignment.course_id)
    if (this.props.customBackTitle !== undefined) {
      Actions.refresh({ backTitle: this.props.customBackTitle })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <AssignmentView
            assignment={this.props.assignment}
            isRefreshingAssignment={this.props.isRefreshingAssignment}
            renderAssessmentIntro={this.props.actions.renderAssessmentIntro} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignment: state.course.selectedAssignment,
    customBackTitle: state.course.customBackTitle,
    isRefreshingAssignment: state.course.isRefreshingAssignment,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...assessmentActions, clearCustomBackTitle, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignment)
