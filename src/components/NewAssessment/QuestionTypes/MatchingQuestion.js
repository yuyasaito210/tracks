import PropTypes from "prop-types"
import isNil from "lodash.isnil"
import omit from "lodash.omit"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { htmlView } from "/lib/helpers"
import styles from "../styles"
import StyleConsts from "/constants/styleConstants"
import UncachableImage from "/lib/helpers/UncachableImage"

export default class MatchingQuestion extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    selectedValue: PropTypes.object,
    setResponse: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedValue: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      responses: props.selectedValue,
      selectedPrompt: undefined,
    }

    this.onAnswerSelect = this.onAnswerSelect.bind(this)
    this.onPromptSelect = this.onPromptSelect.bind(this)
  }

  onAnswerSelect(value) {
    if (this.state.selectedPrompt === undefined) {
      return
    }
    let newResponses = {}
    if (value === "-1") {
      newResponses = omit(this.state.responses, this.state.selectedPrompt)
    } else {
      newResponses = {
        ...this.state.responses,
        [this.state.selectedPrompt]: value,
      }
    }
    this.setState(state => ({
      ...state,
      responses: newResponses,
      selectedPrompt: undefined,
    }))
    // const feedbackText = this.props.answers.filter(answer => newResponses.includes(answer.value)).map(answer => answer.feedbackText).join("<br />")
    this.props.setResponse(newResponses, "")
  }

  onPromptSelect(id) {
    const selectedPrompt = this.state.selectedPrompt === id ? undefined : id
    this.setState({ selectedPrompt })
  }

  answerLetters() {
    const letters = {}
    this.props.question.answers.forEach((answer, index) => {
      letters[answer.value] = String.fromCharCode(65 + index)
    })

    return letters
  }

  promptChunks(question) {
    return question.prompts.map((prompt) => {
      const selected = prompt.id === this.state.selectedPrompt
      const hasResponse = !isNil(this.state.responses[prompt.id])
      const circleResponseColor = hasResponse ? styles.matchingCircleUnselected : styles.matchingCircleNoText
      const circleStyle = selected ? styles.matchingCircleSelected : circleResponseColor
      return (
        <View key={`prompt-${prompt.id}`} style={styles.matchingPrompt}>
          <View style={[styles.matchingPromptWrapper, selected ? styles.matchingPromptWrapperSelected : styles.matchingPromptWrapperUnselected]}>
            <TouchableHighlight
              style={selected ? styles.matchingPromptWrapperSelected : styles.matchingPromptWrapperUnselected}
              underlayColor={selected ? styles.matchingPromptWrapperUnselected.backgroundColor : styles.matchingPromptWrapperSelected.backgroundColor}
              onPress={() => this.onPromptSelect(prompt.id)}>
              <Text style={[styles.matchingPromptItem, selected ? styles.matchingPromptSelected : styles.matchingPromptUnselected]}>
                {prompt.displayText}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.matchingCircleWrapper}>
            <TouchableHighlight
              style={[styles.matchingCircle, circleStyle]}
              underlayColor={selected ? circleResponseColor.backgroundColor : styles.matchingCircleSelected.backgroundColor}
              onPress={() => this.onPromptSelect(prompt.id)}>
              <Text style={styles.matchingCircleText}>{this.answerLetters()[this.state.responses[prompt.id]]}</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    })
  }

  answerChunks(question) {
    return question.answers.map((answer, index) => (
      <View key={`answer-${answer.value}`} style={styles.matchingAnswerWrapper}>
        <View style={styles.matchingCircleWrapper}>
          <TouchableHighlight
            style={styles.matchingCircle}
            underlayColor={styles.matchingCircle.backgroundColor}
            onPress={() => this.onAnswerSelect(answer.value)}>
            <Text style={styles.matchingCircleText}>{String.fromCharCode(65 + index)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.matchingAnswerTextWrapper}>
          <TouchableHighlight
            underlayColor={styles.matchingPrompts.backgroundColor}
            onPress={() => this.onAnswerSelect(answer.value)}>
            <Text style={styles.matchingAnswerText}>{answer.displayText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    ))
  }

  render() {
    const { question } = this.props

    return (
      <View key={question.questionText} style={styles.MCWrapper}>
        <View>
          <Text style={styles.subHeader}>{htmlView(question.questionText, "header")}</Text>
        </View>
        { question.questionImage !== "" &&
          !isNil(question.questionImage) &&
          <View style={[styles.imageWrapper, { marginVertical: 10 }]}>
            <UncachableImage style={styles.image} source={{ uri: question.questionImage }} resizeMode={"contain"} />
          </View>
        }
        <View style={styles.matchingPrompts}>
          <View>
            {this.promptChunks(question)}
          </View>
          <View style={styles.matchingPossibleAnswersHeader}>
            <Text style={styles.matchingPossibleAnswersHeaderText}>Possible Answers:</Text>
          </View>
          <View>
            {this.answerChunks(question)}
          </View>
        </View>
      </View>
    )
  }
}
