import { Dimensions, Platform } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

function getButtonWidth() {
  return (screenWidth * 0.7)
}

function getMCButtonWidth() {
  return (screenWidth - 40)
}

export default {
  fontFamily: {
    openSans: "OpenSans",
    openSansLight: "OpenSans-Light",
    openSansBold: "OpenSans-Bold",
    openSansItalic: "OpenSans-Italic",
  },
  fontSize: {
    em1: getSize(8, 10, 12, 16),
    // em1_5: getSize(12, 15, 18, 24),
    // em1_75: getSize(10, 12, 14, 16),
    // em2: getSize(11, 13, 16, 18),
    // em2_625: getSize(12, 14, 18, 20),
    // em3: getSize(16, 20, 24, 26),
    // em3_5: getSize(20, 25, 27, 30),
    // em3_75: getSize(22, 27, 29, 32),
  },
  padding: {
    objectivePadding: getSize(28, 32, 38, 42),
    paragraphPadding: getSize(22, 25, 30, 34),
    sidePadding: getSize(10, 12, 14, 16),
  },
  startButtonWidth: getButtonWidth(),
  MCButtonWidth: getMCButtonWidth(),
  screenWidth,
  screenHeight: (Platform.OS === "ios") ? screenHeight : screenHeight + 50,
  screenHeightWithHeaderAndFooter: (Platform.OS === "ios") ? screenHeight - 102 : screenHeight - 79,
  screenHeightWithHeaderAndFooterAndScroll: (Platform.OS === "ios") ? screenHeight - 102 : screenHeight - 150,
  tabBarHeight: getSize(50, 50, 75, 100),
  colors: {
    white: "#ffffff",
    black: "#000000",
    navy: "#2F3C47",
    teal: "#17AB9F",
    green: "#93CD8E",
    yellow: "#FFD05B",
    red: "#EA526F",
    blue: "#BAAC7",
    purple: "#B377BE",
    orange: "#F06B3D",
    casablanca: "#FFD05B",
    darkGrey: "#575956",
    mediumGrey: "#979B9C",
    lightGrey: "#EFEFEF",
    buttonGrey: "#45515B",
    buttonGreyClicked: "#3a444c",
    h3Blue: "#7AA9C6",
  },
}
