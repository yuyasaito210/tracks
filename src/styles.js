import { StyleSheet, Platform } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  mainSceneStyle: {
    backgroundColor: StyleConsts.colors.navy
  },
  navBarStyle: {
    flex: 1,
    height: getSize(55, 55, 70, 90),
    backgroundColor: StyleConsts.colors.navy
  },
  navBarBackButton: {
    color: '#fff',
    fontSize: 14,
    width: getSize(180, 180, 240, 360)
  },
  navBarTitle: {
    color: '#fff',
    fontSize: getSize(14, 14, 20, 28),
    width: getSize(180, 180, 240, 360),
    fontFamily: StyleConsts.fontFamily.openSansBold,
    marginTop: 2
  },
  homeNavBarTitle: {
    fontFamily: StyleConsts.fontFamily.openSansLight,
    color: StyleConsts.colors.white,
    fontSize: 22,
    letterSpacing: 0,
    marginTop: (Platform.OS === 'ios') ? 0 : 7
  },
  button: {
    paddingBottom: 0,
    height: getSize(24, 24, 36, 48),
    width: getSize(180, 180, 240, 360),
    borderWidth: 0,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  backButtonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 14, 20, 28),
    marginLeft: -2
  },
  buttonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(10, 10, 18, 20),
    marginLeft: -2
  },
  menuIcon: {
    color: StyleConsts.colors.white
  },
  iconBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 16,
    width: 23,
    height: 23,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StyleConsts.colors.red
  },
  badgeNumber: {
    color: '#fff'
  },
  titleWrapper: {
    marginTop: 0
  }
})
