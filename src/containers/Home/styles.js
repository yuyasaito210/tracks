import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getSize(55, 55, 70, 90),
    flexDirection: 'column',
    height: StyleConsts.screenHeightWithHeaderAndFooter,
    backgroundColor: StyleConsts.colors.white
  }
})
