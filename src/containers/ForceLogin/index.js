import React, { Component } from "react"
import { View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import AppView from "/containers/AppView"
import * as authActions from "/actions/authActions"

function mapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch),
  }
}

class ForceLogin extends Component {

  componentDidMount() {
    this.props.actions.oauthLogin(this.props.email, this.props.authToken, this.props.profile)
  }

  render() {
    return (
      <AppView>
        <View />
      </AppView>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForceLogin)
