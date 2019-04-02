import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import I18n from "react-native-i18n"
import * as authActions from '/actions/authActions'
import * as userActions from '/actions/userActions'
import ProfileView from '/components/Profile'
import TabBar from '/components/Helpers/TabBar'
import AppView from '/containers/AppView'
import styles from './styles'

import React, { PureComponent } from 'react'
import {
  View,
  StatusBar
} from 'react-native'
import Translations from '/lib/Translations.json'

I18n.translations = Translations
function mapStateToProps (state) {
  return {
    profile: state.user.profile
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...userActions }, dispatch)
  }
}


class Profile extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
        <ProfileView profile={this.props.profile} actions={this.props.actions} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
