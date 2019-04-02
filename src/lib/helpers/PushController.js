import { Component } from "react"
import { AsyncStorage, Platform, PushNotificationIOS } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import PushNotification from "react-native-push-notification"

import * as authActions from "/actions/authActions"
import { updateExternalData } from "/actions/externalActions"

function mapStateToProps(state) {
  return {
    deviceNeedsRegistering: state.auth.deviceNeedsRegistering,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, updateExternalData }, dispatch),
  }
}

class PushController extends Component {
  componentDidMount() {
    const self = this
    PushNotification.configure({

      // (optional) Called when Token is generated (iOS and Android)
      onRegister(token) {
        if (!self.props.deviceNeedsRegistering) {
          console.log("Not registering")
          return
        }
        console.log("--- Registering ---")
        AsyncStorage.setItem("deviceId", token.token)
        self.props.actions.registerDevice(token.token, token.os)
        console.log("TOKEN:", token)
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification(notification) {
        console.log("NOTIFICATION:", notification)
        if (Platform.OS === "ios") {
          if (notification.userInteraction) {
            self.props.actions.updateExternalData(notification.data || {})
          }
        } else {
          if (!notification.foreground) {
            const { body, icon, title, ...dataObj } = notification.data
            PushNotification.localNotification({
              autoCancel: true,
              largeIcon: icon,
              smallIcon: icon,
              title,
              message: body,
              data: JSON.stringify({
                activityName: "com.perceivant.beartracks.MainActivity",
                ...dataObj,
              }),
            })
          } else {
            console.log("HERE HERE HERE:", notification)
          }
        }
        console.log(notification.finish)
        console.log(notification.finish.length)
        // notification.finish(PushNotificationIOS.FetchResult.NoData)
      },

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications,
      //   but is need to receive remote push notifications)
      senderID: "15915431850",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       Push      */
      requestPermissions: true,
    })
  }

  render() {
    return null
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PushController)
