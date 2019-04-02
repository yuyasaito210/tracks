import { StyleSheet, Platform } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

function checkOS (margin) {
  return Platform.OS === 'ios' ? margin : 0
}

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: checkOS(30),
    backgroundColor: StyleConsts.colors.white,
    padding: getSize(20, 40, 40, 60),
    paddingHorizontal: 20,
    height: StyleConsts.screenHeight - checkOS(30)
  }
})
