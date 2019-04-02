import { AppActions } from "/constants"
import { GlobalService } from "/services"

const globalService = new GlobalService()

export function showLoader(loadingMessage = "") {
  return {
    type: AppActions.SHOW_SPINNER,
    loadingMessage,
  }
}

export function hideLoader() {
  return {
    type: AppActions.HIDE_SPINNER,
  }
}

export function togglePageScroll(isAllowedScroll) {
  return {
    type: AppActions.TOGGLE_PAGE_SCROLL,
    isAllowedScroll,
  }
}

export function connectionError(isInternetConnected) {
  return {
    type: AppActions.CONNECTION_ERROR,
    isInternetConnected,
  }
}

export function serverError() {
  return {
    type: AppActions.SERVER_ERROR,
  }
}

export function recordMobileUserEvent(type, data = {}, courseId) {
  const body = {
    type,
    course_id: courseId,
    data,
  }

  return dispatch => globalService.createMobileUserEvent(body)
}
