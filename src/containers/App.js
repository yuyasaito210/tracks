import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import React, { Component } from "react"
import { View, NetInfo, AsyncStorage } from "react-native"
import codePush from "react-native-code-push"
import { Actions, ActionConst } from "react-native-router-flux"
import * as authActions from "/actions/authActions"
import { getCourse, selectAnnouncement, selectCourseById } from "/actions/courseActions"

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, getCourse, selectAnnouncement, selectCourseById }, dispatch),
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.course.announcements,
    course: state.course.selectedCourse,
    external: state.external,
    isAuthenticated: state.auth.isAuthenticated,
    isInternetConnected: state.global.isInternetConnected,
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    AsyncStorage
      .getItem("authHeader")
      .then((token) => {
        if (token && this.props.isAuthenticated) {
          if (this.props.course && this.props.course.id) {
            Actions.Tabbar({ type: ActionConst.RESET })
          } else {
            Actions.Courses({ type: ActionConst.RESET })
          }
        } else {
          Actions.Login({ type: ActionConst.RESET })
        }
      })
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener("connectionChange", (hasInternetConnection) => {
      (hasInternetConnection !== this.props.isInternetConnected || !hasInternetConnection)
      && this.props.actions.internetConnection(hasInternetConnection)
    })
  }

  render() {
    return (
      <View />
    )
  }
}
App = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
