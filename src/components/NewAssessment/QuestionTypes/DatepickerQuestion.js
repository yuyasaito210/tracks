import moment from "moment"
import React, { Component } from "react"
import {
  Text,
  View,
} from "react-native"
import DatePicker from "react-native-datepicker"
import styles from "../styles"

export default class DatepickerQuestion extends Component {
  render() {
    const { question } = this.props
    const minDate = moment.utc().year(1950).date(2).month(0)
          .format("MMMM DD, YYYY")
    return (
      <View key={question.questionText} style={[styles.personDataWrapper]}>
        <View key={question.questionText} style={[styles.personData, { flexDirection: "row", flex: 1 }]}>
          <View style={styles.fieldLabelContainer}>
            <Text style={styles.inputTitle}>{question.questionText}</Text>
          </View>
          <View style={[styles.fieldContainer, styles.datepickerContainer]}>
            <DatePicker
              date={this.props.selectedValue !== undefined ? new Date(this.props.selectedValue) : ""}
              mode={"date"}
              androidMode={"spinner"}
              placeholder={question.placeholder}
              format={"MMMM DD, YYYY"}
              minDate={minDate}
              confirmBtnText={"Confirm"}
              cancelBtnText={"Cancel"}
              showIcon={false}
              onDateChange={date => this.props.setResponse(moment.utc(new Date(date)).format("MM/DD/YYYY"))}
              customStyles={{
                dateInput: styles.datepickerInput,
                dateText: styles.datepickerText,
                placeholderText: styles.datepickerPHText,
              }} />
          </View>
        </View>
      </View>
    )
  }
}
