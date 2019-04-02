import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const rowBorder = {
  borderBottomWidth: 1,
  borderColor: StyleConsts.colors.mediumGrey,
  borderStyle: "solid",
  paddingBottom: 4,
  paddingTop: 4,
}
const progressColor = StyleConsts.colors.teal
const progressRadius = 12
const textIndent = getSize(28, 32, 48, 64)

module.exports = StyleSheet.create({
  centerTextWrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  chapterProgressBar: {
    flex: 7,
  },
  chapterStatus: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    textAlign: "center",
  },
  chapterStatusComplete: {
    color: StyleConsts.colors.teal,
  },
  chapterStatusIncomplete: {
    color: StyleConsts.colors.red,
  },
  completionIcon: {
    flex: 1,
    color: StyleConsts.colors.darkGrey,
    textAlign: "center",
  },
  elapsedTime: {
    flex: 1.5,
  },
  elapsedTimeText: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    textAlign: "center",
  },
  progressFill: {
    backgroundColor: progressColor,
    borderBottomRightRadius: progressRadius,
    borderTopRightRadius: progressRadius,
    color: StyleConsts.colors.white,
    height: "100%",
  },
  progressInformation: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: StyleConsts.fontSize.em1 * 1.5,
  },
  progressPercent: {
    flex: 1.5,
  },
  progressPercentText: {
    color: StyleConsts.colors.teal,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    textAlign: "center",
  },
  progressTableHeader: {
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderColor: StyleConsts.colors.mediumGrey,
    flexDirection: "row",
    paddingTop: StyleConsts.fontSize.em1 * 2,

  },
  titleText: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.25,
    textAlign: "center",
  },
  expanderTitle: {
    flex: 1,
  },
  pageCompletionTitle: {
    flex: 1,
  },
  sectionTitle: {
    flex: 8,
  },
  timeTitle: {
    flex: 2,
  },
  ratingTitle: {
    flex: 3,
  },
  progressTableRow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // justifyContent: "center",
  },
  progressTableRowSection0: {
    backgroundColor: StyleConsts.colors.lightGrey,
    borderColor: StyleConsts.colors.mediumGrey,
    borderTopWidth: 1,
  },
  sectionExpander: {
    flex: 1,
  },
  sectionExpander0: {
    ...rowBorder,
  },
  sectionExpanderContent: {
    flex: 1,
  },
  pageCompletionStatus: {
    flex: 1,
  },
  pageCompletionStatus0: {
    ...rowBorder,
  },
  pageCompletionStatus1: {
    ...rowBorder,
  },
  sectionRowTitle: {
    flex: 8,
    ...rowBorder,
  },
  sectionRowTitleLevel0: {
    marginLeft: 0,
  },
  sectionRowTitleLevel1: {
    marginLeft: textIndent / 2,
  },
  sectionRowTitleLevel2: {
  },
  sectionTime: {
    flex: 2,
    ...rowBorder,
  },
  sectionRating: {
    flex: 3,
    ...rowBorder,
  },
  sectionRowTitleText: {
    fontSize: StyleConsts.fontSize.em1,
    marginLeft: textIndent,
  },
  sectionTimeText: {
    flex: 1,
    fontSize: StyleConsts.fontSize.em1,
    textAlign: "center",
  },
  sectionRatingText: {
    flex: 1,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1,
    textAlign: "center",
  },
  sectionRatingBad: {
    color: StyleConsts.colors.red,
  },
  sectionRatingGreat: {
    color: StyleConsts.colors.green,
  },
  sectionRatingOkay: {
    color: StyleConsts.colors.yellow,
  },
  sectionRatingZero: {
    color: StyleConsts.colors.mediumGray,
  },
  progressShell: {
    borderColor: progressColor,
    borderRadius: progressRadius,
    borderStyle: "solid",
    borderWidth: 2,
    height: StyleConsts.fontSize.em1 * 1.5,
  },
})
