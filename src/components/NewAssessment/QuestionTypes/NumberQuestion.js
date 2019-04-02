import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'
import StyleConsts from '/constants/styleConstants'
import styles from '../styles'

export default class NumberQuestion extends Component {
  render () {
    const { question } = this.props
    const inputPlaceholder = `${question.placeholder ? question.placeholder : ''} ${question.basicAddOn && question.basicAddOn !== question.placeholder ? question.basicAddOn : ''}`
    return (
      <View key={question.questionText} style={styles.personDataWrapper}>
        <View key={question.questionText} style={[styles.personData, { flexDirection: 'row', flex: 1 }]}>
          <View style={styles.fieldLabelContainer}>
            <Text style={styles.inputTitle}>{question.questionText}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <TextInput
              ref={question.questionType}
              style={styles.input}
              returnKeyType={'done'}
              placeholder={inputPlaceholder}
              placeholderTextColor={StyleConsts.colors.darkGrey}
              multiline={false}
              keyboardType={question.questionType === 'number' ? 'numeric' : 'numbers-and-punctuation'}
              onEndEditing={event => this.props.setResponse(event.nativeEvent.text)}
              defaultValue={this.props.selectedValue}
              underlineColorAndroid={'white'}
              autoCorrect={false} />
          </View>
        </View>
      </View>
    )
  }
}
