import React from "react"
import PropTypes from "prop-types"
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Actions, ActionConst } from "react-native-router-flux"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import * as authActions from "/actions/authActions"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

const contextTypes = {
  drawer: PropTypes.object,
}

const propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.shape({
    first_name: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch),
  }
}
class Modal extends React.Component {
  onLogout() {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel" },
        { text: "Logout", onPress: () => this.props.actions.logout() },
      ],
    )
  }
  render() {
    const drawer = this.context.drawer
    return (
      <View style={styles.sideMenu}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => { drawer.close() }}>
          <Icon style={styles.icon} name={"close"} size={getSize(16, 18, 24, 30)} />
        </TouchableOpacity>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.header}>Welcome</Text>
          <Icon style={styles.profileIcon} name={"profile"} size={getSize(45, 55, 65, 75)} />
          <Text style={styles.profileName}>{this.props.profile.first_name}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          { /* <View style={styles.buttonHelper}>
               <TouchableOpacity style={styles.button}>
               <Icon style={styles.buttonIcon} name={"calendar"} size={getSize(14, 15, 22, 30)} />
               <Text style={styles.buttonText}>Notifications</Text>
               </TouchableOpacity>
               </View>*/}
          { /* <View style={styles.buttonHelper}>
               <TouchableOpacity onPress={() => { Actions.Profile(); drawer.close() }} style={styles.button}>
               <Icon style={styles.buttonIcon} name={"profile"} size={15} />
               <Text style={styles.buttonText}>Profile</Text>
               </TouchableOpacity>
               </View> */ }
          <View style={styles.buttonHelper}>
            <TouchableOpacity
              onPress={() => { Actions.Courses({ type: ActionConst.RESET }); drawer.close() }}
              style={styles.button}>
              <Icon style={styles.buttonIcon} name={"notebook"} size={getSize(14, 15, 22, 30)} />
              <Text style={styles.buttonText}>Courses</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonHelper}>
            <TouchableOpacity
              onPress={() => { Actions.Settings(); drawer.close() }}
              style={styles.button}>
              <Icon style={styles.buttonIcon} name={"settings"} size={getSize(14, 15, 22, 30)} />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonHelper}>
            <TouchableOpacity
              onPress={() => { Actions.Help(); drawer.close() }}
              style={styles.button}>
              <Icon style={styles.buttonIcon} name={"help"} size={getSize(14, 15, 22, 30)} />
              <Text style={styles.buttonText}>Help</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonHelper}>
            <TouchableOpacity style={styles.button} onPress={() => this.onLogout()}>
              <Icon style={styles.buttonIcon} name={"logout"} size={15} />
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

Modal.contextTypes = contextTypes
Modal.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
