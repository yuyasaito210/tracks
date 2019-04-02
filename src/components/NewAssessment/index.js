import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  ScrollView,
} from "react-native"
import { Actions } from "react-native-router-flux"
import bugsnag from "/lib/bugsnag"
import styles from "./styles"
import ChapterProgress from "./TOC/ChapterProgress"
import ContentPage from "./ContentPage"
import EmptyPage from "./EmptyPage"
import FeatureBoxPage from "./FeatureBoxPage"
import Features from "./Features"
import Feedback from "./Feedback"
import Glossary from "./Glossary"
import Priority from "./Priority"
import Questions from "./Questions"
import Results from "./Results"
import Steps from "./Steps"
import SubResults from "./SubResults"
import TOC from "./TOC"
import unknown from "./unknown"

export default class NewAssessment extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    answersList: PropTypes.object.isRequired,
    areAnswersSubmitting: PropTypes.bool.isRequired,
    assessment: PropTypes.object.isRequired,
    assessmentResults: PropTypes.shape({
      score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      status: PropTypes.string,
      title: PropTypes.string,
      user_inputs: PropTypes.arrayOf(PropTypes.shape({
        question_id: PropTypes.number,
        question_text: PropTypes.string,
        response_value: PropTypes.string,
      })),
    }).isRequired,
    assignmentId: PropTypes.number.isRequired,
    attemptId: PropTypes.number.isRequired,
    courseId: PropTypes.number.isRequired,
    dynamicData: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    isAllowedScroll: PropTypes.bool.isRequired,
    isCompletingAssessment: PropTypes.bool.isRequired,
    isGuidedLearning: PropTypes.bool.isRequired,
    isResultsPageAllowed: PropTypes.bool.isRequired,
    isWBA: PropTypes.bool.isRequired,
    isWaitingOnDynamicData: PropTypes.bool.isRequired,
    priorityData: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      confidence: PropTypes.number,
      icon: PropTypes.string,
      satisfaction: PropTypes.number,
      type: PropTypes.string,
    })).isRequired,
    standardResponses: PropTypes.object.isRequired,
    showGlossary: PropTypes.bool.isRequired,
    showTOC: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }

  static noProgressPages = [Glossary, TOC]

  componentWillMount() {
    const { assessment } = this.props
    this.props.actions.toggleNavButtons(false)
    const currentPage = assessment.currentPage()
    if (currentPage.type === "feedback") {
      bugsnag.leaveBreadcrumb("Going directly to feedback", { type: "navigation", assessmentAttemptId: this.props.attemptId, assignmentId: this.props.assignmentId })
      if (currentPage.dynamicKey !== undefined) {
        this.props.actions.getDynamicData(this.props.attemptId, currentPage.dynamicKey)
      }
    }
  }

  /* componentWillReceiveProps(nextProps) {
   *   if (!nextProps.assessment) {
   *     return
   *   }

   *   const { assessment } = this.props
   *   const nextPage = nextProps.assessment.currentPage()
   *   const isChangingPages = nextPage !== assessment.currentPage()

   *   isChangingPages && this.scrollRef.scrollTo({ y: 0, animated: false })

   *   if (isChangingPages && nextPage.dynamicKey !== undefined) {
   *     this.props.actions.getDynamicData(nextProps.attemptId, nextPage.dynamicKey)
   *   }

   *   if (nextProps.assessment.onLastPage() && !nextPage.isVisited() && !nextProps.areAnswersSubmitting && nextPage.id) {
   *     this.props.actions.visitPage(nextProps.assessment, nextProps.assessment.currentPage().id)
   *   }

   *   this.isAllowedNextPage(nextPage.questions, nextProps.answersList)
   *                         ? this.props.actions.toggleNavButtons(true)
   *                         : this.props.actions.toggleNavButtons(false)
   * } */

  componentDidUpdate(prevProps) {
    if (!this.props.assessment) {
      return
    }

    if ((this.props.showGlossary || this.props.showTOC) && !(prevProps.showGlossary || prevProps.showTOC)) {
      Actions.refresh({ backTitle: "Chapter", title: this.props.showGlossary ? "Glossary" : "TOC" })
    } else if (!(this.props.showGlossary || this.props.showTOC) && (prevProps.showGlossary || prevProps.showTOC)) {
      Actions.refresh({ backTitle: "History", title: prevProps.title })
    }
    const { assessment } = prevProps
    const nextPage = this.props.assessment.currentPage()
    const isChangingPages = nextPage !== assessment.currentPage()

    isChangingPages && this.scrollRef.scrollTo({ y: 0, animated: false })

    if (isChangingPages && nextPage.dynamicKey !== undefined) {
      this.props.actions.getDynamicData(this.props.attemptId, nextPage.dynamicKey)
    }

    if (this.props.assessment.onLastPage() && !nextPage.isVisited() && !this.props.areAnswersSubmitting && nextPage.id) {
      this.props.actions.visitPage(this.props.assessment, this.props.assessment.currentPage().id)
    }

    const allowNextPage = this.isAllowedNextPage(nextPage.questions)
    this.props.actions.toggleNavButtons(allowNextPage)

    if (!this.props.isCompletingAssessment && this.props.isGuidedLearning && !this.props.assessment.isComplete() && this.props.assessment.completionPercent() === 1) {
      this.props.actions.completeAssessment(this.props.assessment)
    }
  }

  getComponent() {
    if (this.props.isWaitingOnDynamicData) {
      return EmptyPage
    }
    if (this.props.showGlossary) {
      return Glossary
    }
    if (this.props.showTOC) {
      return TOC
    }
    switch (this.props.assessment.currentPage().type) {
      case "contentPage":
        return ContentPage
      case "featureBox":
        return FeatureBoxPage
      case "featuresPage":
      case "intro":
        return Features
      case "stepsPage":
        return Steps
      case "question":
        return Questions
      case "subResults":
        return SubResults
      case "feedback": {
        if (this.props.isWBA) {
          return unknown
        }
        return Results
      }
      case "check":
        return Feedback
      case "priority":
        return Priority
      default:
        return unknown
    }
  }

  getComponentProps() {
    return {
      answersList: this.props.answersList,
      areAnswersSubmitting: this.props.areAnswersSubmitting,
      assessmentResults: this.props.assessmentResults,
      assignmentId: this.props.assignmentId,
      attemptId: this.props.attemptId,
      courseId: this.props.courseId,
      dynamicData: this.props.dynamicData,
      isAllowedScroll: this.props.isAllowedScroll,
      isResultsPageAllowed: this.props.isResultsPageAllowed,
      isWBA: this.props.isWBA,
      priorityData: this.props.priorityData,
      profile: this.props.profile,
      title: this.props.title,
    }
  }

  isSliderQuestion(questions) {
    const sliderQuestionList = (questions || []).filter(question =>
      question.questionType === "satisfaction" || question.questionType === "confidence")
    return sliderQuestionList.length !== 0
  }

  handleScroll(e) {
    if (e.nativeEvent.contentOffset.y < 0) {
      this.scrollRef.scrollTo({ x: 0, y: 0, animated: false })
    }
  }

  isAllowedNextPage(questions) {
    // const isAllowed = (questions || []).filter(question => answersList[question.id] === undefined)
    if (this.props.assessment.onLastPage()) {
      return false
    }
    let isAllowed = true
    if ((questions || []).every(question => question.instantFeedback)) {
      isAllowed = true
    } else if ((questions || []).filter(question => !question.instantFeedback).some(question => this.props.standardResponses === undefined || this.props.standardResponses[question.id.toString()] === undefined)) {
      isAllowed = false
    }

    return isAllowed
  }

  render() {
    const CurrentComponent = this.getComponent()
    return (
      <ScrollView
        style={styles.scrolledContainer}
        ref={(c) => { this.scrollRef = c }}
        scrollEnabled={this.props.isAllowedScroll}
        onScroll={e => this.handleScroll(e)}>
        { this.props.isGuidedLearning && !NewAssessment.noProgressPages.includes(CurrentComponent) && <ChapterProgress assessment={this.props.assessment} /> }
        <CurrentComponent
          assessment={this.props.assessment}
          standardResponses={this.props.standardResponses}
          content={this.getComponentProps()}
          onAnswerPut={this.props.actions.sendResponce}
          actions={this.props.actions} />
      </ScrollView>
    )
  }
}
