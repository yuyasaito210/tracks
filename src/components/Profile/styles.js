import { StyleSheet, Dimensions } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

const x = Dimensions.get('window').width

function getmultipleInputsItemWidth () {
  return (x - 100) / 3
}
module.exports = StyleSheet.create({
  profileContainer: {
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll
  },
  profileHeaderWrapper: {
    flex: 1,
    backgroundColor: StyleConsts.colors.teal,
    padding: 25,
    alignItems: 'center'
  },
  profileIcon: {
    color: StyleConsts.colors.white
  },
  profileSettingsWrapper: {
    padding: 10
  },
  fieldLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldContainer: {
    flex: 2,
    borderBottomWidth: 0,
    borderColor: StyleConsts.colors.lightGrey,
    marginBottom: 0
  },
  multipleInputsItem: {
    width: getmultipleInputsItemWidth()
  },
  personData: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: StyleConsts.colors.lightGrey,
    padding: 5
  },
  dataTitle: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: 14
  },
  inputTitle: {
    flex: 1,
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: 14
  },
  input: {
    flex: 1,
    height: getSize(40, 45, 60, 80),
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(16, 16, 24, 32),
    color: StyleConsts.colors.navy,
    borderBottomWidth: 0,
    borderColor: StyleConsts.colors.white
  },
  datepickerContainer: {
    height: getSize(40, 40, 60, 80),
    justifyContent: 'center'
  },
  datepickerInput: {
    borderWidth: 0,
    alignItems: 'flex-start'
  },
  datepickerText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28)
  },
  datepickerPHText: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28)
  },
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: StyleConsts.colors.teal,
    borderWidth: 1
  },
  tabStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  tabTextStyle: {
    color: StyleConsts.colors.mediumGrey
  },
  activeTabStyle: {
    backgroundColor: StyleConsts.colors.teal
  },
  activeTabTextStyle: {
    color: StyleConsts.colors.white
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: StyleConsts.colors.teal,
    borderColor: StyleConsts.colors.teal,
    flex: 1,
    padding: 5
  }
})
