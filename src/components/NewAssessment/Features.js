import React, { PureComponent } from "react"
import {
  ScrollView,
  Text,
  View,
} from "react-native"
import styles from "./styles"
import { htmlView } from "/lib/helpers"
import UncachableImage from "/lib/helpers/UncachableImage"

export default class Features extends PureComponent {
  render() {
    const { assessment, content } = this.props
    const currentPage = assessment.currentPage()
    return (
      <ScrollView
        pagingEnabled
        style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>{currentPage.content.caption}</Text>
        </View>
        <View style={styles.imageWrapper}>
          <UncachableImage style={styles.image} source={{ uri: content.isWBA ? currentPage.content.image : currentPage.content.heroImage }} resizeMode={"cover"} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textHeader}>{content.isWBA ? currentPage.content.subcaption : ""}</Text>
          {htmlView(content.isWBA ? currentPage.content.text : currentPage.content.displayText)}
        </View>
        { !content.isWBA &&
          <View style={styles.startedFooter}>
            <Text style={styles.footerHeader}>Variables needed:</Text>
            <View style={styles.footerIconsWrapper}>
              { (currentPage.content.sections || []).map((item, i) => (
                <View key={i} style={styles.footerIconWrapper}>
                  <View style={styles.iconView}>
                    <UncachableImage
                      style={styles.icon}
                      source={{ uri: item.iconURL ? item.iconURL : "https://s3.amazonaws.com/perceivant-lti-images/icon/friend.png" }}
                      resizeMode={"cover"} />
                  </View>
                  <Text numberOfLines={2} style={styles.footerText}>{item.caption}</Text>
                </View>
                )) }
            </View>
          </View>
        }
      </ScrollView>
    )
  }
}
