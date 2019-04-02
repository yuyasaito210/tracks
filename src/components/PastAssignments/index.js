import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import { FeedbackPill, GradedPill, LatePill, MissingPill } from "/components/Helpers/Pill"
import PastItems from "/components/Assignments/PastItems"
import { sortPastItems } from "/lib/helpers"
import StyleConsts from "/constants/styleConstants"
import styles from "/components/Assignments/styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class PastAssignmentsView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    assignments: PropTypes.arrayOf(PropTypes.shape({
      available_on_mobile: PropTypes.bool.isRequired,
      course_id: PropTypes.number.isRequired,
      description: PropTypes.string,
      due_date: PropTypes.string,
      grade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      id: PropTypes.number.isRequired,
      late: PropTypes.bool,
      missing: PropTypes.bool,
      name: PropTypes.string.isRequired,
      past_due: PropTypes.bool,
      points_possible: PropTypes.number,
      position: PropTypes.number,
      status: PropTypes.string,
      submitted: PropTypes.bool,
      to_do: PropTypes.bool,
      url: PropTypes.string,
    })).isRequired,
    plannerItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)

    this.onItem = this.onItem.bind(this)
  }

  onItem(assignment) {
    return this.props.actions.selectAssignment(assignment, { backTitle: "Past Assignments" })
  }

  pastRows(assignments) {
    if (assignments.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no past assignments!
        </Text>
      )
    }
    return <PastItems key={"pastItems-1"} items={sortPastItems(assignments)} onItem={this.onItem} />
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.pastRows(this.props.assignments) }
      </ScrollView>
    )
  }
}
