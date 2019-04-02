import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: getSize(55, 55, 70, 90),
    backgroundColor: StyleConsts.colors.white
  }
})
