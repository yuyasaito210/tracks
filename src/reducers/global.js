import { AppActions } from "/constants"

const initialState = {
  error: "",
  isAllowedScroll: true,
  isInternetConnected: true,
  isLoading: false,
  loadingMessage: "",
}

export default function globalReducer(state = initialState, action) {
  switch (action.type) {

    case AppActions.SHOW_SPINNER:
      return {
        ...state,
        isLoading: true,
        loadingMessage: action.loadingMessage,
      }
    case AppActions.HIDE_SPINNER:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
      }
    case AppActions.TOGGLE_PAGE_SCROLL:
      return {
        ...state,
        isAllowedScroll: action.isAllowedScroll,
      }
    case AppActions.CONNECTION_ERROR:
      return {
        ...state,
        error: "connection",
        isInternetConnected: action.isInternetConnected,
      }
    case AppActions.SERVER_ERROR:
      return {
        ...state,
        error: "server",
      }

    default:
      return state
  }
}
