import cloneDeep from "lodash.clonedeep"
import AssessmentAttempt from "assessment-js"
import { AsyncStorage } from "react-native"
import { Actions, ActionConst } from "react-native-router-flux"
import { AppActions } from "/constants"
import { AssessmentService } from "/services"
import * as GlobalActions from "/actions/globalActions"

const assessmentService = new AssessmentService()

function completingAttemptComplete(body) {
  return {
    type: AppActions.ASSESSMENT_COMPLETING_ATTEMPT_COMPLETE,
    payload: body,
  }
}

function completingAttemptStarting() {
  return {
    type: AppActions.ASSESSMENT_COMPLETING_ATTEMPT_STARTING,
  }
}

function getAssessmentIntroSuccessful(body, item) {
  return {
    type: AppActions.ASSESSMENT_INTRO,
    assessmentIntro: body,
    assessmentInfo: item,
  }
}
function getAssessmentResultSuccessful(body) {
  return {
    type: AppActions.ASSESSMENT_RESULT_DATA,
    payload: {
      assessmentResults: body,
    },
  }
}
function getAssessmentIntroFailed(error) {
  return {
    type: AppActions.ASSESSMENT_INTRO_FAILED,
    payload: {
      error,
    },
  }
}

function getDynamicDataSuccessful(body) {
  return {
    type: AppActions.ASSESSMENT_DYNAMIC_DATA,
    dynamicData: body,
  }
}

function getDynamicDataFailed(error) {
  return {
    type: AppActions.ASSESSMENT_DYNAMIC_DATA_FAILED,
    payload: {
      error,
    },
  }
}

function navigationSuccessful(assessment) {
  return {
    type: AppActions.ASSESSMENT_NAVIGATION_SUCCESSFUL,
    payload: assessment.jsonify(),
  }
}

function newAssessmentAttemptSuccessful(assessmentBody) {
  const assessment = new AssessmentAttempt(assessmentBody)
  assessment.fastForward()
  AsyncStorage.setItem("pageLoadTime", `${Date.now()}`)
  return {
    type: AppActions.NEW_ASSESSMENT_ATTEMPT,
    newAssessmentAttempt: assessment,
  }
}

function newAssessmentAttemptFailed(error) {
  return {
    type: AppActions.NEW_ASSESSMENT_ATTEMPT_FAILED,
    payload: {
      error,
    },
  }
}

function waitOnDynamicData() {
  return {
    type: AppActions.WAIT_ON_DYNAMIC_DATA,
  }
}

function disableResultsPage() {
  return {
    type: AppActions.DISABLE_RESULT_PAGE,
  }
}

function checkAnswersSuccessful(assessment) {
  return {
    type: AppActions.ASSESSMENT_CHECK_ANSWERS,
    payload: assessment.responses,
  }
}

function submitAnswersComplete() {
  return {
    type: AppActions.ASSESSMENT_SUBMIT_ANSWERS_COMPLETE,
  }
}

function submitAnswersStarting() {
  return {
    type: AppActions.ASSESSMENT_SUBMIT_ANSWERS_STARTING,
  }
}

function visitedPage(visitedPages) {
  return {
    type: AppActions.ASSESSMENT_VISIT_PAGE,
    visitedPages,
  }
}

async function updateAnalytics(assessment) {
  const analytics = {
    analytics: {
      page_id: assessment.currentPage().id,
      load_time: await AsyncStorage.getItem("pageLoadTime"),
      submit_time: Date.now(),
    },
  }
  assessmentService.putAnalytics(assessment.id, analytics)
  const newLoadTime = Date.now()
  await AsyncStorage.setItem("pageLoadTime", `${newLoadTime}`)
  assessment.updateAnalytics(analytics.analytics)
  return assessment
}

export function visitPage(assessment, pageId) {
  return (dispatch) => {
    assessmentService.visitPage(assessment.id, { page_id: pageId })
    const newAssessment = cloneDeep(assessment)
    newAssessment.visitPage(pageId)
    dispatch(visitedPage(Array.from(newAssessment.visitedPages)))
  }
}

export function nextPage(assessment) {
  return async (dispatch) => {
    const newAssessment = await updateAnalytics(cloneDeep(assessment))
    newAssessment.navigateToNextPage()
    dispatch(navigationSuccessful(newAssessment))
  }
}

export function previousPage(assessment) {
  return async (dispatch) => {
    const newAssessment = await updateAnalytics(cloneDeep(assessment))
    newAssessment.navigateToPreviousPage()
    dispatch(navigationSuccessful(newAssessment))
  }
}

