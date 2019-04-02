import { StyleSheet, Platform } from "react-native"

import StyleConsts from "/constants/styleConstants"

function checkOS(margin) {
  return Platform.OS === "ios" ? margin : 0
}

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
})
