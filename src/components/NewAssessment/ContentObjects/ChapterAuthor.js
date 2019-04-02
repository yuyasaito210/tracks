import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class ChapterAuthor extends Component {
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
        <Text style={styles.chapterAuthor}><HTMLView value={content.content} /></Text>
      </View>
    )
  }
}
