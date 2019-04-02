import { AppActions } from '/constants'

const initialState = {
  allowNotifications: false,
  email: undefined
}

export default function integrationReducer (state = initialState, action) {
  switch (action.type) {

    case AppActions.RECEIVE_INTEGRATION_STATUS:
      return {
        ...state,
        allowNotifications: action.allowNotifications,
        email: action.profile.primary_email
      }
    case AppActions.RECEIVE_INTEGRATION_STATUS_FAILED:
      return state
    case AppActions.UPDATE_INTEGRATION_NOTIFICATION_PERMISSION:
      return {
        ...state,
        allowNotifications: action.allowNotifications
      }
    case AppActions.UPDATE_INTEGRATION_NOTIFICATION_PERMISSION_FAILED:
      return state
    case AppActions.DELETE_INTEGRATION:
      return {
        ...state,
        allowNotifications: false,
        email: undefined
      }
    case AppActions.DELETE_INTEGRATION_FAILED:
      return state

    default:
      return state
  }
}
