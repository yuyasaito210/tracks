import { AppActions } from "/constants"

export const initialState = {
  assessments: [],
  assignments: [],
  assessmentsLoading: false,
  profile: {},
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    case AppActions.LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload.profile,
        },
      }
    case AppActions.LOGOUT: {
      return initialState
    }
    case AppActions.PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload.profile,
        },
      }
    case AppActions.RECEIVE_ASSESSMENTS:
      return {
        ...state,
        assessments: action.assessments.filter(
          assessment => assessment.assignment_id === undefined
        ),
        assignments: action.assessments.filter(
          assessment => assessment.assignment_id !== undefined
        ),
        assessmentsLoading: false,
      }
    case AppActions.RECEIVE_ASSESSMENTS_BEGIN:
      return {
        ...state,
        assessmentsLoading: true,
      }
    case AppActions.RECEIVE_ASSESSMENTS_FAILED:
      return {
        ...state,
        assessmentsLoading: false,
      }
    case AppActions.UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
      }
    case AppActions.UPDATE_PROFILE_FAILED:
      return state
    case AppActions.ACTIVATION_SUCCESSFUL:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload.profile,
        },
      }
    default:
      return state
  }
}
