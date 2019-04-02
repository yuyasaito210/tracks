import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import OauthLoginWebViewComponent from "/components/OauthLoginWebView"
import styles from "./styles"
import AppView from "/containers/AppView"

class OauthLoginWebView extends Component {
  constructor(props) {
    super(props)

    this.handleOnMessage = this.handleOnMessage.bind(this)
  }

  handleOnMessage(e) {
    try {
      const data = JSON.parse(e.nativeEvent.data)
      if (data.status === "success") {
        this.props.onComplete(data)
      } else {
        this.props.onFailed()
      }
    } catch (error) {
      this.props.onFailed()
    }
  }

  render() {
    return (
      <AppView showTabBar={false}>
        <View style={styles.container}>
          <OauthLoginWebViewComponent
            url={this.props.url}
            method={this.props.method}
            onMessage={this.handleOnMessage} />
        </View>
      </AppView>
    )
  }
}

OauthLoginWebView.defaultProps = {
  method: "GET",
}

export default connect(null)(OauthLoginWebView)
