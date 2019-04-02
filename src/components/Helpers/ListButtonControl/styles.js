import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  listViewControl: {
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: getSize(40, 60, 75, 90)
  },
  listViewControlContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  listViewControlIconContainer: {
    justifyContent: 'center',
    paddingHorizontal: 3
  },
  listViewControlIcon: {
    color: 'white'
  },
  listViewControlTextContainer: {
    flex: 4,
    marginVertical: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  listViewControlText: {
    marginLeft: 15,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(16, 16, 24, 32)
  },
  icon: {
    marginRight: 15
  },
  tealBackgroundColor: {
    backgroundColor: StyleConsts.colors.teal
  },
  lightGreyBackgroundColor: {
    backgroundColor: StyleConsts.colors.lightGrey
  },
  tealColor: {
    color: StyleConsts.colors.teal
  },
  whiteColor: {
    color: StyleConsts.colors.white
  },
  darkGreyColor: {
    color: StyleConsts.colors.darkGrey
  }
})
