import isNil from "lodash.isnil"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import Slider from "react-native-slider"
import styles from "./styles"
import StyleConsts from "/constants/styleConstants"
import { renderTables } from "./table"
import Question from "./QuestionTypes"

export default class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      instantFeedbackResponses: {},
      showInstantFeedback: false,
    }

    this.checkAnswers = this.checkAnswers.bind(this)
    // this.questions = this.questions.bind(this)
    this.setInstantFeedbackResponse = this.setInstantFeedbackResponse.bind(this)
    // this.setStandardResponse = this.setStandardResponse.bind(this)
  }

  componentWillMount() {
    const instant = {}
    // const standard = {}
    const { assessment } = this.props
    assessment.currentPage().questions.forEach((question) => {
      if (question.instantFeedback) {
        instant[question.id] = assessment.responses[question.id.toString()]
      } else {
        // standard[question.id] = this.props.assessment.responses[question.id.toString()]
        const response = assessment.responses[question.id.toString()]
        if (response !== undefined && response !== "") {
          this.props.actions.setStandardResponse(question.id, response)
        }
      }
    })
    this.setState({
      instantFeedbackResponses: {
        ...this.state.instantFeedbackResponses,
        ...instant,
      },
      showInstantFeedback: false,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.state.showInstantFeedback && prevProps.assessment.currentPage().id !== this.props.assessment.currentPage().id) {
      this.setState({ showInstantFeedback: false })
    }
  }

  onSelect(index, id, takenValue, type) {
    if (index !== null) {
      this.setState({ selectedValue: index })
    }
    if (type === "satisfaction" || type === "confidence") {
      this.props.actions.onSlider(this.props.assessment.currentPage().content.title, type, takenValue)
    }
    const value = type === "multipleChoice" ? takenValue.value : takenValue
    this.props.onAnswerPut(this.props.content.attemptId, id, value, takenValue.feedbackText ? takenValue.feedbackText : "")
  }

  checkAnswers() {
    this.props.actions.checkAnswers(this.props.assessment, this.state.instantFeedbackResponses)
    this.setState({ showInstantFeedback: true })
  }

  setInstantFeedbackResponse(questionId, value) {
    this.setState({
      instantFeedbackResponses: {
        ...this.state.instantFeedbackResponses,
        [questionId]: value,
      },
      showInstantFeedback: false,
    })
  }

  getNoQuestion() {
    return <Text>This type of question is under maintance</Text>
  }

  getQuestions(questions, answersList) {
    const content = questions.map((question) => {
      switch (question.questionType) {
        case "satisfaction":
        case "confidence":
          return this.getSliderQuestion(question, answersList)
        default:
          return this.getNoQuestion()
      }
    })
    return content
  }

  getSliderLabels(answers) {
    if (answers.length <= 3) {
      return answers
    }
    const tmpArr = []
    tmpArr.push(answers[0])
    tmpArr.push(answers[Math.floor(answers.length / 2)])
    tmpArr.push(answers[answers.length - 1])
    return tmpArr
  }

  getSliderQuestion(question) {
    const sliderLabels = this.getSliderLabels(question.answers)
    return (
      <View style={styles.slider} key={question.id}>
        <Text style={styles.sliderQuestion}>{question.questionText}</Text>
        <View style={styles.sliderContainer}>
          <View style={[styles.scale, { marginBottom: 5 }]}>
            { sliderLabels.map((item, i) => (
              <Text key={i} style={[styles.scaleItem, styles.scaleDescription]}>
                {item.displayText}
              </Text>
            )) }
          </View>
          <Slider
            minimumValue={0}
            maximumValue={question.answers.length - 1}
            step={1}
            value={this.state.value}
            style={{ height: 20 }}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            onSlidingComplete={value => this.onSelect(
                null,
                question.id,
                value,
                question.questionType,
            )}
            minimumTrackTintColor={StyleConsts.colors.teal} />
          <View style={[styles.scale, { marginTop: 5 }]}>
            { question.answers.map((item, i) => (
              <Text key={i} style={styles.scaleItem}>{item.value}</Text>
            )) }
          </View>
        </View>
      </View>
    )
  }

  questions() {
    const currentPage = this.props.assessment.currentPage()
    return currentPage.questions.map(question => (
      <Question key={question.id} {...question} assessment={this.props.assessment} setStandardResponse={this.props.actions.setStandardResponse} setInstantFeedbackResponse={this.setInstantFeedbackResponse} showInstantFeedback={this.state.showInstantFeedback} />
    ))
  }

  checkAnswersButton() {
    if (!this.props.assessment.currentPage().questions.some(question => question.instantFeedback)) {
      return undefined
    }

    return (
      <View style={styles.checkAnswers}>
        <TouchableHighlight
          style={styles.checkAnswersButton}
          onPress={this.checkAnswers}
          underlayColor={StyleConsts.colors.orange}>
          <Text style={styles.checkAnswersButtonText}>
            CHECK ANSWERS
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { content } = this.props
    const currentPage = this.props.assessment.currentPage()

    let title = content.title
    let displayText = ""
    let showScore = false
    if (currentPage.content !== undefined) {
      if (currentPage.content.caption !== undefined) {
        title = currentPage.content.caption
      }
      if (currentPage.content.displayText !== undefined) {
        displayText = currentPage.content.displayText
      }
      showScore = currentPage.content.showScore
    }
    const showTables = !(isNil(currentPage.content) || isNil(currentPage.content.resultsTables))
    return (
      <View style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>{title}</Text>
        </View>
        { showScore &&
          <View style={styles.genderWrapper}>
            <Text style={styles.subHeader}>{displayText}</Text>
            <View style={styles.estimatedWrapper}>
              <Text style={styles.estimatedNumber}>
                {content.dynamicData.score} <Text style={styles.estimatedText}>{currentPage.content.scoreUnits !== undefined ? currentPage.content.scoreUnits : ""}</Text>
              </Text>
            </View>
          </View>
        }
        { showTables &&
          renderTables(currentPage.content.resultsTables, content.dynamicData)
        }
        { this.questions() }
        { this.checkAnswersButton() }
        { !this.props.content.isWBA &&
          <View style={styles.calculateFooter}>
            <Text style={styles.calculateFooterText}>
              Enter your Data. {"\n"}Sit back and watch us calculate!
            </Text>
          </View>
        }
      </View>
    )
  }
}
