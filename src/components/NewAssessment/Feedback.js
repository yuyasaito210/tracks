import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './styles'
import UncachableImage from '/lib/helpers/UncachableImage'

export default class Feedback extends Component {
  renderItem (item, i) {
    if (item && item.replace(/ /g, '').length > 0) {
      return (
        <View key={i} style={styles.feedbackWrapper}>
          <Text style={styles.feedbackText}>{item}</Text>
        </View>
      )
    }
    return null
  }
  render () {
    const { content } = this.props
    return (
      <View style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>Check Your Answers.</Text>
        </View>
        <View style={styles.imageWrapper}>
          <UncachableImage style={styles.image} source={{ uri: content.content.image }} resizeMode={'cover'} />
        </View>
        <View style={styles.smallHeaderTextWrapper}>
          <Text style={styles.smallHeaderText}>{content.title}</Text>
        </View>
        <View style={styles.feedback}>
          {
            content.feedBackList.filter(item => item && item.replace(/ /g, '').length > 0)
            .map((item, i) => (
              <View key={i} style={styles.feedbackWrapper}>
                <Text style={styles.feedbackText}>{item}</Text>
              </View>
              )
            )
          }
        </View>
      </View>
    )
  }
}
