import { StyleSheet, Platform } from 'react-native'

import StyleConsts from '/constants/styleConstants'

function checkOS (margin) {
  return Platform.OS === 'ios' ? margin : 0
}

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: StyleConsts.colors.white,
    justifyContent: 'flex-start',
    marginTop: checkOS(30),
    padding: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: StyleConsts.screenHeight - checkOS(30)
  },
  forgotPassword: {
    fontSize: 10,
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    marginTop: 5
  },
  buttonText: {
    fontSize: 18,
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans
  },
  button: {
    height: 35,
    backgroundColor: StyleConsts.colors.buttonGrey,
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
