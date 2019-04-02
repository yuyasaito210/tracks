import { StyleSheet } from "react-native"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: getSize(50, 50, 80, 120),
    marginTop: getSize(55, 55, 70, 90),
    //  justifyContent: "space-between"
  },
  columnWrapper: {
    marginBottom: 100,
  },
  headerView: {
    padding: 10,
    backgroundColor: StyleConsts.colors.lightGrey
  },
  headerText: {
    fontSize: getSize(12, 12, 18, 24),
    fontFamily: StyleConsts.fontFamily.openSans,
    color: StyleConsts.colors.darkGrey
  },
  bearfaceWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: getSize(5, 5, 8, 10)
  },
  bearfaceIconView: {
    padding: getSize(5, 5, 8, 10),
    paddingHorizontal: 10
  },
  bearfaceButtonWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#EFEFEF",
    paddingVertical: getSize(2, 2, 4, 6)
  },
  bearfaceButtonView: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center"
  },
  notificationsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 10
  },
  notificationsView: {
    flexDirection: "row",
    padding: 5,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#EFEFEF"
  },
  button: {
    backgroundColor: StyleConsts.colors.lightGrey,
    borderWidth: 0,
    borderRadius: 0,
    alignItems: "center",
    height: getSize(40, 40, 80),
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonText: {
    textAlign: "center",
    fontFamily: StyleConsts.fontFamily.openSans,
    fontSize: getSize(16, 16, 32),
    color: StyleConsts.colors.teal
  },
  bearfaceText: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(12, 12, 18, 24)
  },
  rotatedIcon180: {
    transform: [{ rotate: "180deg" }],
    color: StyleConsts.colors.mediumGrey,
    marginRight: 10
  },
  // PrivacyPolicyView
  privacyContainer: {
    padding: 20
  },
  privacyAndCookieNotice: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSansItalic,
    fontSize: getSize(10, 10, 15, 18)
  },
  privacyView: {
    marginBottom: 10
  },
  privacyHeaderView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: StyleConsts.colors.lightGrey,
    padding: 5,
    marginVertical: 5
  },
  privacyHeader: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(18, 18, 27, 36)
  },
  privacyTextView: {
    marginBottom: 40
  },
  privacySubHeaderView: {

  },
  privacySubHeader: {
    color: StyleConsts.colors.navy,
    fontFamily: StyleConsts.fontFamily.openSansBold,
    fontSize: getSize(14, 14, 21, 28)
  },
  privacyText: {
    color: StyleConsts.colors.darkGrey,
    fontFamily: StyleConsts.fontFamily.openSansLight,
    fontSize: getSize(14, 14, 21, 28),
    paddingVertical: 5
  },
  privacySubList: {
    color: StyleConsts.colors.mediumGrey,
    fontFamily: StyleConsts.fontFamily.openSansItalic,
    fontSize: getSize(10, 10, 15, 18),
    paddingVertical: 2,
    paddingHorizontal: 10
  },
  privacyParagraph: {
    paddingBottom: StyleConsts.fontSize.em1,
  },
  underline: {
    textDecorationLine: "underline",
  },
  list: {
    marginBottom: StyleConsts.fontSize.em1,
    paddingLeft: StyleConsts.padding.paragraphPadding,
    paddingRight: StyleConsts.padding.paragraphPadding,
  },
  listBullet: {
    marginRight: StyleConsts.fontSize.em1 / 2,
    textAlign: "right",
  },
  listItem: {
    flexDirection: "row",
  },
  listItemText: {
  },
})
