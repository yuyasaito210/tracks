import isNil from "lodash.isnil"
import React, { PureComponent } from "react"
import {
  Text,
  View,
} from "react-native"
import styles from "./styles"
import ListButtonControl from "/components/Helpers/ListButtonControl"
import { dynamicText, htmlView } from "/lib/helpers"
import { renderTables } from "./table"

export default class SubResults extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  onButtonPress(sectionId) {
    this.setState({
      [sectionId]: !this.state[sectionId],
    })
  }

  getAccordionContent(item) {
    switch (item.type) {
      case "paragraph":
        return (
          <Text style={styles.resultParagraph}>{htmlView(item.displayText)}</Text>
        )
      case "table":
        return (
          <View>
            { !isNil(item.displayText) && <Text style={styles.resultParagraph}>{htmlView(dynamicText(item.displayText, this.props.content.dynamicData))}</Text> }
            { renderTables(item.resultsTable, this.props.content.dynamicData) }
          </View>
        )
      case "formula":
        return (
          <View>
            <Text style={styles.resultParagraph}>{item.displayText}</Text>
            <Text style={styles.resultParagraph}>{item.formulaText}</Text>
          </View>
        )
      default:
        return (
          <Text>{item.type}</Text>
        )
    }
  }

  render() {
    const { content } = this.props
    const currentPage = this.props.assessment.currentPage()

    return (
      <View style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>{currentPage.content.caption}</Text>
        </View>
        <View style={styles.genderWrapper}>
          <Text style={styles.subHeader}>{htmlView(currentPage.content.displayText, "header")}</Text>
        </View>
        { (currentPage.content.showScore || currentPage.content.showStatus) &&
        <View style={styles.genderWrapper}>
          <Text style={styles.subHeader}>{htmlView(currentPage.caption, "header")}</Text>
          <View style={styles.estimatedWrapper}>
            { currentPage.content.showScore &&
              <Text style={styles.estimatedNumber}>
                {content.dynamicData.score} <Text style={styles.estimatedText}>{currentPage.content ? currentPage.content.scoreUnits : ""}</Text>
              </Text> }
            { currentPage.content.showStatus &&
              <Text style={styles.estimatedFooterText}>{content.dynamicData.status}</Text> }
          </View>
        </View> }
        {renderTables(currentPage.content.resultsTables, content.dynamicData)}
        { (currentPage.content.accordions || []).map((item, i) => (
          <View key={i}>
            <ListButtonControl
              style={{ marginTop: 15 }}
              text={item.title}
              active={this.state[`${item.id}${i}`]}
              onPress={() => this.onButtonPress(`${item.id}${i}`)} />
            {this.state[`${item.id}${i}`] && this.getAccordionContent(item)}
          </View>
          ))}
      </View>
    )
  }
}
