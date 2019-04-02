import PropTypes from "prop-types"
import isNil from "lodash.isnil"
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

export default class MultipleSelectQuestion extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    selectedValue: PropTypes.array,
    setResponse: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedValue: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      responses: props.selectedValue,
    }

    this.onPress = this.onPress.bind(this)
  }

  onPress(value) {
    let newResponses = []
    if (this.state.responses.includes(value)) {
      newResponses = this.state.responses.filter(val => val !== value)
    } else {
      newResponses = this.state.responses.concat([value])
    }
    this.setState({ responses: newResponses })
    const feedbackText = this.props.question.answers.filter(answer => newResponses.includes(answer.value)).map(answer => answer.feedbackText).join("<br />")
    this.props.setResponse(newResponses, feedbackText)
  }

  render() {
    const { question } = this.props
    const answerChunks = question.answers.map((answer) => {
      const isItemSelected = this.state.responses.includes(answer.value)
      return (
        <TouchableHighlight
          key={answer.value.toString()}
          style={[
            styles.MCItem,
            isItemSelected ? styles.MCItemSelectedColor : styles.MCItemColor,
          ]}
          onPress={() => this.onPress(answer.value)}
          underlayColor={
            isItemSelected ? StyleConsts.colors.teal : StyleConsts.colors.white
          }>
          <Text style={[
            styles.MCItemText,
            isItemSelected ? styles.MCItemSelectedTextColor : styles.MCItemTextColor,
          ]}>
            {answer.displayText}
          </Text>
        </TouchableHighlight>
      )
    })

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
        <View style={styles.MCAnswers}>
          <View>
            {answerChunks}
          </View>
        </View>
      </View>
    )
  }
}
