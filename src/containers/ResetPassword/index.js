import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '/actions/authActions'
import React, { Component } from 'react'
import {
  View,
  StatusBar
} from 'react-native'
import I18n from "react-native-i18n"
import AppView from '/containers/AppView'
import Logo from '/components/Auth/Logo'
import Footer from '/components/Auth/Footer'
import ResetPasswordForm from '/components/Auth/ResetPasswordForm'
import SuccessReset from '/components/Auth/ResetPasswordForm/SuccessReset'
import BackButton from '/components/Auth/BackButton'
import styles from './styles'
import Translations from '/lib/Translations.json'

I18n.translations = Translations

function mapStateToProps (state) {
  return {
    resetPasswordError: state.auth.resetPasswordError,
    isResetComplited: state.auth.isResetComplited
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}

class ForgotPassword extends Component {

  onSubmitLogin () {
    this.props.actions.login(this.state.email, this.state.password)
  }

  render () {
    const ResetPassword = this.props.isResetComplited ? SuccessReset : ResetPasswordForm

    return (
      <AppView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          {!this.props.isResetComplited &&
            <BackButton />
          }
          <Logo
            theme={'light'}
            logo />
          <ResetPassword
            onFormSubmit={this.props.actions.resetPassword}
            completeReset={this.props.actions.completeReset}
            resetPasswordError={this.props.resetPasswordError}
          />
          <Footer theme={'light'} />
        </View>
      </AppView>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
