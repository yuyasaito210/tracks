import { AppActions } from "/constants"

export const initialState = {
  activityData: {
    late_assignments: "N/A",
    missing_assignments: "N/A",
  },
  announcements: [],
  assignments: [],
  courses: [],
  gradeData: {
    current_grade: "N/A",
  },
  isLoadingCourseData: false,
  isRefreshingAssignment: false,
  isRefreshingAnnouncements: false,
  needsCourseData: false,
  plannerItems: [],
  selectedAnnouncement: {},
  selectedAssignment: {},
  selectedCourse: {},
}

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.LOGOUT: {
      return initialState
    }
    case AppActions.MARK_ANNOUNCEMENT_READ_STATUS: {
      return {
        ...state,
        announcements: state.announcements.map((announcement) => {
          if (announcement.id !== action.announcementId) {
            return announcement
          }
          announcement.read = action.read
          return announcement
        }),
      }
    }
    case AppActions.DELETE_ANNOUNCEMENT: {
      return {
        ...state,
        announcements: state.announcements.filter(announcement => announcement.id !== action.announcementId),
      }
    }
    case AppActions.RECEIVE_ANNOUNCEMENTS_BEGIN: {
      return {
        ...state,
        isRefreshingAnnouncements: true,
      }
    }
    case AppActions.RECEIVE_ANNOUNCEMENTS_FAILED: {
      return {
        ...state,
        isRefreshingAnnouncements: false,
      }
    }
    case AppActions.RECEIVE_ANNOUNCEMENTS_SUCCESSFUL: {
      return {
        ...state,
        announcements: action.announcements,
        isRefreshingAnnouncements: false,
      }
    }
    case AppActions.RECEIVE_ASSIGNMENT_BEGIN: {
      return {
        ...state,
        isRefreshingAssignment: true,
      }
    }
    case AppActions.RECEIVE_ASSIGNMENT_FAILED: {
      return {
        ...state,
        isRefreshingAssignment: false,
      }
    }
    case AppActions.RECEIVE_ASSIGNMENT_SUCCESSFUL: {
      const selectedAssignment = state.selectedAssignment.id === action.assignment.id ? action.assignment : state.selectedAssignment
      return {
        ...state,
        assignments: state.assignments.filter(assignment => assignment.id !== action.assignment.id).concat(action.assignment),
        isRefreshingAssignment: false,
        selectedAssignment,
      }
    }
    case AppActions.RECEIVE_COURSE_BEGIN: {
      return {
        ...state,
        isLoadingCourseData: true,
      }
    }
    case AppActions.RECEIVE_COURSE_FAILED: {
      return {
        ...state,
        isLoadingCourseData: false,
        needsCourseData: false,
      }
    }
    case AppActions.RECEIVE_COURSE_SUCCESSFUL: {
      const selectedCourse = state.courses.find(c => c.id === action.course.id) || {}
      return {
        ...state,
        activityData: action.course.activity_data,
        announcements: action.course.announcements,
        assignments: action.course.assignments,
        isLoadingCourseData: false,
        gradeData: action.course.grades,
        needsCourseData: false,
        plannerItems: action.course.planner_items,
        selectedCourse: {
          ...selectedCourse,
          courseUpdatedAt: Date.now(),
        },
      }
    }
    case AppActions.RECEIVE_COURSES_BEGIN: {
      return {
        ...state,
        courses: initialState.courses,
      }
    }
    case AppActions.RECEIVE_COURSES_SUCCESSFUL: {
      return {
        ...state,
        courses: action.courses,
      }
    }
    case AppActions.SELECT_ANNOUNCEMENT: {
      return {
        ...state,
        selectedAnnouncement: action.announcement,
      }
    }
    case AppActions.SELECT_ASSIGNMENT: {
      return {
        ...state,
        customBackTitle: action.backTitle,
        selectedAssignment: action.assignment,
      }
    }
    case AppActions.SELECT_COURSE: {
      return {
        ...state,
        needsCourseData: true,
        selectedAnnouncement: {},
        selectedAssignment: {},
        selectedCourse: {
          ...action.course,
          courseUpdatedAt: Date.now(),
        },
      }
    }
    case AppActions.SELECT_COURSE_BY_ID: {
      const course = state.courses.find(c => c.id === action.courseId) || {}
      return {
        ...state,
        selectedAnnouncement: {},
        selectedAssignment: {},
        selectedCourse: course,
      }
    }
    default:
      return state
  }
}
