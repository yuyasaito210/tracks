import { StyleSheet } from 'react-native'
import StyleConsts from '/constants/styleConstants'
import { getSize } from '/lib/helpers/styleSizes'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  headerView: {
    padding: 10,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(25, 25, 35, 50)
  },
  instructionText: {
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(15, 15, 22, 30),
    paddingHorizontal: 10,
    color: StyleConsts.colors.navy
  },
  dragAndDropWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  importantView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  importantText: {
    fontSize: getSize(10, 10, 15, 20),
    paddingHorizontal: 35
  },
  dragAndDropViews: {
    flex: 1
  },
  assessmentRow: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 2,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center'
  },
  assessmentRowAndroid: {
    height: 35,
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 5,
    padding: 2,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center'
  },
  dropZoneIndex: {
    padding: 5,
    color: '#979B9C',
    alignSelf: 'center',
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(16, 16, 24, 32)
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  icon: {
    color: StyleConsts.colors.white
  },
  assessmentTextWrapper: {
    flex: 4,
    backgroundColor: StyleConsts.colors.white
  },
  padding: {
    padding: 3
  },
  paddingAndroid: {
    paddingHorizontal: 3
  },
  assessmentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  assessmentInfoText: {
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(8, 8, 13, 16),
    color: StyleConsts.colors.mediumGrey
  },
  infoIcon: {
    color: '#111',
    position: 'absolute',
    top: 0,
    right: 0
  },
  activeItemStyle: {
    borderRadius: 5
  },
  activeDropZone: {
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: StyleConsts.colors.navy,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: StyleConsts.colors.navy
  }
})
