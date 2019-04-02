import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class AnnouncementsView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    announcements: PropTypes.arrayOf(PropTypes.object).isRequired,
    course: PropTypes.object.isRequired,
    isRefreshingAnnouncements: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)

    this.onItem = this.onItem.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  onItem(announcement) {
    this.props.actions.selectAnnouncement(announcement)
  }

  onRefresh() {
    this.props.actions.getAnnouncements(this.props.course.id)
  }

  announcementRow(announcement) {
    const postedDate = moment(announcement.posted_at).format("MMMM DD")
    const statusStyle = announcement.read ? "Read" : "Unread"

    return (
      <TouchableHighlight
        key={announcement.id}
        onPress={() => this.onItem(announcement)}
        underlayColor={StyleConsts.colors.white}>
        <View style={styles.announcementButtonWrapper}>
          <View style={styles.announcementSideSpacer} />
          <View style={styles.announcementButton}>
            <View style={styles.topRow}>
              <View style={styles.leftSide}>
                <Text style={[styles.rowStatus, styles[`rowStatus${statusStyle}`]]}>{announcement.title}</Text>
              </View>
              <View style={styles.postedDate}>
                <Text style={styles.postedDateText}>{postedDate}</Text>
                <Icon name={"back"} size={getSize(20, 20, 30, 45)} style={styles.rightArrowIcon} />
              </View>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.announcementAuthor}>{(announcement.author || {}).display_name}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  announcementRows(announcements) {
    if (announcements.length === 0) {
      return (
        <Text style={styles.noAnnouncementsText}>
          You have no announcements!
        </Text>
      )
    }
    const self = this
    return announcements.sort((a, b) => {
      if (!a.read && b.read) {
        return -1
      }
      if (a.read && !b.read) {
        return 1
      }

      const aDate = moment(a.posted_at)
      const bDate = moment(b.posted_at)
      if (aDate.isBefore(bDate)) {
        return 1
      }
      if (bDate.isBefore(aDate)) {
        return -1
      }

      return Math.sign(a.id - b.id)
    }).map(announcement => self.announcementRow(announcement))
  }

  render() {
    const unreadAnnouncementCount = this.props.announcements.filter(announcement => !announcement.read).length

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isRefreshingAnnouncements}
            onRefresh={this.onRefresh} />
        }>
        <View>
          <Text style={styles.headerText}>
            Heads Up
          </Text>
        </View>
        <View style={styles.announcementCountRow}>
          <View style={styles.announcementCount}>
            <Text style={styles.announcementCountText}>
              {unreadAnnouncementCount}
            </Text>
          </View>
          <View style={styles.announcementHeader}>
            <Text style={styles.announcementHeaderText}>
              Announcements
            </Text>
          </View>
        </View>
        <View style={styles.announcementRows}>
          {this.announcementRows(this.props.announcements)}
        </View>
      </ScrollView>
    )
  }
}
