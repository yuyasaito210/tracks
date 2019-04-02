import React, { PureComponent } from 'react'
import {
  AsyncStorage,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import styles from './styles'
import { getSize } from '/lib/helpers/styleSizes'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'
import StyleConsts from '/constants/styleConstants'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class BackButton extends PureComponent {
  onButtonPress () {
    const isActivating = AsyncStorage.getItem('isActivating').then(() => {
      AsyncStorage.removeItem('isActivating').then(() => {
        if (isActivating) {
          Actions.Login({ type: ActionConst.RESET })
        } else {
          Actions.pop()
        }
      })
    })
  }
  render () {
    return (
      <TouchableHighlight
        style={styles.backButton}
        onPress={() => this.onButtonPress(this)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.backButtonContainer}>
          <Icon name={'back'} size={getSize(25, 25, 35, 50)} />
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default BackButton
