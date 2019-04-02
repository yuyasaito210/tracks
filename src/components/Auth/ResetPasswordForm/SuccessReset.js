import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import I18n from 'react-native-i18n'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import StyleConsts from '/constants/styleConstants'

import Translations from '/lib/Translations.json'

I18n.translations = Translations

class SuccessReset extends Component {

  completeReset () {
    this.props.completeReset()
    Actions.Login()
  }

  render () {
    return (
      <View style={{ padding: 20 }}>
        <View style={[styles.resetPasswordInfo]}>
          <Text style={[
            styles.resetPasswordTitle,
            { marginBottom: 20, fontFamily: StyleConsts.fontFamily.openSansBold }]}>
            { I18n.t('ResetPassword.reset_password') }
          </Text>
          <Text style={styles.resetPasswordText}>
            { I18n.t('ResetPassword.reset_password_text') }
          </Text>
          <Text style={styles.resetPasswordText}>
            { I18n.t('ResetPassword.reset_password_paragraph') }
          </Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          isDisabled={this.props.isDisabled}
          onPress={() => this.completeReset()}
          underlayColor={StyleConsts.colors.buttonGreyClicked}>
          <Text style={styles.buttonText}>
            { I18n.t('ResetPassword.login') }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SuccessReset
