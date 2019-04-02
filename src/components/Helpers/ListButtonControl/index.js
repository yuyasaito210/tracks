import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class ListButtonControl extends Component {
  randomColor() {
    const colors = [
      "#2F3C47",
      "#17AB9F",
      "#93CD8E",
      "#FFD05B",
      "#EA526F",
      "#BAAC77",
      "#575956",
      "#B377BE",
      "#EE6A3C",
      "#45515B",
    ]
    const color = Math.floor(Math.random() * colors.length)

    return colors[color]
  }

  renderIcon() {
    return (
      <View style={[styles.listViewControlIconContainer, { backgroundColor: this.randomColor() }]}>
        <Icon name={"Dimensions_Emotional"} size={35} style={styles.listViewControlIcon} />
      </View>
    )
  }

  render() {
    const buttonBackgroundColor = this.props.active
      ? styles.tealBackgroundColor
      : styles.lightGreyBackgroundColor
    const buttonTextColor = this.props.active
      ? styles.whiteColor
      : styles.darkGreyColor
    const iconColor = this.props.active
      ? styles.whiteColor
      : styles.tealColor
    const underlayColor = this.props.active
      ? StyleConsts.colors.teal
      : StyleConsts.colors.lightGrey
    return (
      <TouchableHighlight
        style={[styles.listViewControl, buttonBackgroundColor, this.props.style]}
        onPress={this.props.onPress}
        underlayColor={underlayColor}>
        <View style={styles.listViewControlContainer}>
          {this.props.icon && this.renderIcon()}
          <View style={styles.listViewControlTextContainer}>
            <Text
              style={[styles.listViewControlText, buttonTextColor, this.props.textStyle]}>
              {this.props.text}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name={this.props.active ? "negative" : "plus"}
              size={getSize(20, 20, 30, 40)}
              style={[styles.icon, iconColor]} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
