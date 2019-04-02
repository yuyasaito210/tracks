import PropTypes from "prop-types"
import React, { Component } from "react"
import { Platform, View, WebView } from "react-native"
import YouTube from "react-native-youtube"
import { getSize } from "/lib/helpers/styleSizes"
import HTMLView from "/lib/helpers/HTMLView"
import videoStyles from "../styles"

export default class Video extends Component {
  static propTypes = {
    content: PropTypes.shape({
      caption: PropTypes.string,
      video: PropTypes.string.isRequired,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  renderPlayer(url) {
    const { styles } = this.props
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    const id = (match && match[7].length === 11) ? match[7] : false
    if (Platform.OS === "ios") {
      return (
        <View style={videoStyles.videoPlayerWrapper}>
          <YouTube
            apiKey="AIzaSyDpGl4jM7X5nAS4wrIZGsiOgSJfGsj4RZQ"
            style={videoStyles.videoPlayer}
            videoId={id} />
        </View>
      )
    }
    return (
      <View style={styles.videoPlayerWrapper}>
        <WebView
          style={{ height: getSize(200, 250, 350, 450) }}
          source={{ uri: `https://youtube.com/embed/${id}` }} />
      </View>
    )
  }

  render() {
    const { content, styles } = this.props
    return (
      <View>
        { this.renderPlayer(content.video) }
        { content.caption !== undefined && <HTMLView value={content.caption} style={styles.videoCaption} /> }
      </View>
    )
  }
}
