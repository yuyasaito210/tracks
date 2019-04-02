import { StyleSheet } from 'react-native'
import { getSize } from '/lib/helpers/styleSizes'
import StyleConsts from '/constants/styleConstants'

const RegularStyles = StyleSheet.create({
  b: {
    fontWeight: '400',
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.navy
  },
  p: {
    color: StyleConsts.colors.mediumGrey,
    fontSize: getSize(13, 13, 18, 26),
    fontFamily: StyleConsts.fontFamily.openSans
  }
})

const HeaderStyles = StyleSheet.create({
  b: {
    fontWeight: '400',
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.navy
  },
  p: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(13, 13, 20, 26),
    fontFamily: StyleConsts.fontFamily.openSans
  }
})

const HelpText = StyleSheet.create({
  b: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 21, 28)
  },
  p: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 21, 28),
    fontFamily: StyleConsts.fontFamily.openSans
  }
})
const StepsStyles = StyleSheet.create({
  b: {
    fontWeight: '400',
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.navy
  },
  p: {
    color: StyleConsts.colors.mediumGrey,
    fontSize: getSize(13, 13, 21, 28),
    fontFamily: StyleConsts.fontFamily.openSans
  }
})

export {
  HeaderStyles,
  RegularStyles,
  HelpText,
  StepsStyles
}
