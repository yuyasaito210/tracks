import PropTypes from "prop-types"
import React, { Component } from "react"
import { View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"
import UncachableImage from "/lib/helpers/UncachableImage"

export default class Table extends Component {
  static propTypes = {
    content: PropTypes.shape({
      altText: PropTypes.string,
      caption: PropTypes.string,
      imageURL: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    return (
      <View>
        { content.title !== undefined &&
          <View style={styles.tableTitleView}>
            <HTMLView value={content.title} style={styles.tableTitle} />
          </View> }
        <View style={styles.imageWrapper}>
          <UncachableImage style={styles.image} source={{ uri: content.imageURL }} resizeMode={"cover"} />
        </View>
        { content.caption !== undefined &&
          <View style={styles.captionView}>
            <HTMLView value={content.caption} style={styles.caption} />
          </View> }
      </View>
    )
  }
}
