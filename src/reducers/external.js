import { AppActions } from "/constants"

export const initialState = {
}

export default function externalReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.LOGOUT: {
      return initialState
    }
    case AppActions.UPDATE_EXTERNAL: {
      const { type, ...data } = action
      return {
        ...state,
        ...data,
      }
    }
    case AppActions.SELECT_ANNOUNCEMENT: {
      return {
        ...state,
        announcement_id: undefined,
        course_id: undefined,
      }
    }
    case AppActions.SELECT_ASSIGNMENT: {
      return {
        ...state,
        assignment_id: undefined,
        course_id: undefined,
      }
    }
    default:
      return state
  }
}
