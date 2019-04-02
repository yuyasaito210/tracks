import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

export default class CoursesView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  goToCourse(course) {
    this.props.actions.goToCourse(course)
  }

  courseButton(course, isActive) {
    const backgroundColor = isActive ? StyleConsts.colors.teal : StyleConsts.colors.mediumGrey
    return (
      <TouchableHighlight
        style={[styles.courseButtonWrapper, { backgroundColor }]}
        onPress={() => this.goToCourse(course)}
        underlayColor={backgroundColor}
        key={`course-${course.id}`}>
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <View style={styles.termWrapper}>
            <Text style={styles.termText}>
              {course.term.name}
            </Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.nameText}>
              {course.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  courseRow(row, activeCourse, index) {
    const courseButtons = row.map(course => this.courseButton(course, activeCourse))
    const keyText = activeCourse ? "current" : "past"
    if (courseButtons.length === 1) {
      courseButtons.push(<View style={styles.courseButtonWrapper} key={`${keyText}-course--1`} />)
    }
    return (
      <View style={styles.courseRow} key={`${keyText}-row-${index}`}>
        {courseButtons}
      </View>
    )
  }

  courseRows(courses, activeCourse = true) {
    const rows = courses.reduce((a, b, i, g) => !(i % 2) ? a.concat([g.slice(i, i + 2)]) : a, [])
    const keyText = activeCourse ? "current" : "past"
    return (
      <View style={styles.courseRows} key={`${keyText}-rows`}>
        {rows.map((row, i) => this.courseRow(row, activeCourse, i))}
      </View>
    )
  }

  render() {
    const currentCourses = this.props.courses.filter((course) => {
      if (course.end_at && moment(course.end_at).isBefore()) {
        return false
      }
      if (course.term && course.term.end_at && moment(course.term.end_at).isBefore()) {
        return false
      }
      return true
    })
    const currentIds = currentCourses.map(course => course.id)
    const pastCourses = this.props.courses.filter(course => !currentIds.includes(course.id))

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerText}>
            Select Your Course
          </Text>
        </View>
        {this.courseRows(currentCourses, true)}
        { pastCourses.length > 0 &&
          [<View key={"past-view"}>
            <Text style={styles.headerText}>
              Past Courses
            </Text>
          </View>,
            this.courseRows(pastCourses, false)]
        }
      </ScrollView>
    )
  }
}
