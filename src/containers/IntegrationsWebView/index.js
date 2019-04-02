import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import IntegrationsWebViewComponent from '/components/IntegrationsWebView'
import TabBar from '/components/Helpers/TabBar'
import styles from './styles'
import AppView from '/containers/AppView'

class IntegrationsWebView extends Component {

  handleOnMessage (e) {
    if (e.nativeEvent.data === 'integrationComplete') {
      this.props.onComplete()
    } else if (e.nativeEvent.data === 'integrationFailed') {
      this.props.onFailed()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <IntegrationsWebViewComponent
            url={this.props.url}
            method={this.props.method}
            onMessage={this.handleOnMessage.bind(this)} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

IntegrationsWebView.defaultProps = {
  method: 'GET'
}

export default connect(null)(IntegrationsWebView)
