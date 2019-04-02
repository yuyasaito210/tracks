import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import { Buffer } from "safe-buffer"
import AppView from "/containers/AppView"

import * as authActions from "/actions/authActions"

import React, { Component } from "react"
import
{
  Platform,
  Text,
  TouchableHighlight,
  View,
}
from "react-native"
import I18n from "react-native-i18n"
import config from "/services/config"
import Logo from "/components/Auth/Logo"
import Footer from "/components/Auth/Footer"
import StyleConsts from "/constants/styleConstants"
import Translations from "/lib/Translations.json"

I18n.translations = Translations
// const Buffer = require("safe-buffer").Buffer

function mapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch),
  }
}

import styles from "./styles"

class Login extends Component {
  createAccount() {
    Actions.CreateAccount()
  }
  oauthLogin() {
    const payload = new Buffer(JSON.stringify({ platform: Platform.OS, version: Platform.Version, login_version: 2 })).toString("base64")
    Actions.OauthLoginWebView({
      url: `${config.api.url}/oauth/auth?state=${payload}`,
      method: "GET",
      onComplete: data => this.props.actions.oauthLogin(data.email, data.authToken, data.profile),
      onFailed: () => console.log("FAILED"),
    })
  }
  resetPassword() {
    Actions.ResetPassword({
      title: "ResetPassword",
    })
  }

  render() {
    return (
      <AppView>
        <View style={styles.container}>
          <Logo logo />
          <TouchableHighlight
            style={styles.button}
            onPress={this.oauthLogin.bind(this)}
            underlayColor={StyleConsts.colors.buttonGreyClicked}>
            <Text style={styles.buttonText}>{ I18n.t("Login.login_with_bearface") }</Text>
          </TouchableHighlight>
          <Footer />
        </View>
      </AppView>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
