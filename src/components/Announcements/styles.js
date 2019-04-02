import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const headerFontSize = getSize(24, 24, 32, 40)
const headerPadding = 10
module.exports = StyleSheet.create({
  announcementAuthor: {
    color: StyleConsts.colors.mediumGrey,
  },
  announcementButton: {
    flex: 5,
  },
  announcementSideSpacer: {
    flex: 1,
  },
  announcementButtonWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.mediumGrey,
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 5,
  },
  announcementCount: {
    backgroundColor: StyleConsts.colors.red,
    flex: 1,
    paddingBottom: headerPadding,
    paddingTop: headerPadding,
  },
  announcementCountRow: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  announcementCountText: {
    color: StyleConsts.colors.white,
    fontSize: headerFontSize,
    textAlign: "center",
  },
  announcementHeader: {
    backgroundColor: StyleConsts.colors.teal,
    flex: 5,
    paddingBottom: headerPadding,
    paddingTop: headerPadding,
  },
  announcementHeaderText: {
    color: StyleConsts.colors.white,
    fontSize: headerFontSize,
    paddingLeft: headerPadding,
  },
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
  },
  headerText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(24, 24, 32, 43),
    fontWeight: "bold",
    textAlign: "center",
  },
  leftSide: {
    flex: 2,
  },
  noAnnouncementsText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 22, 32),
    marginTop: 10,
    textAlign: "center",
  },
  postedDate: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  postedDateText: {
    color: StyleConsts.colors.mediumGrey,
  },
  rightArrowIcon: {
    color: StyleConsts.colors.mediumGrey,
    marginTop: -2,
    transform: [{ rotate: "180deg" }],
  },
  rowStatus: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 22, 32),
  },
  rowStatusUnread: {
    color: StyleConsts.colors.red,
    fontWeight: "bold",
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
})
