import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class Objectives extends Component {
  static propTypes = {
    content: PropTypes.shape({
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    const objectives = content.objectives.map((objective, index) => (
      <Text key={`objective-${index}`} style={styles.objective}>&gt; <HTMLView value={objective} /></Text>
    ))
    return (
      <View>
        { objectives }
      </View>
    )
  }
}
