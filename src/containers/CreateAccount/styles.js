import { StyleSheet, Platform } from 'react-native'

import StyleConsts from '/constants/styleConstants'

function checkOS (margin) {
  return Platform.OS === 'ios' ? margin : 0
}

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: checkOS(30),
    backgroundColor: StyleConsts.colors.white,
    padding: 40,
    paddingLeft: 40,
    paddingRight: 40,
    height: StyleConsts.screenHeight - checkOS(30)
  }
})
