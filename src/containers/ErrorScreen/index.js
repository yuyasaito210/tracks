import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import ErrorView from '/components/ErrorView'
import Footer from '/components/Auth/Footer'
import styles from './styles'

function mapStateToProps (state) {
  return {
    errorType: state.global.error
  }
}

class Error extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ErrorView errorType={this.props.errorType} />
        <Footer theme="light" />
      </View>
    )
  }
}

export default connect(mapStateToProps)(Error)
