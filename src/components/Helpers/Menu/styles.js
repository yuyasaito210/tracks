import { StyleSheet, Dimensions } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

const x = Dimensions.get('window').width
const menuWidth = x * 0.4
module.exports = StyleSheet.create({
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: menuWidth,
    backgroundColor: StyleConsts.colors.teal,
    flexDirection: 'column',
    alignItems: 'center'
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 5
  },
  icon: {
    color: StyleConsts.colors.white
  },
  welcomeWrapper: {
    marginTop: 40,
    alignItems: 'center'
  },
  header: {
    color: StyleConsts.colors.white,
    fontSize: getSize(14, 16, 18, 20),
    fontFamily: StyleConsts.fontFamily.openSans,
    fontWeight: '800'
  },
  profileIcon: {
    color: StyleConsts.colors.white,
    marginTop: 15
  },
  profileName: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 16, 18, 20),
    marginTop: 5
  },
  buttonWrapper: {
    position: 'relative',
    flexDirection: 'column'
  },
  buttonHelper: {
    height: getSize(30, 41, 80, 100),
    marginTop: 21
  },
  button: {
    flexDirection: 'row',
    marginBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'rgba(239, 239, 239, 0.1)',
    height: getSize(20, 30, 45, 60),
    position: 'relative',
    zIndex: 1,
    width: menuWidth
  },
  buttonIcon: {
    color: StyleConsts.colors.white,
    padding: 5
  },
  buttonText: {
    color: StyleConsts.colors.white,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(14, 16, 20, 24),
    marginLeft: 5
  },
  iconBadge: {
    position: 'absolute',
    top: -10,
    right: 3,
    width: 23,
    height: 23,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StyleConsts.colors.red
  }
})
