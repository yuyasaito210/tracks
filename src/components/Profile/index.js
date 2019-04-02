import isNil from "lodash.isnil"
import moment from "moment"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native"
import DatePicker from "react-native-datepicker"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import styles from "./styles"
import StyleConsts from "/constants/styleConstants"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class Profile extends Component {
  constructor(props) {
    super(props)
    const { profile } = props
    let heightFeet = Math.floor(profile.height / 12)
    if (heightFeet === 0) {
      heightFeet = ""
    }
    let heightInches = profile.height - (heightFeet * 12)
    if (heightInches === 0) {
      heightInches = ""
    }
    const birthDate = new Date(profile.birth_date)
    birthDate.setHours(birthDate.getHours() + (new Date().getTimezoneOffset() / 60) + 1)
    this.state = {
      name: `${profile.first_name} ${profile.last_name}`,
      gender: profile.gender,
      heightFeet: heightFeet.toString(),
      heightInches: heightInches.toString(),
      weight: `${isNil(profile.weight) ? "" : profile.weight.toString()}`,
      birthDate,
      timeZoneOffsetInHours: ((-1) * (new Date()).getTimezoneOffset()) / 60
    }
  }

  updateName(name) {
    const names = name.split(" ")
    if (!isNil(names[0]) && names[0].length > 0) {
      this.props.actions.patchProfile("first_name", names[0])
    }
    if (!isNil(names[1]) && names[1].length > 0) {
      this.props.actions.patchProfile("last_name", names[1])
    }
  }

  saveProfile() {
    const payload = {}
    const names = this.state.name.split(" ")
    payload.first_name = names[0]
    payload.last_name = names[1]
    payload.gender = (this.state.gender === 0 || this.state.gender === "F") ? "F" : "M"
    payload.birth_date = (typeof this.state.birthDate) === "string" ? this.state.birthDate : moment(this.state.birthDate).format("YYYY-MM-DD")
    payload.weight = this.state.weight ? parseInt(this.state.weight, 10) : 0
    payload.height = (this.state.heightFeet && this.state.heightInches)
      ? (parseInt(this.state.heightFeet, 10) * 12) + parseInt(this.state.heightInches, 10)
      : 0
    this.props.actions.patchProfile(payload)
  }

  render() {
    return (
      <ScrollView style={styles.profileContainer}>
        <View style={styles.profileHeaderWrapper}>
          <Icon name={"profile"} size={90} style={styles.profileIcon} />
        </View>
        <View style={styles.profileSettingsWrapper}>
          <View style={styles.personDataWrapper}>
            <View style={styles.personData}>
              <Text style={styles.inputTitle}>Name</Text>
              <View style={styles.fieldContainer}>
                <TextInput
                  onChangeText={name => this.setState({ name })}
                  style={styles.input}
                  returnKeyType={"done"}
                  multiline={false}
                  placeholder={"First Last"}
                  placeholderTextColor={StyleConsts.colors.darkGrey}
                  value={this.state.name} />
              </View>
            </View>
            <View style={styles.personData}>
              <Text style={styles.inputTitle}>Birthday</Text>
              <View style={[styles.fieldContainer, styles.datepickerContainer]}>
                <DatePicker
                  date={this.state.birthDate}
                  mode={"date"}
                  androidMode={"spinner"}
                  placeholder={"select date"}
                  format={"YYYY-MM-DD"}
                  minDate={"1930-01-01"}
                  maxDate={"2017-01-01"}
                  confirmBtnText={"Confirm"}
                  cancelBtnText={"Cancel"}
                  showIcon={false}
                  onDateChange={birthDate => this.setState({ birthDate })}
                  customStyles={{
                    dateInput: styles.datepickerInput,
                    dateText: styles.datepickerText,
                    placeholderText: styles.datepickerPHText,
                  }} />
              </View>
            </View>
            <View style={styles.personData}>
              <Text style={styles.inputTitle}>Weight</Text>
              <View style={styles.fieldContainer}>
                <TextInput
                  onChangeText={weight => this.setState({ weight })}
                  style={styles.input}
                  keyboardType={"numeric"}
                  returnKeyType={"done"}
                  multiline={false}
                  placeholder={"in lbs"}
                  placeholderTextColor={StyleConsts.colors.darkGrey}
                  value={this.state.weight} />
              </View>
            </View>
            <View style={styles.personData}>
              <Text style={styles.inputTitle}>Height</Text>
              <View style={styles.fieldContainer}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={styles.multipleInputsItem}>
                    <TextInput
                      onChangeText={heightFeet => this.setState({ heightFeet })}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType={"done"}
                      maxLength={1}
                      multiline={false}
                      placeholder={"ft"}
                      placeholderTextColor={StyleConsts.colors.darkGrey}
                      value={`${this.state.heightFeet}`} />
                  </View>
                  <View style={styles.multipleInputsItem}>
                    <TextInput
                      onChangeText={heightInches => this.setState({ heightInches })}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType={"done"}
                      maxLength={2}
                      multiline={false}
                      placeholder={"in"}
                      placeholderTextColor={StyleConsts.colors.darkGrey}
                      value={this.state.heightInches} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personData}>
              <Text style={styles.inputTitle}>Gender</Text>
              <View style={styles.fieldContainer}>
                <SegmentedControlTab
                  selectedIndex={!isNil(this.state.gender) ? ((this.state.gender === "F" || this.state.gender === 0) ? 0 : 1) : -1}
                  tabsContainerStyle={styles.tabsContainerStyle}
                  tabStyle={styles.tabStyle}
                  tabTextStyle={styles.tabTextStyle}
                  activeTabStyle={styles.activeTabStyle}
                  activeTabTextStyle={styles.activeTabTextStyle}
                  values={["Female", "Male"]}
                  onTabPress={gender => this.setState({ gender })}
                  />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                onPress={() => this.saveProfile()}
                style={styles.saveButton}
                underlayColor={StyleConsts.colors.teal}>
                <Text style={{ color: StyleConsts.colors.white }}>Save</Text>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </View>
      </ScrollView>
    )
  }
}
