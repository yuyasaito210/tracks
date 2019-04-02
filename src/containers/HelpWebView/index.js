import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import HelpWebViewComponent from "/components/HelpWebView"
import styles from "./styles"
import AppView from "/containers/AppView"

class HelpWebView extends Component {
  static defaultProps = {
    method: "GET",
  }

  render() {
    return (
      <AppView>
        <View style={styles.container}>
          <HelpWebViewComponent
            url={"https://support.perceivant.com/hc/en-us/requests/new"}
            method={this.props.method} />
        </View>
      </AppView>
    )
  }
}

export default connect(null)(HelpWebView)
