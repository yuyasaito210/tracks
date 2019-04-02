import isNil from "lodash.isnil"
import moment from "moment"
import React, { Component } from "react"
import {
  ListView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import bugsnag from "/lib/bugsnag"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import styles from "./styles"
import StyleConsts from "/constants/styleConstants"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class Assessments extends Component {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => (r1 !== r2) })

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.assessments),
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.ds.cloneWithRows(props.assessments),
    })
  }

  onItem(rowData) {
    if (!isNil(rowData.locked_until) && rowData.locked_until.length > 0 && moment(rowData.locked_until).isAfter(new Date())) {
      return
    }
    bugsnag.leaveBreadcrumb("Starting assessment", { type: "navigation", assessment: rowData.name })
    this.props.renderAssessmentIntro(rowData)
  }

  randomColor() {
    const colors = [
      "#2F3C47",
      "#17AB9F",
      "#93CD8E",
      "#FFD05B",
      "#EA526F",
      "#BAAC77",
      "#575956",
      "#B377BE",
      "#EE6A3C",
      "#45515B",
    ]
    const color = Math.floor(Math.random() * colors.length)

    return colors[color]
  }
  renderRow(rowData) {
    let dueDate = rowData.due_date ? `due ${moment(rowData.due_date).format("MM/DD/YYYY")}` : ""
    let completeIcon = ""
    if (!isNil(rowData.locked_until) && rowData.locked_until.length > 0) {
      completeIcon = "lock"
      dueDate = `locked until ${moment(rowData.locked_until).format("MM/DD/YYYY")}`
    } else if (dueDate.length > 0) {
      if (rowData.completed) {
        completeIcon = "check"
      } else {
        completeIcon = "circle"
      }
    }

    return (
      <TouchableHighlight
        onPress={() => this.onItem(rowData)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.assessmentButton}>
          <View style={styles.row}>
            <View style={styles.leftSide}>
              <Text style={styles.rowTitle}>{rowData.name}</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.data}>{dueDate}</Text>
              {completeIcon.length > 0 && <Icon name={completeIcon} size={getSize(15, 15, 25, 40)} style={styles[`${completeIcon}Icon`]} />}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)}
        automaticallyAdjustContentInsets={false}
      />
    )
  }
}

export default Assessments
