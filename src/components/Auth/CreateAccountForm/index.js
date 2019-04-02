import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  Alert,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '/lib/icons/BearTracks.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

class CreateAccountForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  onFormSubmit () {
    this.props.createAccount(this.state.firstname, this.state.lastname, this.state.email)
  }
  onAlert () {
    Alert.alert(
      'Accept Terms',
      'By creating an account, you agree to the Perceivant Terms Of Service and Privacy Policy.',
      [
        { text: 'CANCEL' },
        { text: 'I AGREE', onPress: () => this.onFormSubmit() }
      ]
    )
  }
  render () {
    return (
      <View style={styles.registrationFormContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Create an account.</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputs}>
            <Icon style={styles.icon} name={'profile'} size={getSize(20, 20, 30, 40)} />
            <TextInput
              multiline={false}
              style={styles.input}
              onChangeText={firstname => this.setState({ firstname })}
              value={this.state.firstname}
              placeholder={'first name'}
              returnKeyType={'done'}
              placeholderTextColor={StyleConsts.colors.navy}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              multiline={false}
              style={[styles.input, { marginLeft: 0 }]}
              onChangeText={lastname => this.setState({ lastname })}
              value={this.state.lastname}
              placeholder={'last name'}
              returnKeyType={'done'}
              placeholderTextColor={StyleConsts.colors.navy}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name={'email'} size={getSize(20, 20, 30, 40)} />
          <TextInput
            multiline={false}
            style={styles.input}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            keyboardType={'email-address'}
            placeholder={'email address'}
            returnKeyType={'done'}
            placeholderTextColor={StyleConsts.colors.navy}
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.onAlert()}
          underlayColor={StyleConsts.colors.buttonGreyClicked}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

CreateAccountForm.propTypes = {
  createAccount: PropTypes.func
}

CreateAccountForm.defaultProps = {
  createAccount: () => {}
}
export default CreateAccountForm
