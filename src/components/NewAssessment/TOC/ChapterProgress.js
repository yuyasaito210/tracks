import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import styles from "./styles"

export default class ChapterProgress extends Component {
  static propTypes = {
    assessment: PropTypes.object.isRequired,
  }

  render() {
    const { assessment } = this.props
    const percentComplete = Math.round(assessment.completionPercent() * 100)
    return (
      <View>
        <View style={styles.progressInformation}>
          <View style={styles.progressPercent}>
            <Text style={styles.progressPercentText}>
              {`${percentComplete}%`}
            </Text>
          </View>
          <View style={styles.chapterProgressBar}>
            <View style={styles.progressShell}>
              <View style={[styles.progressFill, { width: `${percentComplete}%` }]} />
            </View>
          </View>
          <View style={styles.elapsedTime}>
            <Text style={styles.elapsedTimeText}>
              {assessment.elapsedTime()}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
