import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"

module.exports = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  glossaryDefinition: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.25,
  },
  glossaryRow: {
    // flexDirection: "row",
    paddingBottom: StyleConsts.fontSize.em1 / 2,
    paddingTop: StyleConsts.fontSize.em1 / 2,
  },
  glossaryTerm: {
    color: StyleConsts.colors.teal,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.25,
  },
})
