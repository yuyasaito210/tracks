import { AppActions } from "/constants"
import { UserService } from "/services"
import { Actions, ActionConst } from "react-native-router-flux"

const userService = new UserService()

function receiveAssesments(assessments) {
  return {
    type: AppActions.RECEIVE_ASSESSMENTS,
    assessments,
  }
}

function receiveAssesmentsFailed() {
  return {
    type: AppActions.RECEIVE_ASSESSMENTS_FAILED,
  }
}

function receiveAssessmentsBegin() {
  return {
    type: AppActions.RECEIVE_ASSESSMENTS_BEGIN,
  }
}

export function updateProfile(values) {
  return {
    type: AppActions.UPDATE_PROFILE,
    payload: values,
  }
}

function updateProfileFailed() {
  return {
    type: AppActions.UPDATE_PROFILE_FAILED,
  }
}

function dismissProfileView() {
  Actions.Tabbar({ type: ActionConst.RESET })
}

export function getAssessments() {
  return (dispatch) => {
    dispatch(receiveAssessmentsBegin())
    return userService.getAssessments()
      .then((res) => {
        if (res.status === 200) {
          return res.json()
            .then(body => dispatch(receiveAssesments(body.assessments)))
        }
        return dispatch(receiveAssesmentsFailed())
      })
      .catch((e) => {
        dispatch(receiveAssesmentsFailed(e))
      })
  }
}

export function patchProfile(payload) {
  const body = {
    profile: payload,
  }
  return (dispatch) => {
    dispatch(updateProfile(payload))
    dismissProfileView()
    return userService.updateProfile(body)
      .then((res) => {
        if (res.status !== 200) {
          return dispatch(updateProfileFailed())
        }
      })
      .catch((e) => {
        dispatch(updateProfileFailed(e))
      })
  }
}

export function patchUser(body) {
  return (dispatch) => {
    dispatch(updateProfile(body))
    return userService.updateUser(body)
  }
}

export function updateAllowMobileNotifications(allowNotifications) {
  return patchUser({ allow_mobile_notifications: allowNotifications })
}
