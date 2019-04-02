import AssessmentAttempt from "assessment-js"
import { AppActions } from "/constants"

export const initialState = {
  areAnswersSubmitting: false,
  assignmentId: undefined,
  currentPage: 1,
  currentSection: 0,
  sectionsCount: 0,
  courseId: undefined,
  assessment: {},
  assessmentIntro: {},
  assessmentResults: {},
  dynamicData: {},
  isCompletingAssessment: false,
  isGuidedLearning: false,
  isWaitingOnDynamicData: false,
  isWBA: false,
  title: "",
  feedBackList: [],
  currentFeedback: "",
  isNextPageAllowed: true,
  isResultsPageAllowed: false,
  answersList: {},
  instantFeedbackResponses: {},
  standardResponses: {},
  showInstantFeedback: false,
  showGlossary: false,
  showTOC: false,
  priorityData: [
    {
      type: "Financial",
      icon: "Dimensions_Financial",
      satisfaction: 0,
      confidence: 0,
      color: "#93CD8E",
    },
    {
      type: "Emotional",
      icon: "Dimensions_Emotional",
      satisfaction: 0,
      confidence: 0,
      color: "#EA526F",
    },
    {
      type: "Social",
      icon: "Dimensions_Social",
      satisfaction: 0,
      confidence: 0,
      color: "#1BAAC7",
    },
    {
      type: "Physical",
      icon: "Dimensions_Physical",
      satisfaction: 0,
      confidence: 0,
      color: "#2F3C47",
    },
    {
      type: "Environmental",
      icon: "Dimensions_Environmental",
      satisfaction: 0,
      confidence: 0,
      color: "#17AB9F",
    },
    {
      type: "Intellectual",
      icon: "Dimensions_Intellectual",
      satisfaction: 0,
      confidence: 0,
      color: "#FFD05B",
    },
    {
      type: "Spiritual",
      icon: "Dimensions_Spiritual",
      satisfaction: 0,
      confidence: 0,
      color: "#EE6A3C",
    },
    {
      type: "Occupational",
      icon: "Dimensions_Occupational",
      satisfaction: 0,
      confidence: 0,
      color: "#B377BE",
    },
  ],
}

