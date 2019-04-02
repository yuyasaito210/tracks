import React, { Component } from 'react'
import { View,
  Text,
  TouchableHighlight
} from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import styles from './styles'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'
import { getSize } from '/lib/helpers/styleSizes'
import StyleConsts from '/constants/styleConstants'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class ErrorView extends Component {
  renderServerErrorView () {
    return (
      <View style={styles.container}>
        <View style={{ margin: 50, padding: 50 }}>
          <Icon name={'error'} size={getSize(90, 90, 145, 180)} style={styles.icon} />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.titleError}>Connection to server lost.</Text>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text style={styles.subTextError}>We are sorry an error occured.</Text>
          </View>
          <TouchableHighlight
            underlayColor={StyleConsts.colors.buttonGreyClicked}
            onPress={() => Actions.pop({ type: ActionConst.RESET })}
            style={styles.buttonTryAgain}>
            <Text style={styles.buttonText}>Please try again.</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  renderConnectionErrorView () {
    return (
      <View style={styles.container}>
        <View style={{ margin: 50, padding: 50 }}>
          <Icon name={'info'} size={getSize(90, 90, 145, 180)} style={styles.icon} />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.titleError}>No internet connection.</Text>
          <View style={{ alignItems: 'center', padding: 10, paddingHorizontal: 40 }}>
            <Text style={styles.subTextError}>
              Oy! Looks like you&rsquore not connected to the internet.
            </Text>
          </View>
          <View style={styles.buttonTryAgain}>
            <Text style={styles.buttonText}>Please reconnect and try again.</Text>
          </View>
        </View>
      </View>
    )
  }

  render () {
    const { errorType } = this.props

    return (
      <View style={{ flex: 1 }}>
        {errorType === 'connection' ? this.renderConnectionErrorView() : this.renderServerErrorView()}
      </View>
    )
  }
}

export default ErrorView
