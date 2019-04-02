import { StyleSheet, Dimensions } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

import StyleConsts from "/constants/styleConstants"

module.exports = StyleSheet.create({
  caption: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansItalic,
    fontSize: StyleConsts.fontSize.em1 * 1.25,
    paddingLeft: StyleConsts.padding.sidePadding,
    marginRight: StyleConsts.fontSize.em1,
    textAlign: "right",
  },
  chapterAuthor: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    textAlign: "center",
  },
  h1: {
    color: StyleConsts.colors.teal,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2.625,
    paddingLeft: StyleConsts.padding.sidePadding,
    textTransform: "uppercase",
  },
  h2: {
    color: StyleConsts.colors.red,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2.25,
    paddingLeft: StyleConsts.padding.sidePadding,
  },
  h3: {
    color: StyleConsts.colors.h3Blue,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2,
    paddingLeft: StyleConsts.padding.sidePadding * 1.5,
  },
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    height: getSize(130, 130, 195, 260),
    width: Dimensions.get("window").width,
  },
  introParagraph: {
    color: StyleConsts.colors.mediumGrey,
    fontSize: StyleConsts.fontSize.em1 * 2,
    marginBottom: StyleConsts.fontSize.em1,
    paddingLeft: StyleConsts.padding.sidePadding,
  },
  learningObjective: {
    paddingBottom: StyleConsts.fontSize.em1,
    paddingTop: StyleConsts.fontSize.em1,
  },
  learningObjectiveBody: {
    backgroundColor: "rgba(255, 208, 91, 0.3)", // $secondary-yellow @ 30%
    paddingBottom: StyleConsts.fontSize.em1 * 2,
    paddingTop: StyleConsts.fontSize.em1 * 2,
  },
  learningObjectiveBodyText: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    textAlign: "center",
  },
  learningObjectiveHeader: {
    backgroundColor: StyleConsts.colors.yellow,
    paddingLeft: StyleConsts.padding.paragraphPadding,
  },
  learningObjectiveHeaderText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2.625,
  },
  list: {
    marginBottom: StyleConsts.fontSize.em1,
    paddingLeft: StyleConsts.padding.paragraphPadding * 1.5,
    paddingRight: StyleConsts.padding.paragraphPadding,
  },
  listBullet: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    marginRight: StyleConsts.fontSize.em1 / 2,
    textAlign: "right",
    // width: StyleConsts.padding.paragraphPadding * 1.5, //StyleConsts.fontSize.em1 * 5,
  },
  listItem: {
    flexDirection: "row",
  },
  listItemText: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
  },
  objective: {
    color: StyleConsts.colors.mediumGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    paddingLeft: StyleConsts.padding.objectivePadding,
    paddingRight: StyleConsts.padding.paragraphPadding,
  },
  objectivesIntro: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    paddingLeft: StyleConsts.padding.sidePadding,
  },
  paragraph: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    marginBottom: StyleConsts.fontSize.em1,
    paddingLeft: StyleConsts.padding.paragraphPadding,
    paddingRight: StyleConsts.padding.paragraphPadding,
  },
  quote: {
    flexDirection: "row",
    justifyContent: "center",
  },
  quoteAuthor: {
    color: StyleConsts.colors.navy,
    flex: 1,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
  },
  quoteAuthorWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  quoteBody: {
    color: StyleConsts.colors.navy,
    fontSize: StyleConsts.fontSize.em1 * 1.75,
    paddingTop: StyleConsts.fontSize.em1 * 1.75,
  },
  quotationMark: {
    color: StyleConsts.colors.teal,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 3.75,
  },
  stepBullet: {
    backgroundColor: StyleConsts.colors.darkGrey,
    borderRadius: StyleConsts.fontSize.em1 * 1.5,
    height: StyleConsts.fontSize.em1 * 3,
    marginRight: StyleConsts.fontSize.em1,
    width: StyleConsts.fontSize.em1 * 3,
  },
  stepBulletText: {
    color: StyleConsts.colors.white,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    marginTop: StyleConsts.fontSize.em1 / 2,
    textAlign: "center",
  },
  stepsBlock: {
    alignSelf: "center",
    backgroundColor: StyleConsts.colors.lightGrey,
    paddingLeft: StyleConsts.fontSize.em1 * 1.5,
    paddingRight: StyleConsts.fontSize.em1 * 1.5,
    width: "90%",
  },
  stepItemText: {
    color: StyleConsts.colors.darkGrey,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
  },
  stepItemTextWrapper: {
    marginRight: StyleConsts.fontSize.em1 * 0.8,
  },
  stepListItem: {
    flexDirection: "row",
    width: "90%",
  },
  stepsTitle: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2.25,
    textAlign: "center",
    paddingBottom: StyleConsts.fontSize.em1 * 2.25,
    paddingTop: StyleConsts.fontSize.em1 * 2.25,
  },
  subtitle: {
    color: StyleConsts.colors.mediumGrey,
    fontSize: StyleConsts.fontSize.em1 * 3,
    paddingBottom: 40,
    textAlign: "center",
  },
  title: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 3.5,
    textAlign: "center",
  },
  variableCaption: {
    fontSize: StyleConsts.fontSize.em1 * 1.25,
    padding: StyleConsts.fontSize.em1,
    textAlign: "center",
  },
  variableIcon: {
  },
  variableImage: {
    // flex: 1,
    height: getSize(60, 60, 90, 120),
    maxWidth: "50%",
    width: Dimensions.get("window").width,
  },
  variableSection: {
    alignItems: "center",
    flex: 1,
  },
  variableSectionRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  variableSectionsWrapper: {
    backgroundColor: StyleConsts.colors.lightGrey,
    paddingTop: StyleConsts.fontSize.em1,
  },
  variableSectionText: {
    fontSize: StyleConsts.fontSize.em1,
    textAlign: "center",
  },
  variableTitle: {
    backgroundColor: StyleConsts.colors.lightGrey,
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 1.5,
    paddingTop: StyleConsts.fontSize.em1 * 2,
    textAlign: "center",
  },
  videoCaption: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansItalic,
    fontSize: StyleConsts.fontSize.em1 * 1.25,
    paddingLeft: StyleConsts.padding.sidePadding,
    marginRight: StyleConsts.fontSize.em1,
    textAlign: "right",
  },
})
