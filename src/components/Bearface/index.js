import React, { Component } from 'react'
import { AsyncStorage, View, Image } from 'react-native'
import Connect from './Connect'
import Settings from './Settings'
import styles from './styles'
import config from '/services/config'
import { Actions } from 'react-native-router-flux'

const bearfaceImg = require('/images/bearfaceImg.png')

class BearfaceIntegrations extends Component {
  constructor (props) {
    super(props)

    this.onConnect = this.onConnect.bind(this)
    this.onNotifications = this.onNotifications.bind(this)
    this.isConnected = this.isConnected.bind(this)
    this.notificationsAllowed = this.notificationsAllowed.bind(this)
  }

  notificationsAllowed () {
    return this.props.allowNotifications
  }

  onNotifications () {
    this.props.actions.updateIntegrationNotificationPermission(!this.notificationsAllowed())
  }

  onConnect () {
    if (!this.isConnected()) {
      AsyncStorage.getItem('authToken')
        .then((token) => {
          Actions.IntegrationsWebView({ url: `${config.api.url}/bearface?auth_token=${token}`, method: 'POST', onComplete: this.integrationConnected.bind(this), onFailed: this.integrationFailed.bind(this) })
        })
    } else {
      this.props.actions.deleteIntegration()
    }
  }

  isConnected () {
    return this.props.email !== undefined
  }

  integrationConnected () {
    this.props.actions.getIntegrationStatus()
    Actions.pop()
  }

  integrationFailed () {
    this.props.actions.getIntegrationStatus()
    Actions.pop()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Image source={bearfaceImg} />
        </View>
        {this.isConnected()
        ? <Settings
          email={this.props.email}
          notifications={this.notificationsAllowed()}
          onNotifications={this.onNotifications}
          switch={this.isConnected()}
          onConnect={this.onConnect} />
        : <Connect onConnect={this.onConnect} />
        }
      </View>
    )
  }
}

export default BearfaceIntegrations
