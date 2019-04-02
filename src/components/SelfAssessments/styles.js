import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll
  },
  buttonWrapper: {
    flexDirection: 'column',
    zIndex: 2
  },
  input: {
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
    backgroundColor: StyleConsts.colors.white
  },
  footer: {
    marginTop: 20
  },
  footerText: {
    color: StyleConsts.colors.mediumGrey,
    textAlign: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 15, 20),
    lineHeight: 18,
    paddingHorizontal: 40
  },
  listView: {
    marginTop: 0,
    padding: 0,
    marginBottom: 30
  },
  assessmentButton: {
    flexDirection: 'row',
    height: null,
    marginBottom: 0,
    borderWidth: 0,
    borderRadius: 0
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkIcon: {
    color: StyleConsts.colors.green
  },
  circleIcon: {
    color: StyleConsts.colors.darkGrey
  },
  lockIcon: {
    color: StyleConsts.colors.darkGrey
  },
  leftIcon: {
    color: StyleConsts.colors.white
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 30,
    height: getSize(30, 30, 60),
    backgroundColor: StyleConsts.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.mediumGrey
  },
  leftSide: {
    flexDirection: 'row',
    marginLeft: 10
  },
  rowTitle: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(12, 12, 20, 24)
  },
  rightSide: {
    flexDirection: 'row'
  },
  data: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(12, 12, 20, 24),
    marginRight: 10
  },
  rightIcon: {

  },
  itemContainer: {
    marginTop: 55
  },
  itemWrapper: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  beginNewButton: {
    borderWidth: 0,
    borderRadius: 0,
    height: 30,
    backgroundColor: StyleConsts.colors.orange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  beginNewButtonText: {
    color: StyleConsts.colors.white,
    textAlign: 'center',
    fontSize: 16
  },
  historyHeader: {
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: 25,
    color: StyleConsts.colors.navy
  },
  infoView: {

  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 30,
    backgroundColor: StyleConsts.colors.teal
  },
  infoHeaderText: {
    color: StyleConsts.colors.white,
    fontSize: 12
  },
  infoList: {
    flexDirection: 'row'
  },
  iconInfo: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center'
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.lightGrey
  },
  searchBarContainer: {
    padding: 5,
    backgroundColor: StyleConsts.colors.mediumGrey,
    flexDirection: 'row',
    height: getSize(35, 45, 65, 85)
  },
  searchInput: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 5
  },
  searchBar: {
    flex: 1,
    height: getSize(35, 45, 65, 85),
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 16, 25, 40),
    color: StyleConsts.colors.navy
  },
  searchIconView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  searchImage: {
    height: getSize(15, 15, 22, 30),
    width: getSize(15, 15, 22, 30),
    marginRight: 10
  },
  searchText: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 16, 25, 40)
  }
})
