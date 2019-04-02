import { StyleSheet, Dimensions } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

const x = Dimensions.get('window').width

function getInputsWidth () {
  return (x - 100) / 2
}

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
        textAlign: 'center',
        fontFamily: StyleConsts.fontFamily.openSansBold,
        fontSize: 16,
        color: StyleConsts.colors.navy
  },
  subHeader: {
    marginTop: 25,
    textAlign: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: 16,
    color: StyleConsts.colors.mediumGrey
  },
  inputsContainer: {
    paddingHorizontal: 20,
    marginTop: 65
  },
  inputWrapper: {
    borderBottomWidth: 0.5,
    marginBottom: 20
  },
  inputs: {
    borderBottomWidth: 0.5,
    borderColor: StyleConsts.colors.navy
  },
  icon: {
    position: 'absolute',
    top: getSize(12, 12, 18, 24),
    left: 0,
    color: StyleConsts.colors.navy
  },
  input: {
    height: getSize(45, 45, 70, 90),
    marginBottom: -10,
    borderColor: StyleConsts.colors.darkGrey,
    fontSize: getSize(16, 16, 24, 32),
    color: StyleConsts.colors.darkGrey,
    marginLeft: getSize(30, 30, 45, 60)
  },
  passwordInfoView: {
    marginTop: -10,
    paddingHorizontal: 30,
    marginBottom: 40
  },
  passwordInfo: {
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: 10,
    color: StyleConsts.colors.mediumGrey,
    textAlign: 'center'
  },
  termsAndPrivacyWrapper: {
    padding: getSize(0, 10, 10, 20),
    paddingHorizontal: getSize(0, 0, 20, 30),
    marginTop: getSize(0, 15, 15, 20),
    flexDirection: 'row'
  },
  termsAndPrivacyText: {
    textAlign: 'center',
    marginLeft: -20,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 16, 16, 18),
    color: StyleConsts.colors.mediumGrey
  },
  termsAndPrivacyButtonText: {
    fontFamily: StyleConsts.fontFamily.openSans,
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 16, 16, 18)
  },
  buttonText: {
    fontSize: getSize(18, 18, 26, 36),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans
  },
  button: {
    marginTop: 30,
    height: getSize(35, 35, 50, 70),
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  modal: {
    marginVertical: 50,
    borderWidth: 1,
    borderColor: StyleConsts.colors.mediumGrey,
    backgroundColor: 'rgba(240,240,240,.9)'
  },
  modalView: {
    flex: 1
  }
})
