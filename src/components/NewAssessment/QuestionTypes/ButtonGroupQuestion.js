import isNil from "lodash.isnil"
import React, { Component } from "react"
import {
  Text,
  View,
} from "react-native"
import SegmentedControlTab from "react-native-segmented-control-tab"
import styles from "../styles"

export default class ButtonGroupQuestion extends Component {
  render() {
    const { question } = this.props
    const selectedIndex = !isNil(this.props.selectedValue) ? parseInt(this.props.selectedValue, 10) : -1
    const values = question.answers.map(answer => answer.displayText)
    return (
      <View key={question.questionText} style={styles.genderWrapper}>
        <Text style={styles.subHeader}>{question.questionText}</Text>
        <View style={styles.genderSelectWrapper}>
          <SegmentedControlTab
            selectedIndex={selectedIndex}
            tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            values={values}
            onTabPress={index => this.props.setResponse(index)} />
        </View>
      </View>
    )
  }
}
