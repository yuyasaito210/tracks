import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  container: {
    backgroundColor: StyleConsts.colors.white,
    flex: 1,
    flexDirection: "column",
    marginTop: getSize(55, 55, 70, 90),
  },
})
