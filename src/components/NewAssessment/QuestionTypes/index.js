import PropTypes from "prop-types"
import React, { Component } from "react"
import { Text, View } from "react-native"
import HTMLView from "/lib/helpers/HTMLView"
import ButtonGroupQuestion from "./ButtonGroupQuestion"
import DatepickerQuestion from "./DatepickerQuestion"
import MatchingQuestion from "./MatchingQuestion"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import MultipleSelectQuestion from "./MultipleSelectQuestion"
import NumberQuestion from "./NumberQuestion"
import StyleConsts from "/constants/styleConstants"
import styles from "../styles"

export default class Question extends Component {
  static propTypes = {
    answers: PropTypes.arrayOf(PropTypes.object),
    assessment: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    instantFeedback: PropTypes.bool,
    questionImage: PropTypes.string,
    questionText: PropTypes.string,
    questionType: PropTypes.string.isRequired,
    questionVideo: PropTypes.string,
    setStandardResponse: PropTypes.func.isRequired,
    showInstantFeedback: PropTypes.bool.isRequired,
    unselectedCorrectResponsesText: PropTypes.string,
  }

  static defaultProps = {
    answers: [],
    instantFeedback: false,
    unselectedCorrectResponsesText: "",
  }

  constructor(props) {
    super(props)

    this.questionTypes = {
      buttonGroup: ButtonGroupQuestion,
      // confidence: SliderQuestion,
      datepicker: DatepickerQuestion,
      duration: NumberQuestion,
      matching: MatchingQuestion,
      multipleChoice: MultipleChoiceQuestion,
      // multipleResponseDropdown: MultipleResponseDropdownQuestion,
      multipleSelect: MultipleSelectQuestion,
      number: NumberQuestion,
      // satisfaction: SliderQuestion,
      // slider: SliderQuestion,
    }

    const hasCorrectResponse = this.props.assessment.findQuestionById(this.props.id).hasCorrectResponse()
    const response = this.props.assessment.responses[this.props.id.toString()]
    let feedbackText = ""
    let isCorrect = false
    if (response !== undefined) {
      if (this.props.questionType === "multipleSelect") {
        const answers = this.props.answers.filter(ans => response.includes(ans.value))
        if (answers.length > 0) {
          feedbackText = answers.map(answer => answer.feedbackText).join("<br />")
          isCorrect = this.props.assessment.isResposeForQuestionCorrect(response, this.props.id)
        }
        if (this.props.assessment.findQuestionById(this.props.id).hasUnselectedCorrectResponses()) {
          feedbackText = [feedbackText, this.props.unselectedCorrectResponsesText].join("<br />")
        }
      } else if (this.props.questionType === "matching") {
        isCorrect = this.props.assessment.isResposeForQuestionCorrect(response, this.props.id)
      } else {
        const answer = this.props.answers.find(ans => ans.value.toString() === response.toString())
        if (answer !== undefined) {
          feedbackText = answer.feedbackText
          isCorrect = answer.isCorrect()
        }
      }
    }

    this.state = {
      isCorrect,
      feedbackText,
      hasCorrectResponse,
      response,
    }

    this.setResponse = this.setResponse.bind(this)
  }

  setResponse(response, feedbackText) {
    let combinedFeedbackText = feedbackText
    if (this.props.questionType === "multipleSelect" && this.props.assessment.findQuestionById(this.props.id).hasUnselectedCorrectResponses(response)) {
      combinedFeedbackText = [feedbackText, this.props.unselectedCorrectResponsesText].join("<br />")
    }

    this.setState({
      isCorrect: this.props.assessment.isResposeForQuestionCorrect(response, this.props.id),
      feedbackText: combinedFeedbackText,
      response,
    })
    if (this.props.instantFeedback) {
      this.props.setInstantFeedbackResponse(this.props.id, response)
    } else {
      this.props.setStandardResponse(this.props.id, response)
    }
  }

  render() {
    const QuestionTag = this.questionTypes[this.props.questionType]
    if (QuestionTag === undefined) {
      return (
        <View>
          <Text>Unsupported question type</Text>
        </View>
      )
    }
    return (
      <View>
        { this.props.instantFeedback &&
          this.props.showInstantFeedback &&
          <View style={styles.instantFeedback}>
            { this.state.hasCorrectResponse &&
              <View style={[styles.instantFeedbackHeader, { backgroundColor: this.state.isCorrect ? StyleConsts.colors.green : StyleConsts.colors.red }]}>
                <Text style={styles.instantFeedbackHeaderText}>
                  {this.state.isCorrect ? "Correct!" : "Incorrect!"}
                </Text>
              </View>
            }
            <View style={styles.instantFeedbackBody}>
              <HTMLView value={this.state.feedbackText} style={styles.instantFeedbackBodyText} />
            </View>
          </View>
        }
        <QuestionTag question={this.props} selectedValue={this.state.response} setResponse={this.setResponse} />
      </View>
    )
  }
}
