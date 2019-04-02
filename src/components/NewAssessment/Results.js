import isNil from "lodash.isnil"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  View,
} from "react-native"
import Button from "apsl-react-native-button"
import Modal from "react-native-modal"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import styles from "./styles"
import ListButtonControl from "/components/Helpers/ListButtonControl"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import { dynamicText, htmlView } from "/lib/helpers"
import { getSize } from "/lib/helpers/styleSizes"
import { renderTables } from "./table"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class Results extends Component {
  static propTypes = {
    assessment: PropTypes.object.isRequired,
    content: PropTypes.shape({
      areAnswersSubmitting: PropTypes.bool.isRequired,
      assessmentResults: PropTypes.shape({
        score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        status: PropTypes.string,
        title: PropTypes.string,
        user_inputs: PropTypes.arrayOf(PropTypes.shape({
          question_id: PropTypes.number,
          question_text: PropTypes.string,
          response_value: PropTypes.string,
        })),
      }).isRequired,
      attemptId: PropTypes.number.isRequired,
      dynamicData: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
      ]).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false,
    }

    if (!this.props.content.areAnswersSubmitting && Object.keys(this.props.content.assessmentResults).length === 0) {
      this.props.actions.getCalculatedResults(this.props.content.attemptId)
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.content.areAnswersSubmitting && !this.props.content.areAnswersSubmitting) {
      this.props.actions.getCalculatedResults(this.props.content.attemptId)
    }
  }

  onButtonPress(sectionId) {
    this.setState({
      [sectionId]: !this.state[sectionId],
    })
  }

  getUserInputs(inputs) {
    const { assessmentResults } = this.props.content
    return (
      <View key={inputs.id} style={styles.userInputsContainer}>
        { assessmentResults.user_inputs.map((item, i) => (
          <View key={i} style={styles.UIItem}>
            <View style={styles.UIParamContainer}>
              <Text style={styles.UIParam}>{item.question_text}</Text>
            </View>
            <View style={styles.UIValueContainer}>
              <Text style={styles.UIValue}>{item.response_value}</Text>
            </View>
          </View>
        ))}
      </View>
    )
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
      case "userInputs":
        return this.getUserInputs(item)
      default:
        return (
          <Text>{item.type}</Text>
        )
    }
  }
  showModal = () => this.setState({ isModalVisible: true })
  hideModal = () => this.setState({ isModalVisible: false })
  renderModal(infoTitle, infoText) {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        backdropOpacity={0}>
        <View style={styles.infoWrapper}>
          <Button onPress={() => this.hideModal()} style={styles.infoButton}>
            <Icon style={styles.closeIcon} name={"close"} size={25} />
          </Button>
          {!isNil(infoTitle) && infoTitle.length > 0 && <Text style={styles.infoHeader}>
            {htmlView(infoTitle, "helpText")}
          </Text>}
          {!isNil(infoText) && infoText.length > 0 && <Text style={styles.infoText}>
            {htmlView(infoText, "helpText")}
          </Text>}
          {/* <Text style={styles.infoFooterText}>Learn More?</Text>*/}
        </View>
      </Modal>
    )
  }
  render() {
    const { assessment, content } = this.props
    const currentPage = assessment.currentPage()
    return (
      <View style={styles.getStarted}>
        { this.state.isModalVisible &&
          this.renderModal(currentPage.content.infoTitle, currentPage.content.infoText)}
        <View style={styles.headerView}>
          <Text style={styles.header}>{currentPage.content.caption}</Text>
          <Text style={styles.displayText}>{htmlView(currentPage.content.displayText, "header")}</Text>
        </View>
        <View style={styles.genderWrapper}>
          <Text style={styles.subHeader}>{htmlView(currentPage.caption, "header")}</Text>
          <View style={styles.estimatedWrapper}>
            {!isNil(currentPage.content.infoText) && currentPage.content.infoText.length > 0 &&
            <Button onPress={this.showModal} style={styles.infoButton}>
              <Icon style={styles.infoIcon} name={"info"} size={getSize(20, 20, 30, 40)} />
            </Button>}
            <Text style={styles.estimatedNumber}>
              {content.assessmentResults.score} <Text style={styles.estimatedText}>{currentPage.content ? currentPage.content.scoreUnits : ""}</Text>
            </Text>
            <Text style={styles.estimatedFooterText}>{content.assessmentResults.status}</Text>
          </View>
        </View>
        { currentPage.accordions.map((item, i) => (
          <View key={i}>
            <ListButtonControl
              style={{ marginTop: 15 }}
              text={item.title}
              active={this.state[`${item.id}${i}`]}
              onPress={() => this.onButtonPress(`${item.id}${i}`)} />
            {this.state[`${item.id}${i}`] && this.getAccordionContent(item)}
          </View>))}
      </View>
    )
  }
}
