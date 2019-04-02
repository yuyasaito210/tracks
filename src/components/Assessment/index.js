import moment from "moment"
import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import styles from "./styles"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class Assessment extends Component {

  getAttemptsList(assessmentIntro) {
    const { attempts } = assessmentIntro
    return attempts.map((item, index) => {
      const historyColumns = Object.keys(item.historyColumns).length > 0 ? item.historyColumns : { statusDate: moment(item.statusDate).format("MM/DD/YYYY") }
      return (
        <TouchableHighlight
          key={index}
          onPress={() => this.props.continueAttempt(
              item.attempt_url,
              assessmentIntro.assessment_id,
              assessmentIntro.introduction.introPage.title,
              { courseId: this.props.courseId, id: this.props.assignment.id, name: this.props.assignment.name })}
          underlayColor={StyleConsts.colors.lightGrey} >
          <View style={styles.infoRow} >
            <View style={styles.iconWrapper}>
              <Icon
                style={{
                  color: item.completed
                       ? StyleConsts.colors.green
                       : StyleConsts.colors.mediumGrey,
                }}
                name={item.completed ? "check" : "incomplete"}
                size={getSize(12, 12, 18, 24)} />
            </View>
            <View style={styles.attemptRow}>
              {
                Object.keys(historyColumns).map(key => (
                  <View key={key} style={styles.textWrapper}>
                    <Text style={styles.historyRowText}>{historyColumns[key]}</Text>
                  </View>
                ))
              }
            </View>
          </View>
        </TouchableHighlight>
      )
    })
  }
  render() {
    const { assessmentIntro, assignment, courseId, sectionId } = this.props
    const headerColumns = assessmentIntro.introduction.mobileStudentHistoryPage
                        ? assessmentIntro.introduction.mobileStudentHistoryPage.columns
                        : [{ headerName: "Date" }]
    return (
      <ScrollView style={styles.itemContainer}>
        <View style={styles.itemWrapper}>
          <TouchableHighlight
            style={styles.beginNewButton}
            onPress={() => this.props.startNewAssessment(assessmentIntro, courseId, sectionId, assignment.id, assignment.name)}
            underlayColor={StyleConsts.colors.orange}>
            <Text style={styles.beginNewButtonText}>{
              assessmentIntro.introduction.introPage.startNewButtonText
              ? assessmentIntro.introduction.introPage.startNewButtonText
              : "BEGIN NEW"
            }</Text>
          </TouchableHighlight>
          <Text style={styles.historyHeader}>Your History.</Text>
        </View>
        { headerColumns.length > 0 &&
          <View style={styles.infoView}>
            <View style={styles.infoHeader}>
              <View style={styles.iconWrapper} />
              <View style={{ flex: 8, flexDirection: "row" }}>
                { headerColumns.map((item, i) =>
                  (
                    <View key={i} style={styles.textWrapper}>
                      <Text style={styles.headerHistoryRowText}>{item.headerName}</Text>
                    </View>
                  ))
                }
              </View>
            </View>
            {this.getAttemptsList(assessmentIntro)}
          </View>
        }
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            You will be able to view any completed assessments
            by clicking on the entry you would like to view.
          </Text>
        </View>
      </ScrollView>
    )
  }
}

Assessment.propTypes = {
  assessmentIntro: PropTypes.object,
  assignment: PropTypes.object,
  continueAttempt: PropTypes.func,
  courseId: PropTypes.number,
  sectionId: PropTypes.number,
  startNewAssessment: PropTypes.func,
}

Assessment.defaultProps = {
  assessmentIntro: {},
  assignment: {},
  continueAttempt: () => {},
  courseId: undefined,
  sectionId: undefined,
  startNewAssessment: () => {},
}
export default Assessment
