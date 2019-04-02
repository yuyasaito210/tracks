import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const wrapper = {
  alignItems: "center",
  borderWidth: 0,
  borderRadius: 0,
  flexDirection: "column",
  height: getSize(160, 160, 240, 320),
  justifyContent: "center",
  margin: 20,
  width: StyleConsts.screenWidth * 0.4,
}

module.exports = StyleSheet.create({
  activityRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  activityWrapper: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  activityDanger: {
    color: StyleConsts.colors.red,
  },
  activityNumber: {
    color: StyleConsts.colors.darkGrey,
    fontSize: getSize(26, 26, 34, 45),
    fontWeight: "bold",
  },
  activityText: {
    color: StyleConsts.colors.darkGrey,
    fontSize: getSize(14, 14, 21, 28),
  },
  container: {
    flex: 1,
  },
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dataInfo: {
    marginTop: 15,
    backgroundColor: StyleConsts.colors.orange,
    height: getSize(70, 70, 110, 140),
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconBadge: {
    backgroundColor: StyleConsts.colors.red,
    height: getSize(30, 30, 45, 60),
    right: 10,
    top: 10,
    width: getSize(30, 30, 45, 60),
  },
  infoText: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  announcementsWrapper: {
    ...wrapper,
    backgroundColor: StyleConsts.colors.teal,
  },
  assignmentsWrapper: {
    ...wrapper,
    backgroundColor: StyleConsts.colors.navy,
  },
  assessmentsWrapper: {
    ...wrapper,
    backgroundColor: StyleConsts.colors.yellow,
  },
})
