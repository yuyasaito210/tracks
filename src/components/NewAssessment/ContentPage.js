import PropTypes from "prop-types"
import React, { Component } from "react"
import { ScrollView } from "react-native"
import styles from "./ContentObjects/styles"

import Bullets from "./ContentObjects/Bullets"
import ChapterAuthor from "./ContentObjects/ChapterAuthor"
import H1 from "./ContentObjects/H1"
import H2 from "./ContentObjects/H2"
import H3 from "./ContentObjects/H3"
import IntroParagraph from "./ContentObjects/IntroParagraph"
import LearningObjective from "./ContentObjects/LearningObjective"
import List from "./ContentObjects/List"
import NumberedList from "./ContentObjects/NumberedList"
import Objectives from "./ContentObjects/Objectives"
import ObjectivesIntro from "./ContentObjects/ObjectivesIntro"
import Paragraph from "./ContentObjects/Paragraph"
import Photo from "./ContentObjects/Photo"
import Quote from "./ContentObjects/Quote"
import Steps from "./ContentObjects/Steps"
import Subtitle from "./ContentObjects/Subtitle"
import Table from "./ContentObjects/Table"
import Title from "./ContentObjects/Title"
import Variables from "./ContentObjects/Variables"
import Video from "./ContentObjects/Video"

export default class ContentPage extends Component {
  static propTypes = {
    assessment: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.components = {
      bullets: Bullets,
      chapterAuthor: ChapterAuthor,
      h1: H1,
      h2: H2,
      h3: H3,
      image: Photo,
      introParagraph: IntroParagraph,
      learningObjective: LearningObjective,
      list: List,
      numberedList: NumberedList,
      objectives: Objectives,
      objectivesIntro: ObjectivesIntro,
      paragraph: Paragraph,
      photo: Photo,
      quote: Quote,
      steps: Steps,
      subtitle: Subtitle,
      table: Table,
      title: Title,
      variables: Variables,
      video: Video,
    }
  }

  render() {
    const { assessment } = this.props
    const currentPage = assessment.currentPage()
    return (
      <ScrollView pagingEnabled>
        {
          currentPage.contentObjects.map((content, index) => {
            const Tag = this.components[content.type]
            return <Tag key={index} content={content} styles={styles} />
          })
        }
      </ScrollView>
    )
  }
}
