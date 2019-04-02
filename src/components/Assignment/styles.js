import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  assignmentButtonWrapper: {
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 0,
    flexDirection: "column",
    height: getSize(160, 160, 240, 320),
    justifyContent: "center",
    margin: 20,
    padding: getSize(15, 15, 22, 30),
  },
  assignmentDescription: {
    color: StyleConsts.colors.navy,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
  assignmentGrade: {
    color: StyleConsts.colors.navy,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  assignmentTitle: {
    color: StyleConsts.colors.navy,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,
    textAlign: "center",
  },
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
  },
  dataInfo: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.orange,
    flexDirection: "row",
    height: getSize(70, 70, 110, 140),
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  infoText: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  rowStatus: {
    color: StyleConsts.colors.mediumGrey,
    paddingTop: 10,
    textAlign: "center",
  },
  icon: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  closedIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  circleIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  filledCircleIcon: {
    color: StyleConsts.colors.red,
  },
  grayCheckIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  greenCheckIcon: {
    color: StyleConsts.colors.green,
  },
})
