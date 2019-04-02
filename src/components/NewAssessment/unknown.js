import React, { PureComponent } from "react"
import {
  ScrollView,
  Text,
  View,
} from "react-native"
import styles from "./styles"

export default class unknown extends PureComponent {
  render() {
    let pageType = "<unspecified>"
    if (this.props.content && this.props.content.type) {
      pageType = this.props.content.type
    } else if (this.props.assessment) {
      pageType = this.props.assessment.currentPage().type
    }
    return (
      <ScrollView
        pagingEnabled
        style={styles.getStarted}>
        <View style={styles.headerView}>
          <Text style={styles.header}>{`Page for ${pageType} is under construction`}</Text>
        </View>
      </ScrollView>
    )
  }
}