export function navigateToSectionId(assessment, sectionId) {
  return async (dispatch) => {
    const newAssessment = await updateAnalytics(cloneDeep(assessment))
    newAssessment.navigateToSectionId(sectionId)
    dispatch(navigationSuccessful(newAssessment))
  }
}

export function toggleNavButtons(isEnabled) {
  return {
    type: AppActions.TOGGLE_NAV_BUTTONS,
    isEnabled,
  }
}
export function setCurrentPage(page) {
  return {
    type: AppActions.SET_CURRENT_PAGE,
    page,
  }
}
export function saveResponse(questionId, value, feedbackText) {
  return {
    type: AppActions.SAVE_ANSWER,
    payload: {
      questionId,
      value,
      feedbackText,
    },
  }
}
export function onSlider(title, type, value) {
  return {
    type: AppActions.CHANGE_PRIORITY_DATA,
    payload: {
      title,
      type,
      value,
    },
  }
}

export function deleteResponse(questionId) {
  return {
    type: AppActions.DELETE_ANSWER,
    payload: {
      questionId,
    },
  }
}

export function setStandardResponse(questionId, value) {
  return {
    type: AppActions.SET_STANDARD_RESPONSE,
    questionId,
    value,
  }
}

export function checkAnswers(assessment, responses) {
  return (dispatch) => {
    const newAssessment = cloneDeep(assessment)
    const body = {
      instant_feedback: Object.keys(responses),
      question: responses,
    }

    assessmentService.checkAnswers(assessment.id, body)
                     .then((res) => {
                       dispatch(submitAnswersComplete())
                       if (res.status !== 204) {
                         dispatch(GlobalActions.serverError())
                         Actions.ErrorView()
                         return null
                       }
                       return true
                     })

    Object.keys(responses).forEach(questionId => newAssessment.writeResponse(questionId, responses[questionId]))
    dispatch(checkAnswersSuccessful(newAssessment))
  }
}

export function submitResponses(assessment, responses, goToNextPage = false) {
  return (dispatch) => {
    dispatch(submitAnswersStarting())
    const newAssessment = cloneDeep(assessment)
    const body = { question: responses }
    assessmentService.putAnswer(assessment.id, body)
                     .then((res) => {
                       dispatch(submitAnswersComplete())
                       if (res.status !== 204) {
                         dispatch(GlobalActions.serverError())
                         Actions.ErrorView()
                         return null
                       }
                       return true
                     })
    Object.keys(responses).forEach(questionId => newAssessment.writeResponse(questionId, responses[questionId]))
    dispatch(checkAnswersSuccessful(newAssessment))
    if (goToNextPage) {
      dispatch(nextPage(newAssessment))
    }
  }
}

export function sendResponce(assessmentAttemptId, questionId, value, feedbackText) {
  const body = {
    question: {
      [questionId]: value.toString(),
    },
  }
  return (dispatch) => {
    dispatch(saveResponse(questionId, value, feedbackText))
    assessmentService.putAnswer(assessmentAttemptId, body)
                     .then((res) => {
                       if (res.status !== 204) {
                         dispatch(getAssessmentIntroFailed())
                         dispatch(deleteResponse(questionId))
                         dispatch(GlobalActions.serverError())
                         Actions.ErrorView()
                       }
                     })
                     .catch((e) => {
                       dispatch(getAssessmentIntroFailed(e))
                       dispatch(deleteResponse(questionId))
                       dispatch(GlobalActions.serverError())
                       Actions.ErrorView()
                     })
  }
}

export function getDynamicData(attemptId, key) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    dispatch(waitOnDynamicData())
    assessmentService.getDynamicData(attemptId, key)
                     .then(res => res.json()
                                     .then((body) => {
                                       dispatch(GlobalActions.hideLoader())
                                       dispatch(getDynamicDataSuccessful(body))
                                     }))
                     .catch((e) => {
                       dispatch(GlobalActions.hideLoader())
                       dispatch(getDynamicDataFailed(e))
                       dispatch(GlobalActions.serverError())
                       Actions.ErrorView()
                     })
  }
}

export function getCalculatedResults(attemptId) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    dispatch(disableResultsPage())
    assessmentService.getResults(attemptId)
                     .then(res => res.json()
                                     .then((body) => {
                                       dispatch(GlobalActions.hideLoader())
                                       dispatch(getAssessmentResultSuccessful(body))
                                     }))
                     .catch((e) => {
                       dispatch(GlobalActions.hideLoader())
                       dispatch(getAssessmentResultSuccessful({}))
                       dispatch(getAssessmentIntroFailed(e))
                       dispatch(GlobalActions.serverError())
                       Actions.ErrorView()
                     })
  }
}

