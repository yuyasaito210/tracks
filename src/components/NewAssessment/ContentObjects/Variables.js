import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"
import UncachableImage from "/lib/helpers/UncachableImage"

export default class Variables extends Component {
  static propTypes = {
    content: PropTypes.shape({
      variables: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        iconAltText: PropTypes.string,
        iconName: PropTypes.string,
        iconURL: PropTypes.string,
        text: PropTypes.string,
      })).isRequired,
      title: PropTypes.string,
    }).isRequired,
    styles: PropTypes.object.isRequired,
  }

  chunkArray(myArray, chunkSize) {
    const results = []

    while (myArray.length) {
      results.push(myArray.splice(0, chunkSize))
    }

    return results
  }
  render() {
    const { content, styles } = this.props
    const variables = this.chunkArray([...content.variables], 3).map((variablesInRow, rowIndex) => {
      const items = variablesInRow.map((variable, index) => (
        <View style={styles.variableSection} key={`variables-${index}`}>
          <View style={styles.variableIcon}>
            { /* variable.iconName && <Text style={`icon${variable.iconName}`} /> */}
            { (variable.iconURL || "") !== "" && <UncachableImage style={styles.variableImage} source={{ uri: variable.iconURL }} resizeMode={"center"} /> }
          </View>
          { variable.caption && <HTMLView value={variable.caption} style={styles.variableCaption} /> }
          { variable.text && <HTMLView value={variable.text} style={styles.variableSectionText} /> }
        </View>
      ))
      return (
        <View style={styles.variableSectionRow} key={`variableRow-${rowIndex}`}>
          {items}
        </View>
      )
    })
    return (
      <View style={styles.variablesBlock}>
        { (content.title || "") !== "" && <HTMLView value={content.title} style={styles.variableTitle} /> }
        <View style={styles.variableSectionsWrapper}>
          {variables}
        </View>
      </View>
    )
  }
}
