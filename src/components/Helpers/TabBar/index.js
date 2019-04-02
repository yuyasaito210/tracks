import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import {
  Actions,
  ActionConst,
} from "react-native-router-flux"
import styles from "./styles"
import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import icoMoonConfig from "/lib/icons/BearTracks.json"
import StyleConsts from "/constants/styleConstants"
import { getSize } from "/lib/helpers/styleSizes"

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

export default class TabBar extends Component {
  static propTypes = {
    actions: PropTypes.object,
    assessment: PropTypes.object,
    buttons: PropTypes.bool,
    isGuidedLearning: PropTypes.bool,
    isNextPageAllowed: PropTypes.bool,
    standardResponses: PropTypes.object,
  }

  static defaultProps = {
    actions: {},
    assessment: {},
    buttons: false,
    isGuidedLearning: false,
    isNextPageAllowed: false,
    standardResponses: {},
  }

  nextPage() {
    if (this.props.isNextPageAllowed) {
      if (Object.keys(this.props.standardResponses).length > 0) {
        this.props.actions.submitResponses(this.props.assessment, this.props.standardResponses, true)
      } else {
        this.props.actions.nextPage(this.props.assessment)
      }
    }
    return null
  }

  lastPage() {
    if (!this.props.assessment.onFirstPage()) {
      this.props.actions.previousPage(this.props.assessment)
    }
    return null
  }

  renderTabbarButtons() {
    const { isGuidedLearning, isNextPageAllowed } = this.props
    return (
      <View style={styles.tabButtons}>
        <TouchableHighlight
          style={styles.tabbarButton}
          onPress={() => this.lastPage()}
          underlayColor={StyleConsts.colors.lightGrey}>
          <View style={styles.tabbarButtonContainer}>
            <View style={styles.tabbarButtonIconContainer}>
              <Icon name={"back"} style={styles.buttonIcon} size={getSize(40, 40, 60, 80)} />
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>LAST</Text>
            </View>
          </View>
        </TouchableHighlight>
        { isGuidedLearning &&
          <View style={styles.tabBarGuidedLearningButtons}>
            <TouchableHighlight
              style={styles.tabBarGuidedLearningButton}
              onPress={() => this.props.actions.showTOC()}
              underlayColor={StyleConsts.colors.teal}>
              <View style={styles.tabBarGuidedLearningButtonContainer}>
                <View style={styles.tabBarGuidedLearningButtonIconContainer}>
                  <Icon name={"toc"} style={styles.guidedLearningButtonIcon} size={getSize(20, 20, 30, 40)} />
                </View>
                <View style={styles.guidedLearningButtonTextContainer}>
                  <Text style={styles.guidedLearningButtonText}>TOC</Text>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.tabbarButton} />
            <TouchableHighlight
              style={styles.tabBarGuidedLearningButton}
              onPress={() => this.props.actions.showGlossary()}
              underlayColor={StyleConsts.colors.teal}>
              <View style={styles.tabBarGuidedLearningButtonContainer}>
                <View style={styles.tabBarGuidedLearningButtonIconContainer}>
                  <Icon name={"glossary"} style={styles.guidedLearningButtonIcon} size={getSize(20, 20, 30, 40)} />
                </View>
                <View style={styles.guidedLearningButtonTextContainer}>
                  <Text style={styles.guidedLearningButtonText}>Glossary</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        }
        <TouchableHighlight
          style={styles.tabbarButton}
          onPress={() => this.nextPage()}
          underlayColor={StyleConsts.colors.lightGrey}>
          <View style={styles.tabbarButtonContainer}>
            <View style={styles.buttonTextContainer}>
              <Text style={[
                styles.buttonText,
                { textAlign: "right" },
                isNextPageAllowed && styles.allowedButton,
              ]}>NEXT</Text>
            </View>
            <View style={[styles.tabbarButtonIconContainer, styles.rotatedIcon180]}>
              <Icon
                name={"back"}
                style={[styles.buttonIcon, isNextPageAllowed && styles.allowedButton]}
                size={getSize(40, 40, 60, 80)} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.tabBarContainer]}>
        <View style={styles.tabBar}>
          {this.props.buttons ? this.renderTabbarButtons() : null}
        </View>
        <TouchableHighlight
          style={styles.tabBarIcon}
          onPress={() => Actions.Tabbar({ type: ActionConst.RESET })}>
          <Icon name={"home"} size={getSize(40, 40, 60, 80)} style={{ color: "#fff" }} />
        </TouchableHighlight>
      </View>
    )
  }
}
