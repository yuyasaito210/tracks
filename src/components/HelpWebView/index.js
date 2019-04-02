import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import { WebView } from "react-native"
import styles from "./styles"

export default class HelpWebView extends PureComponent {
  static propTypes = {
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  render() {
    return (
      <WebView
        style={styles.container}
        useWebKit
        source={{ uri: this.props.url, method: this.props.method }}
        startInLoadingState />
    )
  }
}
