import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConsts.colors.white,
    alignItems: 'center'
  },
  icon: {
    color: StyleConsts.colors.red
  },
  titleError: {
    color: StyleConsts.colors.red,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(17, 17, 25, 34)
  },
  subTextError: {
    textAlign: 'center',
    padding: 10,
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(16, 16, 24, 32)
  },
  buttonTryAgain: {
    height: getSize(35, 35, 50, 70),
    backgroundColor: StyleConsts.colors.buttonGrey,
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(16, 16, 24, 32),
    textAlign: 'center'
  }
})
