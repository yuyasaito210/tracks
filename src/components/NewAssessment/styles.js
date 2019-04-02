import { StyleSheet, Dimensions } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

import StyleConsts from "/constants/styleConstants"

const x = Dimensions.get("window").width

function getInputWidth() {
  return (x - 40)
}

module.exports = StyleSheet.create({
  container: {
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
    marginTop: 0,
  },
  scrolledContainer: {
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
    marginTop: getSize(55, 55, 70, 90),
  },
  checkAnswers: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: StyleConsts.fontSize.em1,
  },
  checkAnswersButton: {
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 0,
    height: getSize(30, 30, 45, 60),
    backgroundColor: StyleConsts.colors.orange,
    justifyContent: "center",
    width: StyleConsts.startButtonWidth,
  },
  checkAnswersButtonText: {
    alignItems: "center",
    color: StyleConsts.colors.white,
    fontSize: getSize(16, 16, 24, 32),
    justifyContent: "center",
    textAlign: "center",
  },
  // LetsGetStarted
  getStarted: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 20,
  },
  headerView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 0,
  },
  header: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(20, 25, 27, 30),
    textAlign: "center",
  },
  instantFeedback: {
    marginBottom: StyleConsts.fontSize.em1,
  },
  instantFeedbackHeader: {
  },
  instantFeedbackHeaderText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2,
    textAlign: "center",
  },
  instantFeedbackBody: {
    backgroundColor: StyleConsts.colors.navy,
    paddingBottom: StyleConsts.fontSize.em1,
    paddingLeft: StyleConsts.fontSize.em1 * 1.8,
    paddingRight: StyleConsts.fontSize.em1 * 1.8,
    paddingTop: StyleConsts.fontSize.em1,
  },
  instantFeedbackBodyText: {
    color: StyleConsts.colors.white,
    fontSize: StyleConsts.fontSize.em1 * 2,
  },
  videoPlayerWrapper: {
    paddingHorizontal: 10,
    // left: 10,
    // right: 10
  },
  videoPlayer: {
    alignSelf: "stretch",
    width: Dimensions.get("window").width - 20,
    height: 200,
    backgroundColor: "black",
    marginVertical: 10
  },
  imageWrapper: {
    alignItems: "center"
  },
  image: {
    width: Dimensions.get("window").width,
    height: getSize(130, 130, 195, 260)
  },
  textWrapper: {
    paddingHorizontal: 23,
    paddingVertical: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  textHeader: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(15, 15, 30),
    marginBottom: 10
  },
  text: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(13, 13, 19, 26)
  },
  startedFooter: {
    padding: 10,
    marginTop: 10,
    backgroundColor: StyleConsts.colors.lightGrey
  },
  footerIconsWrapper: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    alignContent: "flex-end"
  },
  footerHeader: {
    textAlign: "center",
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 14, 21, 28)
  },
  footerIconWrapper: {
    padding: 5,
    alignItems: "center"
  },
  iconView: {
    backgroundColor: StyleConsts.colors.navy,
    padding: 10
  },
  icon: {
    width: x / 5,
    height: x / 5
  },
  footerText: {
    marginTop: 10,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(8, 8, 16, 20),
    color: StyleConsts.colors.navy,
    letterSpacing: 0,
    width: x / 5,
    textAlign: "center"
  },
  // BeforeYouBegin
  youTubeIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: StyleConsts.colors.teal,
    marginTop: -5
  },
  youTubeIconView: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: getSize(80, 80, 120, 160),
    height: getSize(60, 60, 120, 120)
  },
  youTubeIcon: {
    width: getSize(60, 60, 90, 120),
    height: getSize(40, 40, 60, 80)
  },
  instructionVideoText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(20, 20, 30, 40)
  },
  instructionWrapper: {
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  instructionImage: {
    width: getSize(90, 90, 135, 180),
    height: getSize(90, 90, 135, 180)
  },
  footerStepsWrapper: {
    padding: 5
  },
  footerStep: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },
  stepBackground: {
    width: getSize(40, 40, 60, 80),
    height: getSize(40, 40, 60, 80),
    borderRadius: 100,
    backgroundColor: StyleConsts.colors.navy,
    justifyContent: "center",
    alignItems: "center"
  },
  stepNumber: {
    color: StyleConsts.colors.lightGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(15, 15, 30)
  },
  stepTextWrapper: {
    flex: 1,
    flexWrap: "wrap",
    paddingHorizontal: 10
  },
  stepText: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 14, 18, 24)
  },
  fieldLabelContainer: {
    flex: 1,
    justifyContent: "center"
  },
  fieldContainer: {
    flex: 2,
    alignItems: "flex-start"
  },
  datepickerContainer: {
    height: getSize(45, 45, 70, 90),
    justifyContent: "center"
  },
  datepickerInput: {
    borderWidth: 0,
    alignItems: "flex-start"
  },
  datepickerText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28)
  },
  datepickerPHText: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28)
  },
  // Calculate
  genderWrapper: {
    marginTop: 5
  },
  subHeader: {
    alignSelf: "center",
    color: StyleConsts.colors.tiny,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    paddingHorizontal: 10,
    paddingBottom: getSize(2, 2, 5, 7),
    textAlign: "center",
  },
  smallHeaderText: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(14, 14, 21, 28),
    marginTop: 10,
    textAlign: "center",
  },
  smallHeaderTextWrapper: {
    paddingHorizontal: 10,
  },
  genderSelectWrapper: {
    backgroundColor: StyleConsts.colors.lightGrey,
    marginTop: 5,
    padding: 7,
    paddingHorizontal: 60,
  },
  matchingAnswerText: {
    color: StyleConsts.colors.navy,
    fontSize: StyleConsts.fontSize.em1 * 2,
  },
  matchingAnswerTextWrapper: {
    flex: 4,
  },
  matchingAnswerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: StyleConsts.fontSize.em1,
  },
  matchingCircle: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.navy,
    borderRadius: StyleConsts.fontSize.em1 * 2,
    height: StyleConsts.fontSize.em1 * 4,
    justifyContent: "center",
    width: StyleConsts.fontSize.em1 * 4,
  },
  matchingCircleNoText: {
    backgroundColor: StyleConsts.colors.white,
  },
  matchingCircleSelected: {
    backgroundColor: StyleConsts.colors.teal,
  },
  matchingCircleUnselected: {
    backgroundColor: StyleConsts.colors.navy,
  },
  matchingCircleText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2,
  },
  matchingCircleWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  matchingPossibleAnswersHeader: {
    paddingTop: StyleConsts.fontSize.em1 / 2,
    paddingBottom: StyleConsts.fontSize.em1 / 2,
  },
  matchingPossibleAnswersHeaderText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: StyleConsts.fontSize.em1 * 2,
    textAlign: "center",
  },
  matchingPrompt: {
    flexDirection: "row",
    paddingLeft: StyleConsts.padding.sidePadding,
    paddingRight: StyleConsts.padding.sidePadding,
  },
  matchingPrompts: {
    marginTop: 5,
    backgroundColor: StyleConsts.colors.lightGrey,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingTop: 7,
  },
  matchingPromptItem: {
  },
  matchingPromptSelected: {
    color: StyleConsts.colors.white,
  },
  matchingPromptUnselected: {
    color: StyleConsts.colors.grey,
  },
  matchingPromptWrapper: {
    flex: 3,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    minHeight: StyleConsts.fontSize.em1 * 4,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  matchingPromptWrapperSelected: {
    backgroundColor: StyleConsts.colors.navy,
  },
  matchingPromptWrapperUnselected: {
    backgroundColor: StyleConsts.colors.white,
  },
  MCWrapper: {
    marginTop: 5,
  },
  MCAnswers: {
    alignItems: "center",
    marginTop: 5,
    backgroundColor: StyleConsts.colors.lightGrey,
    padding: 7,
    paddingHorizontal: 60,
  },
  MCItem: {
    width: StyleConsts.MCButtonWidth,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  MCItemColor: {
    backgroundColor: StyleConsts.colors.white,
  },
  MCItemSelectedColor: {
    backgroundColor: StyleConsts.colors.teal,
  },
  MCItemTextColor: {
    color: StyleConsts.colors.grey,
  },
  MCItemSelectedTextColor: {
    color: StyleConsts.colors.white,
  },
  MCAnswersSubheader: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.navy,
    fontSize: getSize(13, 13, 18, 22),
    marginBottom: 10
  },
  MCItemText: {
    textAlign: "center",
    fontSize: getSize(13, 13, 20, 26),
    paddingVertical: getSize(1, 1, 3, 4)
  },
  personDataWrapper: {
    padding: 10
  },
  personData: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: StyleConsts.colors.lightGrey,
    padding: 5
  },
  dataTitle: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 14, 28)
  },
  dataValue: {
    marginLeft: 50,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 28)
  },
  inputTitle: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(14, 14, 21, 28),
    alignSelf: "stretch"
  },
  input: {
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28),
    height: getSize(45, 45, 70, 90),
    width: getInputWidth(),
    color: StyleConsts.colors.navy,
    padding: 0
  },
  teal: {
    color: StyleConsts.colors.teal
  },
  grey: {
    color: StyleConsts.colors.mediumGrey
  },
  tabsContainerStyle: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: StyleConsts.colors.teal,
    borderWidth: 1
  },
  tabStyle: {
    borderWidth: 0,
    backgroundColor: "transparent"
  },
  tabTextStyle: {
    color: StyleConsts.colors.mediumGrey
  },
  activeTabStyle: {
    backgroundColor: StyleConsts.colors.teal
  },
  activeTabTextStyle: {
    color: StyleConsts.colors.white
  },
  calculateFooter: {
    bottom: 0,
    left: 0,
    right: 0
  },
  calculateFooterText: {
    color: StyleConsts.colors.mediumGrey,
    textAlign: "center",
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 15, 20),
    lineHeight: 18
  },
  slider: {
    marginTop: 10,
    marginBottom: 20
  },
  sliderContainer: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: StyleConsts.colors.lightGrey
  },
  sliderQuestion: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 28),
    fontFamily: StyleConsts.fontFamily.openSansBold,
    textAlign: "center",
    marginBottom: 10
  },
  track: {
    height: getSize(5, 5, 10),
    borderRadius: 5,
    backgroundColor: StyleConsts.colors.white
  },
  thumb: {
    width: getSize(15, 15, 22, 30),
    height: getSize(15, 15, 22, 30),
    borderRadius: getSize(15, 15, 22, 30) / 2,
    backgroundColor: StyleConsts.colors.teal,
    position: "absolute",
    top: 12
  },
  scale: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scaleItem: {
    color: StyleConsts.colors.darkGrey,
    fontSize: getSize(14, 14, 21, 28),
    fontFamily: StyleConsts.fontFamily.openSansItalic
  },
  scaleDescription: {
    fontSize: getSize(12, 12, 19, 24)
  },
  // Results
  modalView: {
    zIndex: 1,
    borderWidth: 1,
    borderColor: StyleConsts.colors.mediumGrey,
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    backgroundColor: "rgba(240,240,240,.99)"
  },
  estimatedWrapper: {
    marginTop: 0,
    backgroundColor: StyleConsts.colors.orange,
    padding: 10,
    paddingHorizontal: 60
  },
  infoButton: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 10,
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 0,
    width: null,
    height: null
  },
  infoIcon: {
    color: StyleConsts.colors.white
  },
  estimatedNumber: {
    alignSelf: "center",
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(62, 62, 124),
    alignItems: "center",
    color: StyleConsts.colors.white
  },
  estimatedText: {
    fontSize: getSize(12, 12, 18, 24)
  },
  estimatedFooterText: {
    alignSelf: "center",
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(24, 24, 32, 48),
    color: StyleConsts.colors.white
  },
  infoWrapper: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    top: -50,
    borderColor: StyleConsts.colors.mediumGrey,
    backgroundColor: "rgba(240,240,240,.99)"
  },
  closeButton: {
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 0,
    alignSelf: "flex-end"
  },
  closeIcon: {
    color: StyleConsts.colors.mediumGrey
  },
  infoHeader: {
    marginTop: 15,
    marginBottom: 35,
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(25, 25, 50)
  },
  infoText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(17, 17, 21, 34)
  },
  VOMax: {
    textAlign: "center",
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(17, 17, 24, 34)
  },
  infoFooterText: {
    marginTop: 20,
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(25, 25, 35, 50)
  },
  // feedback
  feedbackWrapper: {
    paddingVertical: 5
  },
  feedbackText: {
    fontSize: getSize(14, 14, 18, 24)
  },
  displayText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(14, 14, 21, 28),
    textAlign: "center"
  },
  feedback: {
    paddingHorizontal: 10
  },
  resultParagraph: {
    fontSize: getSize(13, 13, 19, 26),
    color: StyleConsts.colors.mediumGrey,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  accordionTable: {
    paddingTop: 20
  },
  tableRow: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: StyleConsts.colors.lightGrey,
    paddingVertical: 3,
    marginHorizontal: 15
  },
  tableResults: {
    fontSize: getSize(20, 20, 30, 40),
    color: StyleConsts.colors.black,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: StyleConsts.fontFamily.openSansBold
  },
  tableText: {
    textAlign: "center",
    color: StyleConsts.colors.mediumGrey,
    fontSize: getSize(11, 11, 16, 22)
  },
  rowDescText: {
    fontSize: getSize(11, 11, 16, 22)
  },
  rowDesc: {
    flex: 1,
    justifyContent: "center"
  },
  rowData: {
    flex: 1,
    justifyContent: "center"
  },
  tableRowHeader: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: StyleConsts.colors.lightGrey,
    paddingHorizontal: 15
  },
  tableTextHeader: {
    textAlign: "center",
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.black,
    fontSize: getSize(11, 11, 16, 22)
  },
  userInputsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: StyleConsts.colors.white,
    marginTop: 10
  },
  UITitle: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.black,
    fontSize: getSize(14, 14, 28),
    textAlign: "center",
    marginBottom: 20
  },
  // user inputs
  UIItem: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 0,
    borderBottomWidth: 2,
    borderColor: StyleConsts.colors.lightGrey,
    paddingVertical: getSize(5, 5, 8, 10)
  },
  UIParamContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: 5
  },
  UIParam: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    color: StyleConsts.colors.black,
    fontSize: getSize(14, 14, 18, 28)
  },
  UIValueContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: getSize(5, 5, 10, 15)
  },
  UIValue: {
    fontSize: getSize(14, 14, 18, 28),
    fontFamily: StyleConsts.fontFamily.openSansLight,
    color: StyleConsts.colors.mediumGrey
  }
})
