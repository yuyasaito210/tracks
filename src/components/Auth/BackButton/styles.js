import {
  StyleSheet
} from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  backButton: {
    borderWidth: 0,
    marginBottom: 0,
    position: 'absolute',
    top: getSize(15, 15, 22, 30),
    left: getSize(15, 15, 22, 30)
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icon: {
    color: StyleConsts.colors.navy
  },
  buttonText: {
    color: StyleConsts.colors.navy,
    fontSize: getSize(16, 16, 24, 32),
    fontFamily: StyleConsts.fontFamily.openSansLight
  }
})
