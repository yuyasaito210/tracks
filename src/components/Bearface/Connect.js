import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Connect extends Component {
  onButtonPress () {
    this.props.onConnect()
  }

  render () {
    return (
      <View style={styles.connectView}>
        <View style={styles.column}>
          <Text style={styles.connectToBearfaceText}>Connect to your Bearface account online.</Text>
        </View>
        <TouchableHighlight onPress={() => this.onButtonPress()} style={styles.connectButton}>
          <View style={styles.connectButtonView}>
            <Text style={styles.connectButtonText}>Connect</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
