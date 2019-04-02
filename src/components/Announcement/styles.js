import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  actionText: {
    color: StyleConsts.colors.mediumGrey,
  },
  announcementMessage: {
    color: StyleConsts.colors.navy,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
  announcementTitle: {
    color: StyleConsts.colors.navy,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
  buttonWrapper: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
  },
  containerContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  dataInfo: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.orange,
    flexDirection: "row",
    height: getSize(70, 70, 110, 140),
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  dataInfoTall: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.orange,
    flexDirection: "row",
    height: getSize(90, 90, 130, 160),
    justifyContent: "space-around",
    paddingHorizontal: 30,
  },
  infoText: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  grayCheckIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  greenCheckIcon: {
    color: StyleConsts.colors.green,
  },
})
