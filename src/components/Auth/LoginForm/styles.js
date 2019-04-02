import { StyleSheet } from 'react-native'
import {getSize} from '/lib/helpers/styleSizes'

import StyleConsts from '/constants/styleConstants'

module.exports = StyleSheet.create({
  loginFormContainer: {
    marginTop: 30
  },
  title: {
    fontSize: getSize(30, 30, 45, 60),
    alignSelf: 'center',
    marginBottom: 30
  },
  inputContainer: {
    borderBottomWidth: 0.5,
    borderColor: StyleConsts.colors.lightGrey,
    marginBottom: 20
  },
  loginErrorContainer: {
    height: getSize(30, 30, 45, 60),
    marginTop: 5,
    marginBottom: 5
  },
  loginError: {
    color: StyleConsts.colors.red,
    textAlign: 'center',
    fontSize: getSize(14, 16, 18, 20)
  },
  input: {
    height: getSize(45, 45, 70, 90),
    borderColor: StyleConsts.colors.white,
    fontSize: getSize(14, 16, 18, 20),
    color: StyleConsts.colors.white,
    marginLeft: getSize(30, 30, 45, 60),
    marginBottom: -10
  },
  icon: {
    position: 'absolute',
    top: getSize(12, 12, 18, 24),
    left: 0,
    color: StyleConsts.colors.lightGrey
  },
  forgotPassword: {
    fontSize: getSize(12, 12, 18, 24),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    marginTop: 20
  },
  buttonText: {
    fontSize: getSize(18, 18, 26, 36),
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
  }
})
