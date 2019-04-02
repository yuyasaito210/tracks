import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  itemContainer: {
    height: StyleConsts.screenHeightWithHeaderAndFooterAndScroll
  },
  itemWrapper: {
    paddingTop: getSize(20, 20, 50, 50),
    paddingBottom: 10,
    paddingHorizontal: 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  beginNewButton: {
    borderWidth: 0,
    borderRadius: 0,
    height: getSize(30, 30, 45, 60),
    backgroundColor: StyleConsts.colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    width: StyleConsts.startButtonWidth
  },
  beginNewButtonText: {
    color: StyleConsts.colors.white,
    fontSize: getSize(16, 16, 24, 32),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  historyHeader: {
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(25, 25, 35, 50),
    color: StyleConsts.colors.navy,
    marginTop: 5
  },
  infoHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: StyleConsts.colors.teal
  },
  headerHistoryRowText: {
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: getSize(12, 12, 18, 24),
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSansBold
  },
  infoHeaderText: {
    color: StyleConsts.colors.white,
    fontSize: getSize(12, 12, 18, 24)
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
    alignItems: 'center'
  },
  attemptRow: {
    flex: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: StyleConsts.colors.lightGrey
  },
  iconWrapper: {
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
    flex: 1
  },
  textWrapper: {
    flex: 3,
    justifyContent: 'center'
  },
  historyRowText: {
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: getSize(12, 12, 18, 24),
    color: StyleConsts.colors.mediumGrey
  },
  footer: {
    marginTop: 20,
    marginBottom: 20
  },
  footerText: {
    color: StyleConsts.colors.mediumGrey,
    textAlign: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 15, 20),
    lineHeight: 18,
    paddingHorizontal: 40
  }
})
