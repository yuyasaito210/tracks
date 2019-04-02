import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
  },
  courseButtonWrapper: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(24, 24, 32, 43),
    fontWeight: "bold",
    textAlign: "center",
  },
  nameText: {
    color: StyleConsts.colors.white,
    fontSize: getSize(18, 18, 24, 30),
  },
  termText: {
    color: StyleConsts.colors.white,
  },
  termWrapper: {
    paddingBottom: 5,
  },
})
