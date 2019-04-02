import React from "react"
import { AsyncStorage, Linking } from "react-native"
import { Actions, ActionConst, Router } from "react-native-router-flux"
import { Buffer } from "safe-buffer"
import urlParse from "url-parse"

export default class LinkedRouter extends React.Component {
  constructor(props) {
    super(props)

    this.handleOpenURL = this.handleOpenURL.bind(this)
  }

  componentWillMount() {
    AsyncStorage.removeItem("isActivating")
  }

  componentDidMount() {
    Linking
      .getInitialURL()
      .then(url => this.handleOpenURL({ url }))
      .catch(console.error)

    Linking.addEventListener("url", this.handleOpenURL)
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleOpenURL)
  }

  handleOpenURL(event) {
    if (event.url) {
      const parsed = urlParse(event.url, true)
      if (parsed.protocol === "beartracks:" && parsed.host === "login") {
        const data = JSON.parse(Buffer.from(parsed.pathname.slice(1), "base64").toString("binary"))
        Actions.ForceLogin({ type: ActionConst.RESET, authToken: data.authToken, email: data.email, profile: data.profile })
      } else if (parsed.pathname === "/account_setup") {
        Actions.RegistrationPasswordSetup({ type: ActionConst.RESET, id: parsed.query.id, token: parsed.query.token })
      } else if (parsed.pathname === "/login") {
        // Just open the app, I guess
      }
    }
  }

  render() {
    return <Router {...this.props} />
  }
}
