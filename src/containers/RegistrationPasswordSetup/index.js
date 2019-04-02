import React, { PureComponent } from 'react'
import { AsyncStorage, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authActions from '/actions/authActions'

import AppView from '/containers/AppView'
import RegistrationPasswordSetupForm from '/components/Auth/RegistrationPasswordSetupForm'
import Footer from '/components/Auth/Footer'
import BackButton from '/components/Auth/BackButton'
import styles from './styles'

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}

class RegistrationPasswordSetup extends PureComponent {
    componentWillMount() {
      console.log("Setting isActivating")
      AsyncStorage.setItem('isActivating', "true")
    }
    componentWillUnmount() {
      AsyncStorage.removeItem('isActivating')
    }
    render () {
        return (
            <AppView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <BackButton />
                      <RegistrationPasswordSetupForm onFormSubmit={this.props.actions.activateAccount} userId={this.props.id} token={this.props.token}/>
                    <Footer theme={'light'} />
                </View>
            </AppView>
        )
    }
}

export default connect(null, mapDispatchToProps)(RegistrationPasswordSetup)
