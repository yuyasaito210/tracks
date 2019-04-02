import React, { PureComponent } from "react"
import { WebView } from "react-native"
import { connect } from "react-redux"
import styles from "./styles"

class OauthLoginViewComponent extends PureComponent {
  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: this.props.url, method: this.props.method }}
        onMessage={this.props.onMessage}
        startInLoadingState
        javaScriptEnabled />
    )
  }
}

export default connect(null)(OauthLoginViewComponent)
