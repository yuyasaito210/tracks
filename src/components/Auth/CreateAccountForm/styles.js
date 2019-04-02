import { StyleSheet, Dimensions } from 'react-native'
import { getSize } from '/lib/helpers/styleSizes'

import StyleConsts from '/constants/styleConstants'

const x = Dimensions.get('window').width

function getInputsWidth () {
  return (x - 100) / 2
}

module.exports = StyleSheet.create({
  registrationFormContainer: {
    marginTop: 20
  },
  finishRegistrationContainer: {
    marginTop: 60,
    marginBottom: 85
  },
  title: {
    alignItems: 'center',
    marginBottom: 30
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: getSize(16, 16, 24, 32),
    fontFamily: StyleConsts.fontFamily.openSans,
    color: StyleConsts.colors.navy
  },
  finishTitle: {
    alignItems: 'center',
    padding: 9
  },
  finishTitleHeader: {
    fontWeight: 'bold',
    fontSize: getSize(16, 16, 24, 32),
    fontFamily: StyleConsts.fontFamily.openSans,
    marginBottom: 5
  },
  finishTitleText: {
    fontSize: getSize(16, 16, 24, 32),
    fontFamily: StyleConsts.fontFamily.openSans,
    color: StyleConsts.colors.mediumGrey,
    textAlign: 'center'
  },
  inputContainer: {
    borderBottomWidth: 0.5,
    borderColor: StyleConsts.colors.darkGrey,
    marginBottom: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35
  },
  inputs: {
    width: getInputsWidth(),
    borderBottomWidth: 0.5,
    borderColor: StyleConsts.colors.darkGrey
  },
  icon: {
    position: 'absolute',
    top: getSize(12, 12, 18, 24),
    left: 0,
    color: StyleConsts.colors.darkGrey
  },
  input: {
    height: getSize(45, 45, 70, 90),
    marginBottom: -10,
    borderColor: StyleConsts.colors.darkGrey,
    fontSize: getSize(16, 16, 24, 32),
    color: StyleConsts.colors.darkGrey,
    marginLeft: getSize(30, 30, 45, 60)
  },
  buttonText: {
    fontSize: getSize(16, 16, 24, 32),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans
  },
  button: {
    height: getSize(30, 30, 45, 60),
    backgroundColor: StyleConsts.colors.navy,
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  backToLogin: {
    fontSize: getSize(14, 14, 28),
    color: StyleConsts.colors.navy,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    marginTop: 20
  }
})