export default function assessmentReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.LOGOUT: {
      return initialState
    }

    case AppActions.ASSESSMENT_COMPLETING_ATTEMPT_COMPLETE: {
      return {
        ...state,
        assessment: new AssessmentAttempt({
          ...state.assessment.jsonify(),
          completed_at: action.payload.completed_at,
        }),
        isCompletingAssessment: false,
      }
    }

    case AppActions.ASSESSMENT_COMPLETING_ATTEMPT_STARTING: {
      return {
        ...state,
        isCompletingAssessment: true,
      }
    }

    case AppActions.ASSESSMENT_NAVIGATION_SUCCESSFUL: {
      return {
        ...state,
        assessment: new AssessmentAttempt({
          ...state.assessment.jsonify(),
          sections: action.payload.sections,
          lastVisitedPage: action.payload.lastVisitedPage,
          pageDurations: action.payload.pageDurations,
          visitedPages: action.payload.visitedPages,
        }),
        dynamicData: {},
        standardResponses: {},
        isNextPageAllowed: true,
      }
    }

    case AppActions.TOGGLE_NAV_BUTTONS:
      return {
        ...state,
        isNextPageAllowed: action.isEnabled,
      }

    case AppActions.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      }
    }

    case AppActions.SET_INSTANT_FEEDBACK_RESPONSE: {
      return {
        ...state,
        instantFeedbackResponses: {
          ...state.instantFeedbackResponses,
          [action.questionId]: action.value,
        },
        showInstantFeedback: false,
      }
    }

    case AppActions.SET_STANDARD_RESPONSE: {
      return {
        ...state,
        standardResponses: {
          ...state.standardResponses,
          [action.questionId]: action.value,
        },
      }
    }

    case AppActions.ASSESSMENT_CHECK_ANSWERS: {
      return {
        ...state,
        assessment: new AssessmentAttempt({
          ...state.assessment.jsonify(),
          responses: action.payload,
        }),
      }
    }
    case AppActions.ASSESSMENT_SUBMIT_ANSWERS_STARTING: {
      return {
        ...state,
        areAnswersSubmitting: true,
      }
    }
    case AppActions.ASSESSMENT_SUBMIT_ANSWERS_COMPLETE: {
      return {
        ...state,
        areAnswersSubmitting: false,
      }
    }
    case AppActions.SAVE_ANSWER: {
      state.answersList[action.payload.questionId] = action.payload.value
      return {
        ...state,
        currentFeedback: action.payload.feedbackText,
        isNextPageAllowed: true,
      }
    }
    case AppActions.DELETE_ANSWER: {
      state.answersList[action.payload.questionId] = null
      return {
        ...state,
        currentFeedback: "",
        isNextPageAllowed: false,
      }
    }

    case AppActions.CHANGE_PRIORITY_DATA: {
      const index = state.priorityData.findIndex(o => o.type === action.payload.title)
      const newPriorityData = state.priorityData
      newPriorityData[index][action.payload.type] = action.payload.value
      return {
        ...state,
        priorityData: newPriorityData,
      }
    }

    case AppActions.NEW_ASSESSMENT_ATTEMPT: {
      const isGuidedLearning = RegExp("ChapterAssessment").test(action.newAssessmentAttempt.assessment_type)
      const isWBA = action.newAssessmentAttempt.assessment_type === "WellBeingAssessment"
      return {
        ...state,
        assessment: action.newAssessmentAttempt,
        title: action.newAssessmentAttempt.sections[state.currentSection].title,
        isGuidedLearning,
        isWBA,
        feedBackList: [],
        isNextPageAllowed: true,
        answersList: {},
        attemptId: action.newAssessmentAttempt.attempt_id,
      }
    }

    case AppActions.ASSESSMENT_HIDE_GLOSSARY:
      return {
        ...state,
        showGlossary: false,
      }

    case AppActions.ASSESSMENT_HIDE_TOC:
      return {
        ...state,
        showTOC: false,
      }

    case AppActions.ASSESSMENT_INTRO:
      return {
        ...state,
        assessmentIntro: action.assessmentIntro,
        assessmentResults: {},
        assignmentId: action.assessmentInfo.assignment_id,
        courseId: action.assessmentInfo.course_id,
      }
    case AppActions.ASSESSMENT_RESULT_DATA:
      return {
        ...state,
        assessmentResults: action.payload.assessmentResults,
        isResultsPageAllowed: true,
      }

    case AppActions.WAIT_ON_DYNAMIC_DATA:
      return {
        ...state,
        isWaitingOnDynamicData: true,
      }

    case AppActions.ASSESSMENT_DYNAMIC_DATA:
      return {
        ...state,
        dynamicData: action.dynamicData,
        isWaitingOnDynamicData: false,
      }

    case AppActions.ASSESSMENT_DYNAMIC_DATA_FAILED:
      return {
        ...state,
        dynamicData: action.dynamicData,
        isWaitingOnDynamicData: false,
      }

    case AppActions.DISABLE_RESULT_PAGE:
      return {
        ...state,
        isResultsPageAllowed: false,
      }

    case AppActions.ASSESSMENT_SHOW_GLOSSARY:
      return {
        ...state,
        showGlossary: true,
        showTOC: false,
      }

    case AppActions.ASSESSMENT_SHOW_TOC:
      return {
        ...state,
        showGlossary: false,
        showTOC: true,
      }

    case AppActions.ASSESSMENT_VISIT_PAGE: {
      return {
        ...state,
        assessment: new AssessmentAttempt({
          ...state.assessment.jsonify(),
          visitedPages: action.visitedPages,
        }),
      }
    }
    default:
      return state
  }
}
