import { StyleSheet } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

import StyleConsts from "/constants/styleConstants"

module.exports = StyleSheet.create({
  logoContainer: {
    marginTop: 10,
  },
  logo: {
    flex: 1,
  },
  logoText: {
    alignSelf: "center",
    fontSize: getSize(14, 20, 23, 26),
    fontFamily: StyleConsts.fontFamily.openSansBold,
    marginTop: 0,
  },
  logoTextWhite: {
    color: StyleConsts.colors.white,
  },
  logoTextGrey: {
    color: StyleConsts.colors.mediumGrey,
  },
  logoBlack: {
    color: StyleConsts.colors.navy,
  },
  logoCasablanca: {
    color: StyleConsts.colors.casablanca,
  },
})
