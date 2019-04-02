import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import CheckBox from 'react-native-check-box'
import Modal from 'react-native-modal'
import styles from './styles'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class RegistrationPasswordSetupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      confirmPassword: '',
      checked: false,
      isModalVisible: false
    }
  }

  onSubmitLogin () {
    this.props.onFormSubmit(
      this.props.userId, this.props.token,
      this.state.password,
      this.state.passwordConfirmation
    )
  }

  showModal = () => this.setState({ isModalVisible: true })

  hideModal = () => this.setState({ isModalVisible: false })

  renderModal () {
    return (
      <Modal
        style={styles.modal}
        isVisible={this.state.isModalVisible}
        backdropOpacity={0}>
        <ScrollView style={styles.modalView}>
          <Text style={{
            fontFamily: StyleConsts.fontFamily.openSans,
            color: StyleConsts.colors.navy,
            fontSize: 16
          }}>
                Text will be provided later
            </Text>
          <TouchableHighlight
            onPress={() => this.hideModal()}
            underlayColor={'#FFFFFF'}>
            <Text style={{
              fontFamily: StyleConsts.fontFamily.openSans,
              color: StyleConsts.colors.navy,
              fontSize: 16
            }}>
              CLOSE
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </Modal>
    )
  }

  render () {
    const { checked, isModalVisible } = this.state
    const buttonBackgrounColor = checked ? StyleConsts.colors.navy : StyleConsts.colors.mediumGrey

    return (
      <View style={styles.container}>
        {isModalVisible && this.renderModal()}
        <Text style={styles.header}>Account Setup</Text>
        <Text style={styles.subHeader}>
          Enter the information below to finish setting up your BearTracks account.
        </Text>
        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputs}>
              <Icon style={styles.icon} name={'lock'} size={getSize(20, 20, 30, 40)} />
              <TextInput
                multiline={false}
                style={styles.input}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                placeholder={'password'}
                returnKeyType={'done'}
                secureTextEntry
                placeholderTextColor={StyleConsts.colors.mediumGrey} />
            </View>
          </View>
          <View style={styles.passwordInfoView}>
            <Text style={styles.passwordInfo}>
              Password must be 6 to 72 characters long,
               and must contain a mix of letters and numbers
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputs}>
              <Icon style={styles.icon} name={'lock'} size={getSize(20, 20, 30, 40)} />
              <TextInput
                multiline={false}
                style={styles.input}
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                value={this.state.confirmPassword}
                placeholder={'confirm password'}
                returnKeyType={'done'}
                secureTextEntry
                placeholderTextColor={StyleConsts.colors.mediumGrey} />
            </View>
          </View>
          <View style={styles.termsAndPrivacyWrapper}>
            <CheckBox
              style={{ flex: 1 }}
              onClick={() => { this.setState({ checked: !this.state.checked }) }}
              isChecked={this.state.checked}
              checkedImage={<Image source={require('../../../images/checked.png')} />}
              unCheckedImage={<Image source={require('../../../images/notChecked.png')} />} />
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.termsAndPrivacyText}>
                  I agree to the
                </Text>
                <TouchableHighlight
                  onPress={() => this.showModal()}
                  style={{ width: 110, height: 17 }}
                  underlayColor={'#FFFFFF'}>
                  <Text style={styles.termsAndPrivacyButtonText}> terms of use </Text>
                </TouchableHighlight>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.termsAndPrivacyText}>and</Text>
                <TouchableHighlight
                  onPress={() => this.showModal()}
                  style={{ width: 110, height: 17 }}
                  underlayColor={'#FFFFFF'}>
                  <Text style={styles.termsAndPrivacyButtonText}
                  > privacy policy </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <TouchableHighlight
            style={[styles.button, { backgroundColor: buttonBackgrounColor }]}
            isDisabled={this.props.isDisabled}
            onPress={() => checked ? this.onSubmitLogin() : null}
            underlayColor={StyleConsts.colors.buttonGreyClicked}>
            <Text style={styles.buttonText}>Finish / Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default RegistrationPasswordSetupForm
