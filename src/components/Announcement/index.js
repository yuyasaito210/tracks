import moment from "moment"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import { getSize } from "/lib/helpers/styleSizes"
import { htmlView } from "/lib/helpers"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import styles from "./styles"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class AnnouncementView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    announcement: PropTypes.object.isRequired,
    courseId: PropTypes.number.isRequired,
  }

  componentDidMount() {
    if (this.props.announcement && !this.props.announcement.read) {
      this.props.actions.markAnnouncementRead(this.props.courseId, this.props.announcement.id)
    }
  }

  announcementBanner(announcement) {
    const postedDate = moment(announcement.posted_at).format("dddd, MMMM Do")
    return (
      <View style={styles.dataInfo}>
        <Icon name={"calendar"} size={getSize(45, 45, 65, 90)} style={{ color: "#fff" }} />
        <View style={styles.infoText}>
          <Text style={{ color: "#fff", fontSize: getSize(15, 15, 23, 30) }}>An announcement for:</Text>
          <Text style={{ marginTop: 10, color: "#fff", fontSize: getSize(20, 20, 30, 40), fontWeight: "bold" }}>{postedDate}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { announcement } = this.props
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        <View style={styles.announcementInfo}>
          {this.announcementBanner(announcement)}
          <View style={styles.announcementTitleRow}>
            <Text style={styles.announcementTitle}>
              {announcement.title}
            </Text>
          </View>
          {
            announcement.message &&
            announcement.message !== "" &&
            <View style={styles.announcementMessageRow}>
              <Text style={styles.announcementMessage}>
                {htmlView(announcement.message)}
              </Text>
            </View>
          }
        </View>
        <View style={styles.actions}>
          <TouchableHighlight
            onPress={() => this.props.actions.markAnnouncementUnread(this.props.courseId, this.props.announcement.id)}
            style={styles.button}
            underlayColor={StyleConsts.colors.white}>
            <View style={styles.buttonWrapper}>
              <Icon name={"flag"} size={getSize(20, 20, 30, 45)} style={{ color: StyleConsts.colors.mediumGrey }} />
              <View style={styles.actionTextWrapper}>
                <Text style={styles.actionText}>Mark New</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.actions.deleteAnnouncement(this.props.announcement.id, true)}
            style={styles.button}
            underlayColor={StyleConsts.colors.white}>
            <View style={styles.buttonWrapper}>
              <Icon name={"delete"} size={getSize(20, 20, 30, 45)} style={{ color: StyleConsts.colors.mediumGrey }} />
              <View style={styles.actionTextWrapper}>
                <Text style={styles.actionText}>Delete Reminder</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}
