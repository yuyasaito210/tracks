import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"

export default class Steps extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.shape({
        bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string,
      }),
      PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string,
      }),
      PropTypes.shape({
        steps: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string,
      }),
    ]).isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    const { content, styles } = this.props
    const steps = (content.bullets || content.items || content.steps).map((step, index) => (
      <View key={index} style={styles.stepListItem}>
        <View style={styles.stepBullet}>
          <Text style={styles.stepBulletText}>{index + 1}</Text>
        </View>
        <View style={styles.stepItemTextWrapper}>
          <HTMLView style={styles.stepItemText} value={step} />
        </View>
      </View>
    ))
    return (
      <View style={styles.stepsBlock}>
        { content.title && <HTMLView value={content.title} style={styles.stepsTitle} /> }
        <View style={styles.stepsList}>
          {steps}
        </View>
      </View>
    )
  }
}
