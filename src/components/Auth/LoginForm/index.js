import {
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'
import styles from './styles'
import StyleConsts from '/constants/styleConstants'
import Translations from '/lib/Translations.json'
import { getSize } from '/lib/helpers/styleSizes'

I18n.translations = Translations
const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitLogin () {
    this.props.onFormSubimt(this.state.email, this.state.password)
  }

  render () {
    return (
      <View style={styles.loginFormContainer}>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name={'email'} size={getSize(20, 20, 30, 40)} />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
            returnKeyType={'done'}
            value={this.state.email}
            multiline={false}
            keyboardType={'email-address'}
            placeholder={'email address'}
            placeholderTextColor={StyleConsts.colors.lightGrey}
            />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name={'lock'} size={getSize(20, 20, 30, 40)} />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            returnKeyType={'done'}
            placeholder={'password'}
            placeholderTextColor={StyleConsts.colors.lightGrey}
            multiline={false}
          />
        </View>
        <View style={styles.loginErrorContainer}>
          <Text style={styles.loginError}>{this.props.loginError ? I18n.t('Login.login_error') : ''}</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          isDisabled={this.props.isDisabled}
          onPress={() => this.onSubmitLogin()}
          underlayColor={StyleConsts.colors.buttonGreyClicked}>
          <Text style={styles.buttonText}>{ I18n.t('Login.login') }</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

LoginForm.propTypes = {
  onFormSubimt: PropTypes.func,
  loginError: PropTypes.bool,
  isDisabled: PropTypes.bool
}

LoginForm.defaultProps = {
  onFormSubimt: () => {},
  loginError: false,
  isDisabled: false
}

export default LoginForm
