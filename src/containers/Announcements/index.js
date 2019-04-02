import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as courseActions from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import AnnouncementsView from "/components/Announcements"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class Announcements extends PureComponent {
  componentDidMount() {
    this.props.actions.recordMobileUserEvent("AnnouncementsViewed", {}, this.props.course.id)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <AnnouncementsView
            actions={this.props.actions}
            announcements={this.props.announcements}
            course={this.props.course}
            isRefreshingAnnouncements={this.props.isRefreshingAnnouncements} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.course.announcements,
    course: state.course.selectedCourse,
    isRefreshingAnnouncements: state.course.isRefreshingAnnouncements,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...courseActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcements)
