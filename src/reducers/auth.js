import { AppActions } from "/constants"

const initialState = {
  isAuthenticated: false,
  deviceNeedsRegistering: false,
  loginError: false,
  resetPasswordError: false,
  isInitialSignupCompleted: false,
  isResetComplited: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case AppActions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        deviceNeedsRegistering: true,
        loginError: false,
      }
    case AppActions.LOGIN_FAILED:
      return {
        ...state,
        loginError: true,
        isAuthenticated: false,
      }

    case AppActions.LOGOUT: {
      return initialState
    }

    case AppActions.PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginError: false,
      }
    case AppActions.PROFILE_FAILED:
      return {
        ...state,
        isAuthenticated: false,
      }
    case AppActions.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordError: false,
        isResetComplited: true,
      }
    case AppActions.COMPLETE_RESET:
      return {
        ...state,
        isResetComplited: false,
      }
    case AppActions.RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordError: true,
        isResetComplited: false,
      }
    case AppActions.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isInitialSignupCompleted: true,
      }
    case AppActions.CREATE_ACCOUNT_FAILED:
      return {
        ...state,
        isInitialSignupCompleted: false,
      }
    case AppActions.DEVICE_REGISTERED:
      return {
        ...state,
        deviceNeedsRegistering: false,
      }
    case AppActions.DEVICE_REGISTERED_FAILED:
      return {
        ...state,
        deviceNeedsRegistering: true,
      }
    case AppActions.DEVICE_UNREGISTERED:
      return state
    case AppActions.DEVICE_UNREGISTERED_FAILED:
      return state
    case AppActions.ACTIVATION_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: true,
        deviceNeedsRegistering: true,
      }
    case AppActions.ACTIVATION_FAILED:
      return state

    default:
      return state
  }
}
