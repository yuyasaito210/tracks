import React from "react"
import {
  BackHandler,
  Text,
  TouchableHighlight,
  View,
  } from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import styles from "/styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class BackButton extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleBackPress = this.handleBackPress.bind(this)
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress)
  }

  handleBackPress() {
    this.props.back()
    return true
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.props.back}
        underlayColor={"transparent"}>
        <View style={styles.backButtonContainer}>
          <Icon name={"back"} size={getSize(20, 20, 30, 40)} style={{ color: "white" }} />
          <Text style={styles.backButtonText}>
            {this.props.backTitle}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}
