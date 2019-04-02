import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getSize(55, 55, 70, 90)
  },
  connectView: {
    flexDirection: 'column',
    padding: 20,
    paddingHorizontal: 40,
    alignItems: 'center'
  },
  column: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  connectToBearfaceText: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(15, 15, 22, 30)
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: getSize(30, 30, 45, 60),
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 20,
    backgroundColor: StyleConsts.colors.navy
  },
  connectButtonView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  connectButtonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(15, 15, 22, 30),
    alignSelf: 'center'
  },
  personData: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: StyleConsts.colors.lightGrey,
    padding: 5
  },
  inputTitle: {
    flex: 1,
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(14, 14, 21, 28)
  },
  input: {
    flex: 3,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: 14,
    color: StyleConsts.colors.navy,
    borderBottomWidth: 0
  },
  columnWrapper: {
    marginTop: 30
  },
  headerView: {
    padding: 10,
    backgroundColor: StyleConsts.colors.lightGrey
  },
  headerText: {
    fontFamily: StyleConsts.fontFamily.openSans,
    color: StyleConsts.colors.darkGrey,
    fontSize: getSize(16, 16, 24, 32)
  },
  bearfaceWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  notificationsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  notificationsView: {
    flexDirection: 'row',
    padding: 5,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#EFEFEF'
  },
  bearfaceText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold
  }
})
