import
{
  View,
  Text,
  TextInput,
  TouchableHighlight
}
from 'react-native'
import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig)

import styles from './styles'
import { getSize } from '/lib/helpers/styleSizes'
import StyleConsts from '/constants/styleConstants'

import Translations from '/lib/Translations.json'
I18n.translations = Translations

export default class ForgotPasswordForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  onSubmitForm () {
    this.props.onFormSubmit(this.state.email)
  }

  render () {
    return (
      <View style={[styles.loginFormContainer, {padding: 20}]}>
        <View style={styles.resetPasswordInfo}>
          <Text style={styles.resetPasswordTitle}>{I18n.t('Login.reset_password_title')}</Text>
          <Text style={styles.resetPasswordText}>{I18n.t('Login.reset_password_text')}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name={'email'} size={getSize(20, 20, 30, 40)} />
          <TextInput
              ref='email'
              multiline={false}
              style={styles.input}
              onChangeText={(text) => this.setState({email: text})}
              returnKeyType='done'
              value={this.state.email}
              keyboardType='email-address'
              placeholder={'email address'}
              placeholderTextColor={ StyleConsts.colors.navy}
            />
        </View>
        <View style={styles.loginErrorContainer}>
          <Text style={styles.loginError}>{this.props.resetPasswordError ? I18n.t('Login.reset_password_error') : ''}</Text>
        </View>
        <TouchableHighlight style={styles.button}
          isDisabled={this.props.isDisabled}
          onPress={() => this.onSubmitForm()}
          underlayColor={StyleConsts.colors.buttonGreyClicked}>
            <Text style={styles.buttonText}>{ I18n.t('Login.reset_password') }</Text>
        </TouchableHighlight>
        {this.props.loginError}
    </View>
    )
  }
}