export function renderAssessmentIntro(item, navigateViaPop = false) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    return assessmentService
      .getAssessmentIntro(item.url)
      .then(res =>
        res.json()
           .then((body) => {
             dispatch(getAssessmentIntroSuccessful(body, item))
             dispatch(GlobalActions.hideLoader())
             if (navigateViaPop) {
               return Actions.pop()
             }
             return Actions.AssessmentItem({
               title: body.introduction.introPage.title,
               type: ActionConst.PUSH,
             })
           }))
      .catch((e) => {
        dispatch(getAssessmentIntroFailed(e))
        dispatch(GlobalActions.hideLoader())
        dispatch(GlobalActions.serverError())
        Actions.ErrorView()
      })
  }
}

export function startNewAssessment(assessmentIntro, courseId, sectionId, assignmentId, assignmentName) {
  const requestBody = {
    assessment_id: assessmentIntro.assessment_id,
  }

  if (courseId !== undefined && courseId !== null && courseId !== "") {
    requestBody.course_id = courseId
  }
  if (assignmentId !== undefined && assignmentId !== null && assignmentId !== "") {
    requestBody.assignment_id = assignmentId
  }
  if (sectionId !== undefined && sectionId !== null && sectionId !== "") {
    requestBody.section_id = sectionId
  }
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    dispatch(GlobalActions.recordMobileUserEvent("AssignmentStarted", { id: assignmentId, name: assignmentName }, courseId))
    assessmentService.newAssessmentAttempt(requestBody)
                     .then(res => res.json()
                                     .then((body) => {
                                       dispatch(newAssessmentAttemptSuccessful(body))
                                       dispatch(GlobalActions.hideLoader())
                                       Actions.NewAssessment({
                                         title: assessmentIntro.introduction.introPage.title,
                                         type: ActionConst.PUSH,
                                       })
                                     }))
                     .catch((e) => {
                       dispatch(newAssessmentAttemptFailed(e))
                       dispatch(GlobalActions.hideLoader())
                       dispatch(GlobalActions.serverError())
                       Actions.ErrorView()
                     })
  }
}

export function completeAssessment(assessment) {
  return (dispatch) => {
    dispatch(completingAttemptStarting())
    assessmentService.completeAttempt(assessment.id)
                     .then(res =>
                       res.json()
                          .then((body) => {
                            dispatch(completingAttemptComplete(body))
                          }))
  }
}

export function continueAttempt(url, assessmentId, title, analyticsData = {}) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    if (assessmentId !== 1) {
      dispatch(GlobalActions.recordMobileUserEvent("AssignmentContinued", { id: analyticsData.id, name: analyticsData.name }, analyticsData.courseId))
      return assessmentService.continueAttempt(url)
        .then(res => res.json()
            .then((body) => {
              dispatch(newAssessmentAttemptSuccessful(body))
              dispatch(GlobalActions.hideLoader())
              return Actions.NewAssessment({ title, type: ActionConst.PUSH })
            }))
        .catch((e) => {
          dispatch(newAssessmentAttemptFailed(e))
          dispatch(GlobalActions.hideLoader())
          dispatch(GlobalActions.serverError())
          Actions.ErrorView()
        })
    }
    dispatch(newAssessmentAttemptSuccessful("WBA is under construction"))
    dispatch(GlobalActions.hideLoader())
    return Actions.NewAssessment({ title: "WBA", type: ActionConst.RESET })
  }
}

export function hideGlossary() {
  Actions.refresh({ backTitle: "History" })

  return dispatch => dispatch({
    type: AppActions.ASSESSMENT_HIDE_GLOSSARY,
  })
}

export function showGlossary() {
  Actions.refresh({ backTitle: "Chapter", title: "Glossary" })

  return dispatch => dispatch({
    type: AppActions.ASSESSMENT_SHOW_GLOSSARY,
  })
}

export function hideTOC() {
  Actions.refresh({ backTitle: "History" })

  return dispatch => dispatch({
    type: AppActions.ASSESSMENT_HIDE_TOC,
  })
}

export function showTOC() {
  Actions.refresh({ backTitle: "Chapter", title: "TOC" })

  return dispatch => dispatch({
    type: AppActions.ASSESSMENT_SHOW_TOC,
  })
}
