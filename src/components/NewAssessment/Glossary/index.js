import PropTypes from "prop-types"
import React, { Component } from "react"
import { ScrollView, Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"
import styles from "./styles"

export default class Glossary extends Component {
  static propTypes = {
    assessment: PropTypes.object.isRequired,
  }

  render() {
    const { assessment } = this.props
    const glossaryTerms = assessment.glossary.map((entry, index) => (
      <View key={index} style={styles.glossaryRow}>
        <Text>
          <HTMLView value={`${entry.term}: `} style={styles.glossaryTerm} />
          <HTMLView value={entry.definition} style={styles.glossaryDefinition} />
        </Text>
      </View>
    ))
    return (
      <ScrollView style={styles.container}>
        {glossaryTerms}
      </ScrollView>
    )
  }
}
