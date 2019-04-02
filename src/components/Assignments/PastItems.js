import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  View,
} from "react-native"
import styles from "./styles"
import PastRow from "./PastRow"

export default class PastItems extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItem: PropTypes.func.isRequired,
  }

  pastRow(pastItem) {
    let id
    switch (pastItem.plannable_type) {
      case "calendar_event":
        id = `planner-${pastItem.id}`
        break
      case "planner_note":
        id = `planner-${pastItem.id}`
        break
      default:
        id = `assignment-${pastItem.id}`
    }

    return <PastRow key={id} item={pastItem} onItem={this.props.onItem} />
  }

  pastRows(pastItems) {
    if (pastItems.length === 0) {
      return (
        <Text style={styles.noAssignmentsText}>
          You have no past assignments!
        </Text>
      )
    }
    return pastItems.map(item => this.pastRow(item))
  }

  render() {
    return (
      <View>
        {this.pastRows(this.props.items)}
      </View>
    )
  }
}
