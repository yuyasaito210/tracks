import PropTypes from "prop-types"
import React, { Component } from "react"
import { View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class Paragraph extends Component {
  static propTypes = {
    content: PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    return (
      <View>
        <HTMLView value={content.content.replace(/<br\s?\/?>/gi, "<br /><br />")} style={styles.paragraph} />
      </View>
    )
  }
}
