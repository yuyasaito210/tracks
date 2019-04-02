import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import * as courseActions from "/actions/courseActions"
import { recordMobileUserEvent } from "/actions/globalActions"
import AppView from "/containers/AppView"
import AnnouncementView from "/components/Announcement"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

class Announcement extends PureComponent {
  componentDidMount() {
    const { announcement } = this.props
    const data = {
      id: announcement.id,
      name: announcement.title,
    }
    this.props.actions.recordMobileUserEvent("AnnouncementViewed", data, this.props.course.id)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <AnnouncementView
            actions={this.props.actions}
            announcement={this.props.announcement}
            courseId={this.props.course.id} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    announcement: state.course.selectedAnnouncement,
    course: state.course.selectedCourse,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...courseActions, recordMobileUserEvent }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
