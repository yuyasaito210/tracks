import { StyleSheet } from 'react-native'
import { getSize } from '/lib/helpers/styleSizes'

import StyleConsts from '/constants/styleConstants'

module.exports = StyleSheet.create({
  loginFormContainer: {
    marginTop: getSize(0, 20, 40, 60)
  },
  title: {
    fontSize: getSize(30, 30, 45, 60),
    alignSelf: 'center',
    marginBottom: 10
  },
  inputContainer: {
    borderBottomWidth: 0.5,
    borderColor: StyleConsts.colors.navy,
    marginBottom: 20
  },
  loginErrorContainer: {
    height: getSize(30, 30, 45, 60),
    marginTop: 5,
    marginBottom: 5
  },
  loginError: {
    color: StyleConsts.colors.red,
    textAlign: 'center'
  },
  input: {
    height: getSize(45, 45, 70, 90),
    borderColor: StyleConsts.colors.white,
    fontSize: getSize(16, 16, 24, 32),
    color: StyleConsts.colors.navy,
    marginLeft: getSize(30, 30, 45, 60),
    marginBottom: -10
  },
  icon: {
    position: 'absolute',
    top: getSize(12, 12, 18, 24),
    left: 0,
    color: StyleConsts.colors.navy
  },
  forgotPassword: {
    fontSize: getSize(12, 12, 18, 24),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    marginTop: 20
  },
  buttonText: {
    fontSize: getSize(18, 18, 24, 36),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans
  },
  button: {
    height: getSize(35, 35, 50, 70),
    backgroundColor: StyleConsts.colors.buttonGrey,
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  resetPasswordTitle: {
    color: StyleConsts.colors.navy,
    textAlign: 'center',
    fontSize: getSize(16, 16, 24, 32)
  },
  resetPasswordText: {
    color: StyleConsts.colors.mediumGrey,
    textAlign: 'center',
    fontSize: getSize(16, 16, 24, 32),
    marginBottom: getSize(0, 0, 20, 40),
    padding: getSize(20, 20, 40, 80)
  },
  resetPasswordInfo: {
    marginLeft: -5,
    marginRight: -5,
    marginBottom: 20
  }
})
