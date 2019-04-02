import React, { Component } from "react"
import {
  StatusBar,
  View,
} from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActions from "/actions/userActions"
import AppView from "/containers/AppView"
import SettingsView from "/components/SettingsView"
import TabBar from "/components/Helpers/TabBar"
import styles from "./styles"

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...userActions }, dispatch),
  }
}
function mapStateToProps(state) {
  return {
    allowNotifications: state.user.profile.allow_mobile_notifications,
  }
}

class Settings extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <SettingsView
            allowNotifications={this.props.allowNotifications}
            onNotificationToggle={this.props.actions.updateAllowMobileNotifications} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
