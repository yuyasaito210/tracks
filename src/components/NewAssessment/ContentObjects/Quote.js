import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class Quote extends Component {
  static propTypes = {
    content: PropTypes.shape({
      author: PropTypes.string,
      quote: PropTypes.string.isRequired,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    return (
      <View>
        <View style={styles.quote}>
          <Text style={styles.quotationMark}>&ldquo;</Text>
          <Text style={styles.quoteBody}><HTMLView value={content.quote} /></Text>
          <Text style={styles.quotationMark}>&bdquo;</Text>
        </View>
        { content.author &&
          <View style={styles.quoteAuthorWrapper}>
            <Text style={{ flex: 1 }} />
            <HTMLView value={`&mdash; ${content.author}`} style={styles.quoteAuthor} />
          </View>
        }
      </View>
    )
  }
}
