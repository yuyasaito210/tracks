import React, { Component } from "react"
import {
  Platform,
  Text,
  View,
  WebView,
} from "react-native"
import styles from "./styles"
import { htmlView } from "/lib/helpers"
import YouTube from "react-native-youtube"
import { getSize } from "/lib/helpers/styleSizes"

export default class Steps extends Component {
  getSteps(steps) {
    return steps.map((val, i) => (
      <View key={i} style={styles.footerStepsWrapper}>
        <View style={styles.footerStep}>
          <View style={styles.stepBackground}>
            <Text style={styles.stepNumber}>{i + 1}</Text>
          </View>
          <View style={styles.stepTextWrapper}>
            <Text style={styles.stepText}>{htmlView(val.stepText, "steps")}</Text>
          </View>
        </View>
      </View>
      ))
  }

  renderPlayer(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    const id = (match && match[7].length === 11) ? match[7] : false
    if (Platform.OS === "ios") {
      return (
        <View style={styles.videoPlayerWrapper}>
          <YouTube
            apiKey="AIzaSyDpGl4jM7X5nAS4wrIZGsiOgSJfGsj4RZQ"
            style={styles.videoPlayer}
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
    const { assessment } = this.props
    const currentPage = assessment.currentPage()
    return (
      <View style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>{currentPage.content.caption}</Text>
        </View>
        {currentPage.content.video ? this.renderPlayer(currentPage.content.video) : null}
        <View style={styles.instructionWrapper}>
          <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={[styles.text, { flex: 1 }]}>{htmlView(currentPage.content.displayText)}</Text>
          </View>
        </View>
        <View style={styles.startedFooter}>
          <Text style={styles.footerHeader}>Steps:</Text>
          {this.getSteps(currentPage.content.steps)}
        </View>
      </View>
    )
  }
}
