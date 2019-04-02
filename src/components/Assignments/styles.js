import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const headerFontSize = getSize(24, 24, 32, 40)
const headerPadding = 10
module.exports = StyleSheet.create({
  assignmentButton: {
    flexDirection: "row",
    marginBottom: 10,
  },
  assignmentName: {
    color: StyleConsts.colors.mediumGrey,
  },
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll,
  },
  dueDate: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dueDateText: {
    color: StyleConsts.colors.mediumGrey,
  },
  headerText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(24, 24, 32, 43),
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  leftSide: {
    flex: 2,
  },
  noAssignmentsText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 22, 32),
    marginTop: 10,
    textAlign: "center",
  },
  pastAssignmentButton: {
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.mediumGrey,
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    paddingTop: 3,
  },
  pastAssignmentDateText: {
    color: StyleConsts.colors.mediumGrey,
    flex: 1,
    paddingRight: 10,
    textAlign: "right",
  },
  pastAssignmentGrade: {
    flex: 2,
    justifyContent: "center",
  },
  pastAssignmentGradeText: {
    flex: 1,
    paddingRight: 10,
    textAlign: "right",
  },
  pastAssignmentIcon: {
    marginTop: -3,
  },
  pastAssignmentsText: {
    fontSize: headerFontSize,
  },
  pastAssignmentTitle: {
    flex: 7,
    justifyContent: "center",
  },
  rightSide: {
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.mediumGrey,
    flex: 5,
    paddingBottom: 5,
  },
  rowStatus: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(14, 14, 22, 32),
  },
  rowStatusIncomplete: {
    color: StyleConsts.colors.red,
    fontWeight: "bold",
  },
  seeMoreButton: {
    color: StyleConsts.colors.darkGrey,
    fontWeight: "bold",
    paddingBottom: StyleConsts.fontSize.em1,
    paddingTop: StyleConsts.fontSize.em1,
    textAlign: "center",
  },
  toDo: {
    backgroundColor: StyleConsts.colors.teal,
    flex: 5,
    paddingBottom: headerPadding,
    paddingTop: headerPadding,
  },
  toDoText: {
    color: StyleConsts.colors.white,
    fontSize: headerFontSize,
    paddingLeft: headerPadding,
  },
  toDoCount: {
    backgroundColor: StyleConsts.colors.red,
    flex: 1,
    paddingBottom: headerPadding,
    paddingTop: headerPadding,
  },
  toDoCountText: {
    color: StyleConsts.colors.white,
    fontSize: headerFontSize,
    textAlign: "center",
  },
  toDoRow: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
  upcomingAssignmentRows: {
  },
  circleIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  closedIcon: {
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
  rightArrowIcon: {
    color: StyleConsts.colors.mediumGrey,
    marginTop: -2,
    transform: [{ rotate: "180deg" }],
  },
})
