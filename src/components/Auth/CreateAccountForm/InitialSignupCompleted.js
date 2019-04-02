import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

class InitialSignupCompleted extends Component {
  backToLogin () {
    Actions.Login()
  }
  render () {
    return (
      <View style={styles.finishRegistrationContainer}>
        <View style={styles.finishTitle}>
          <Text style={styles.finishTitleHeader}>One more step.</Text>
        </View>
        <View style={styles.finishTitle}>
          <Text style={styles.finishTitleText}>
            An email has been sent to the address you have provided.
          </Text>
        </View>
        <View style={styles.finishTitle}>
          <Text style={styles.finishTitleText}>
            Click on the link provided to continue setting up your BearTracks account.
          </Text>
        </View>
        <TouchableHighlight
          onPress={this.backToLogin}
          underlayColor={'#ffffff'}>
          <Text style={styles.backToLogin}> Back to login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default InitialSignupCompleted
