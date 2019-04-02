import { StyleSheet, Dimensions } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

import StyleConsts from "/constants/styleConstants"

module.exports = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 15,
    height: StyleConsts.fontSize.em1 * 2.5,
    paddingBottom: 0,
    paddingTop: 0,
    width: StyleConsts.fontSize.em1 * 8,
  },
})
