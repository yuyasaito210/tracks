import { StyleSheet } from "react-native"
import { getSize } from "/lib/helpers/styleSizes"

import StyleConsts from "/constants/styleConstants"

module.exports = StyleSheet.create({
  container: {
    backgroundColor: StyleConsts.colors.navy,
    flex: 1,
    flexDirection: "column",
    height: StyleConsts.screenHeight,
    justifyContent: "center",
    padding: 30,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 0,
  },
  forgotPassword: {
    alignSelf: "center",
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 15, 20),
    marginTop: 5,
  },
  buttonText: {
    alignSelf: "center",
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(18, 18, 24, 36),
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: StyleConsts.colors.buttonGrey,
    borderRadius: 0,
    borderWidth: 0,
    height: getSize(35, 35, 50, 70),
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 100,
  },
})
