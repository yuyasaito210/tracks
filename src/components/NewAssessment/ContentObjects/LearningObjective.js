import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import HTMLView from "/lib/helpers/HTMLView"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class LearningObjective extends Component {
  static propTypes = {
    content: PropTypes.shape({
      objective: PropTypes.string.isRequired,
      type: PropTypes.string,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    return (
      <View style={styles.learningObjective}>
        <View style={styles.learningObjectiveHeader}>
          <Text style={styles.learningObjectiveHeaderText}>
            <Icon name={"Dimensions_Intellectual"} size={StyleConsts.fontSize.em1 * 2.5} style={{ color: "#fff" }} />
            KNOW THIS!
          </Text>
        </View>
        <View style={styles.learningObjectiveBody}>
          <Text style={styles.learningObjectiveBodyText}><HTMLView value={content.objective} /></Text>
        </View>
      </View>
    )
  }
}
