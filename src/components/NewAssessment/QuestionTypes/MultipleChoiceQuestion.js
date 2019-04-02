import isNil from "lodash.isnil"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import ButtonGroupQuestion from "./ButtonGroupQuestion"
import { htmlView } from "/lib/helpers"
import styles from "../styles"
import StyleConsts from "/constants/styleConstants"
import UncachableImage from "/lib/helpers/UncachableImage"

export default class MultipleChoiceQuestion extends Component {
  render() {
    const { question } = this.props
    if (question.questionTag === "gender" && question.answers.length === 2) {
      return (
        <ButtonGroupQuestion {...this.props} />
      )
    }
    const answerChunks = question.answers.map((answer) => {
      const isItemSelected = !isNil(this.props.selectedValue) && answer.value.toString() === this.props.selectedValue.toString()
      return (
        <TouchableHighlight
          key={answer.value.toString()}
          style={[
            styles.MCItem,
            isItemSelected ? styles.MCItemSelectedColor : styles.MCItemColor,
          ]}
          onPress={() => this.props.setResponse(answer.value, answer.feedbackText)}
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
          <Text style={styles.MCAnswersSubheader}>Please select one answer</Text>
          <View>
            {answerChunks}
          </View>
        </View>
      </View>
    )
  }
}
