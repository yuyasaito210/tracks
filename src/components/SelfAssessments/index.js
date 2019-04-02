import React, { Component } from "react"
import {
  View,
  Text,
  ScrollView
} from "react-native"
import Assessments from "./Assessments"
import ListButtonControl from "/components/Helpers/ListButtonControl"
import SearchBar from "./SearchBar"
import { getSize } from "/lib/helpers/styleSizes"
import styles from "./styles"

export default class SelfAssessmentsView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "",
      assignedButton: true,
      additionalButton: false
    }
  }

  onSearch(filter) {
    this.setState({ filter })
  }

  onPressButton(button) {
    this.setState({
      [button]: !this.state[button]
    })
  }

  renderNoAssessments() {
    const message = this.props.assessmentsLoading ? "Loading Assessments..." : "No Assigned Assessments"
    return (
      <View style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
        <Text style={{ color: "#2F3C47", fontSize: getSize(14, 14, 22, 28) }}>{message}</Text>
      </View>
    )
  }
  renderSubView(assessmentsFiltered) {
    return assessmentsFiltered.length !== 0
    ? <Assessments {...this.props} assessments={assessmentsFiltered} />
    : this.renderNoAssessments()
  }

  render() {
    const { assessments, assignments } = this.props
    const { filter } = this.state
    let assessmentsFiltered = assessments
    let assignmentsFiltered = assignments

    if (filter.length > 0) {
      assessmentsFiltered = assessmentsFiltered.filter(assessment =>
        assessment.name.toLowerCase().match(filter.toLowerCase())
      )
      assignmentsFiltered = assignmentsFiltered.filter(assessment =>
        assessment.name.toLowerCase().match(filter.toLowerCase())
      )
    }
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          filter={this.state.filter}
          onChangeText={text => this.onSearch(text)} />
        <View style={styles.buttonWrapper}>
          <ListButtonControl
            style={{ marginTop: 10 }}
            text={"Assigned Self-Assessments"}
            active={this.state.assignedButton}
            onPress={() => { this.onPressButton("assignedButton") }} />
          {this.state.assignedButton && this.renderSubView(assignmentsFiltered)}

          <ListButtonControl
            style={{ marginTop: 10 }}
            text={"Additional Self-Assessments"}
            active={this.state.additionalButton}
            onPress={() => { this.onPressButton("additionalButton") }} />
          {this.state.additionalButton && this.renderSubView(assessmentsFiltered)}

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Learn about yourself.
            Select a self-assessment from the list above,
            or use the search function to find a specific
            self-assessment to complete.
          </Text>
        </View>
      </ScrollView>
    )
  }
}
