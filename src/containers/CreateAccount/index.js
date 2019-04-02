import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authActions from '/actions/authActions'

import { View, StatusBar } from 'react-native'
import AppView from '/containers/AppView'
import Logo from '/components/Auth/Logo'
import Footer from '/components/Auth/Footer'
import CreateAccountForm from '/components/Auth/CreateAccountForm'
import InitialSignupCompleted from '/components/Auth/CreateAccountForm/InitialSignupCompleted'
import BackButton from '/components/Auth/BackButton'
import styles from './styles'

class Registration extends PureComponent {

  render () {
    const SignupForm = this.props.isInitialSignupCompleted
      ? InitialSignupCompleted
      : CreateAccountForm

    return (
      <AppView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          {!this.props.isInitialSignupCompleted &&
            <BackButton />
          }
          <Logo theme={'light'} />
          <SignupForm createAccount={this.props.actions.createAccount} />
          <Footer theme={'light'} />
        </View>
      </AppView>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}
function mapStateToProps (state) {
  return {
    isInitialSignupCompleted: state.auth.isInitialSignupCompleted
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)
