import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { AsyncStorage, KeyboardAvoidingView, Platform, View } from "react-native"
import React from "react"
import Spinner from "react-native-loading-spinner-overlay"
import KeyboardAvoidingViewFix from "/components/Helpers/KeyboardAvoidingViewFix"
import PushController from "/lib/helpers/PushController"
// import PushService from "/lib/helpers/PushService"
import StyleConsts from "/constants/styleConstants"
import * as authActions from "/actions/authActions"
import PushNotification from "react-native-push-notification"

function mapStateToProps(state) {
  return {
    deviceNeedsRegistering: state.auth.deviceNeedsRegistering,
    isAllowedScroll: state.global.isAllowedScroll,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.global.isLoading,
    loadingMessage: state.global.loadingMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch),
  }
}

class AppView extends React.Component {
  static propTypes = {
    deviceNeedsRegistering: PropTypes.bool.isRequired,
    isAllowedScroll: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadingMessage: PropTypes.string.isRequired,
    showTabBar: PropTypes.bool,
  }

  static defaultProps = {
    showTabBar: true,
  }

  /* constructor(props) {
   *   super(props)

   *   // this.handleOnPushNotification = this.handleOnPushNotification.bind(this)
   *   // this.handleOnPushRegister = this.handleOnPushRegister.bind(this)
   * } */

  /* componentDidMount() {
   *   PushService.setCallbacks(this.handleOnPushRegister, this.handleOnPushNotification)
   * } */

  getRootView() {
    if (this.props.isAllowedScroll) {
      const marginBottom = this.props.showTabBar ? StyleConsts.tabBarHeight : 0
      return (
        <KeyboardAvoidingViewFix style={{ flex: 1, marginBottom }} enabled behavior="height">
          {this.props.children}
          <Spinner visible={this.props.isLoading} textContent={this.props.loadingMessage} textStyle={{ color: "#FFF" }} />
          { this.props.isAuthenticated &&
            <PushController />
          }
        </KeyboardAvoidingViewFix>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
        <Spinner visible={this.props.isLoading} textContent={this.props.loadingMessage} textStyle={{ color: "#FFF" }} />
        { this.props.isAuthenticated &&
          <PushController />
        }
      </View>
    )
  }

  /* handleOnPushRegister(token) {
   *   if (!this.props.deviceNeedsRegistering) {
   *     console.log("Not registering")
   *     return
   *   }
   *   console.log("--- Registering ---")
   *   AsyncStorage.setItem("deviceId", token.token)
   *   this.props.actions.registerDevice(token.token, token.os)
   *   console.log("TOKEN:", token)
   * }

   * handleOnPushNotification(notification) {
   *   console.log("APPVIEW NOTIFICATION:", notification)
   *   if (Platform.OS !== "ios" && !notification.foreground) {
   *     PushNotification.localNotification({
   *       autoCancel: true, // (optional) default: true
   *       largeIcon: notification.icon, // (optional) default: "ic_launcher"
   *       smallIcon: notification.icon, // (optional) default: "ic_notification" with fallback for "ic_launcher"
   *       vibrate: true, // (optional) default: true
   *       vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
   *       title: notification.title, // (optional)
   *       message: notification.body, // (required)
   *       playSound: false, // (optional) default: true
   *       data: JSON.stringify({
   *         announcement_id: notification.announcement_id,
   *         course_id: notification.course_id,
   *       }),
   *     })
   *   }
   * } */

  render() {
    return this.getRootView()
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppView)
