import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  tabBarContainer: {
    alignItems: "center",
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    height: getSize(60, 60, 90, 120),
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    zIndex: 5,
  },
  tabBar: {
    alignItems: "center",
    backgroundColor: "rgba(245,245,245, .7)",
    borderTopColor: StyleConsts.colors.lightGrey,
    borderTopWidth: 2,
    bottom: 0,
    flexDirection: "row",
    height: StyleConsts.tabBarHeight,
    justifyContent: "space-between",
    left: 0,
    position: "absolute",
    right: 0,
  },
  tabButtons: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabBarIcon: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.navy,
    borderRadius: getSize(30, 30, 45, 60),
    height: getSize(60, 60, 90, 120),
    justifyContent: "center",
    marginTop: 15,
    paddingBottom: 5,
    width: getSize(60, 60, 90, 120),
  },
  tabbarButton: {
    flex: 1,
  },
  tabbarButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  tabbarButtonIconContainer: {
    alignItems: "flex-end",
    flex: 1,
  },
  allowedButton: {
    color: StyleConsts.colors.orange,
  },
  buttonIcon: {
    color: StyleConsts.colors.mediumGrey,
  },
  buttonText: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(20, 20, 30, 40),
  },
  buttonTextContainer: {
    flex: 3,
  },
  guidedLearningButtonIcon: {
    color: StyleConsts.colors.white,
  },
  guidedLearningButtonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 15, 20),
  },
  rotatedIcon180: {
    transform: [{ rotate: "180deg" }],
  },
  tabBarGuidedLearningButton: {
    flex: 1,
  },
  tabBarGuidedLearningButtons: {
    alignItems: "center",
    backgroundColor: StyleConsts.colors.teal,
    flex: 2,
    flexDirection: "row",
    height: getSize(60, 60, 90, 120),
    justifyContent: "space-between",
  },
  tabBarGuidedLearningButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
})
