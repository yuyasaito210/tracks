import React, { Component } from "react"
import {
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native"
import ListButtonControl from "/components/Helpers/ListButtonControl"
import PrivacyPolicyView from "./PrivacyPolicyView"
import styles from "./styles"

export default class SettingsView extends Component {
  constructor(props) {
    super(props)

    this.onNotifications = this.onNotifications.bind(this)
    this.state = {
      showPrivacyPolicy: false,
    }
  }

  onShowPrivacyPolicy(button) {
    this.setState({
      [button]: !this.state[button],
    })
  }

  onNotifications() {
    this.props.onNotificationToggle(!this.props.allowNotifications)
  }

  render() {
    const { privacyPolicyText } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.notificationsWrapper}>
          <View
            style={styles.notificationsView}>
            <Text style={styles.bearfaceText}>Notifications</Text>
            <Switch
              onValueChange={() => this.onNotifications()}
              value={this.props.allowNotifications} />
          </View>
        </View>

        <View style={styles.columnWrapper}>
          <ListButtonControl
            active={this.state.showPrivacyPolicy}
            onPress={() => this.onShowPrivacyPolicy("showPrivacyPolicy")}
            text={"Privacy Policy"} />
          { this.state.showPrivacyPolicy && this.props &&
            <PrivacyPolicyView /> }
        </View>
      </ScrollView>
    )
  }
}
