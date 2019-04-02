import React, { PureComponent } from 'react'
import { View, Text, Switch } from 'react-native'
import styles from './styles'

export default class Settings extends PureComponent {
  render () {
    return (
      <View>
        <View style={styles.personData}>
          <Text style={styles.inputTitle}>Account</Text>
          <Text style={styles.input}>{this.props.email}</Text>
        </View>
        <View style={styles.columnWrapper}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={[styles.bearfaceWrapper, styles.notificationsWrapper]}>
            <View
              style={styles.notificationsView}>
              <Text style={styles.bearfaceText}>Connect</Text>
              <Switch
                onValueChange={() => this.props.onConnect()}
                value={this.props.switch}
              />
            </View>
          </View>
          <View style={[styles.bearfaceWrapper, styles.notificationsWrapper]}>
            <View
              style={styles.notificationsView}>
              <Text style={styles.bearfaceText}>Notifications</Text>
              <Switch
                onValueChange={() => this.props.onNotifications()}
                value={this.props.notifications} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
