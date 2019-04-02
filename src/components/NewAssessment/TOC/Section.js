import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, TouchableHighlight, View } from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class Section extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    assessment: PropTypes.object.isRequired,
    lastChild: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    section: PropTypes.object.isRequired,
  }

  static ratingColor(correctQuestions, incorrectQuestions, totalQuestions) {
    if ((correctQuestions === 0 && incorrectQuestions === 0) || totalQuestions === 0) {
      return "Zero"
    }

    if (correctQuestions / totalQuestions >= 0.9) {
      return "Great"
    }

    if (correctQuestions / totalQuestions >= 0.75) {
      return "Okay"
    }

    return "Bad"
  }

  constructor(props) {
    super(props)

    this.navigateToSectionId = this.navigateToSectionId.bind(this)
  }

  async navigateToSectionId(assessment, sectionId) {
    await this.props.actions.navigateToSectionId(assessment, sectionId)
    this.props.actions.hideTOC()
  }

  render() {
    const {
      assessment,
      lastChild,
      level,
      section,
    } = this.props

    let sectionRating = (<Text style={styles.sectionRatingText} />)
    if (section.pages !== undefined) {
      const correctQuestions = section.numberOfCorrectQuestions()
      const incorrectQuestions = section.numberOfIncorrectQuestions()
      const totalQuestions = section.numberOfTopicsForQuestions()
      sectionRating = totalQuestions > 0 ? (
        <Text style={[styles.sectionRatingText, styles[`sectionRating${Section.ratingColor(correctQuestions, incorrectQuestions, totalQuestions)}`]]}>
          {`${correctQuestions} / ${totalQuestions}`}
        </Text>
      ) : <Text style={styles.sectionRatingText} />
    }

    let childSections
    if (section.sections !== undefined) {
      childSections = section.sections.map((childSection, index) => <Section key={childSection.id} assessment={assessment} section={childSection} level={level + 1} lastChild={index === (section.sections.length - 1)} actions={this.props.actions} />)
    }

    let completionStatus = (<Text style={styles.completionIcon} />)

    if (level === 0 && section.completionStatus() === "complete") {
      completionStatus = <Icon name={"check"} style={styles.completionIcon} size={getSize(10, 10, 15, 20)} />
    } else if (level === 0 && section.completionStatus() === "started") {
      completionStatus = <Icon name={"close"} style={styles.completionIcon} size={getSize(10, 10, 15, 20)} />
    }

    const extraBorderStyle = childSections === undefined && lastChild ? { borderBottomWidth: 0 } : {}
    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight onPress={() => this.navigateToSectionId(assessment, section.id)} underlayColor={StyleConsts.colors.lightGrey}>
          <View style={[styles.progressTableRow, styles[`progressTableRowSection${level}`]]}>
            <View style={[styles.sectionExpander, styles[`sectionExpander${level}`], extraBorderStyle]}>
              <Text style={styles.sectionExpanderContent} />
            </View>
            <View style={[styles.pageCompletionStatus, styles[`pageCompletionStatus${level}`], extraBorderStyle]}>
              <View style={styles.centerTextWrapper}>
                {completionStatus}
              </View>
            </View>
            <View style={[styles.sectionRowTitle, extraBorderStyle]}>
              <Text style={[styles.sectionRowTitleText, styles[`sectionRowTitleLevel${level}`]]}>{section.title}</Text>
            </View>
            <View style={[styles.sectionTime, extraBorderStyle]}>
              <View style={styles.centerTextWrapper}>
                <Text style={styles.sectionTimeText}>{section.pages !== undefined ? section.elapsedTime(true) : ""}</Text>
              </View>
            </View>
            <View style={[styles.sectionRating, extraBorderStyle]}>
              <View style={styles.centerTextWrapper}>
                {sectionRating}
              </View>
            </View>
          </View>
        </TouchableHighlight>
        {childSections}
      </View>
    )
  }
}
