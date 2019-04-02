import PropTypes from "prop-types"
import React, { Component } from "react"
import { ScrollView } from "react-native"
import StyleConsts from "/constants/styleConstants"
import styles from "./ContentObjects/styles"

import Bullets from "./ContentObjects/Bullets"
import List from "./ContentObjects/List"
import Paragraph from "./ContentObjects/Paragraph"
import Photo from "./ContentObjects/Photo"
import Subtitle from "./ContentObjects/Subtitle"
import Title from "./ContentObjects/Title"
import Video from "./ContentObjects/Video"

export default class FeatureBoxPage extends Component {
  static propTypes = {
    assessment: PropTypes.object.isRequired,
  }

  static explicitStyles = {
    caption: {
      color: StyleConsts.colors.white,
      fontFamily: StyleConsts.fontFamily.openSansItalic,
      fontSize: StyleConsts.fontSize.em1 * 1.25,
      paddingLeft: StyleConsts.padding.sidePadding,
      marginRight: StyleConsts.fontSize.em1,
      textAlign: "right",
    },
    listBullet: {
      color: StyleConsts.colors.white,
      fontSize: StyleConsts.fontSize.em1 * 1.5,
      marginRight: StyleConsts.fontSize.em1 / 2,
      textAlign: "right",
      width: StyleConsts.padding.paragraphPadding * 1.5, //StyleConsts.fontSize.em1 * 5,
    },
    listItemText: {
      color: StyleConsts.colors.white,
      fontSize: StyleConsts.fontSize.em1 * 1.5,
    },
    paragraph: {
      color: StyleConsts.colors.white,
      fontSize: StyleConsts.fontSize.em1 * 1.5,
      marginBottom: StyleConsts.fontSize.em1,
      paddingLeft: StyleConsts.padding.paragraphPadding,
    },
    subtitle: {
      color: StyleConsts.colors.white,
      fontSize: StyleConsts.fontSize.em1 * 3,
      paddingBottom: 40,
      textAlign: "center",
    },
    title: {
      color: StyleConsts.colors.white,
      fontFamily: StyleConsts.fontFamily.openSansBold,
      fontSize: StyleConsts.fontSize.em1 * 3.5,
      textAlign: "center",
    },
    videoCaption: {
      color: StyleConsts.colors.white,
      fontFamily: StyleConsts.fontFamily.openSansItalic,
      fontSize: StyleConsts.fontSize.em1 * 1.25,
      paddingLeft: StyleConsts.padding.sidePadding,
      marginRight: StyleConsts.fontSize.em1,
      textAlign: "right",
    },
  }

  constructor(props) {
    super(props)

    this.components = {
      bullets: Bullets,
      image: Photo,
      list: List,
      paragraph: Paragraph,
      photo: Photo,
      subtitle: Subtitle,
      title: Title,
      video: Video,
    }
  }

  render() {
    const { assessment } = this.props
    const currentPage = assessment.currentPage()
    return (
      <ScrollView pagingEnabled style={{ backgroundColor: StyleConsts.colors.navy }}>
        {
          currentPage.contentObjects.map((content, index) => {
            const Tag = this.components[content.type]
            return <Tag key={index} content={content} styles={{ ...styles, ...FeatureBoxPage.explicitStyles }} />
          })
        }
      </ScrollView>
    )
  }
}
