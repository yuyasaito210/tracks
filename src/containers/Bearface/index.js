import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BearfaceIntegrations from '/components/Bearface'
import TabBar from '/components/Helpers/TabBar'
import styles from './styles'
import AppView from '/containers/AppView'
import * as integrationActions from '/actions/integrationActions'

function mapStateToProps (state) {
  return {
    allowNotifications: state.integration.allowNotifications,
    email: state.integration.email
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...integrationActions }, dispatch)
  }
}

class Bearface extends PureComponent {

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppView>
          <BearfaceIntegrations
            allowNotifications={this.props.allowNotifications}
            email={this.props.email}
            actions={this.props.actions} />
        </AppView>
        <TabBar />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bearface)
