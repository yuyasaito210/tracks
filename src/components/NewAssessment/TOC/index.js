import PropTypes from "prop-types"
import React, { Component } from "react"
import { ScrollView, Text, View } from "react-native"
import ChapterProgress from "./ChapterProgress"
import Section from "./Section"
import styles from "./styles"

export default class TOC extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    assessment: PropTypes.object.isRequired,
  }

  render() {
    const { assessment } = this.props
    return (
      <ScrollView>
        <View>
          <Text style={[styles.chapterStatus, styles[`chapterStatus${assessment.isComplete() ? "Complete" : "Incomplete"}`]]}>CHAPTER {assessment.isComplete() ? "COMPLETE" : "INCOMPLETE"}</Text>
        </View>
        <ChapterProgress assessment={assessment} />
        <View style={styles.progressTableHeader}>
          <View style={styles.expanderTitle}>
          </View>
          <View style={styles.pageCompletionTitle}>
          </View>
          <View style={styles.sectionTitle}>
            <Text style={[styles.sectionTitleText, styles.titleText]}>Section</Text>
          </View>
          <View style={styles.timeTitle}>
            <Text style={[styles.timeTitleText, styles.titleText]}>Time</Text>
          </View>
          <View style={styles.ratingTitle}>
            <Text style={[styles.ratingTitleText, styles.titleText]}>Questions Correct</Text>
          </View>
        </View>
        { assessment.sections.map(section => <Section key={section.id} assessment={assessment} section={section} level={0} lastChild={false} actions={this.props.actions} />) }
      </ScrollView>
    )
  }
}
