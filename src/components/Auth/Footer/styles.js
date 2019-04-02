import { StyleSheet, Dimensions } from 'react-native'
import { getSize } from '/lib/helpers/styleSizes'

import StyleConsts from '/constants/styleConstants'

const x = Dimensions.get('window').width

function substract (a, b) {
  return a - b
}

function getBearLogoPos () {
  return (x - 130) / 2
}
module.exports = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    width: substract(x, 80),
    alignSelf: 'center'
  },
  footerContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 10,
    left: 40,
    width: substract(x, 80)
  },
  footerContainer1: {
    flex: 3
  },
  footerContainer2: {
    flex: 1
  },
  bearLogo: {
    color: StyleConsts.colors.casablanca,
    alignSelf: 'center',
    position: 'relative',
    left: getBearLogoPos(),
    backgroundColor: 'transparent'
  },
  bearLogoLight: {
    color: StyleConsts.colors.navy,
    alignSelf: 'center',
    position: 'relative',
    left: getBearLogoPos(),
    backgroundColor: 'transparent'
  },
  footerText: {
    fontSize: getSize(10, 10, 15, 20),
    color: StyleConsts.colors.white,
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSansBold,
    marginTop: 0,
    marginBottom: 0
  },
  footerTextWhite: {
    color: StyleConsts.colors.white
  },
  footerTextGrey: {
    color: StyleConsts.colors.mediumGrey
  }
})
