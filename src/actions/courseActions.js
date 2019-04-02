import { Actions, ActionConst } from "react-native-router-flux"
import { AppActions } from "/constants"
import { CourseService } from "/services"
import * as GlobalActions from "/actions/globalActions"

const courseService = new CourseService()

function receiveAnnouncementsBegin() {
  return {
    type: AppActions.RECEIVE_ANNOUNCEMENTS_BEGIN,
  }
}

function receiveAnnouncementsFailed() {
  return {
    type: AppActions.RECEIVE_ANNOUNCEMENTS_FAILED,
  }
}

function receiveAnnouncementsSuccessful(announcements) {
  return {
    type: AppActions.RECEIVE_ANNOUNCEMENTS_SUCCESSFUL,
    announcements,
  }
}

function receiveAssignmentBegin() {
  return {
    type: AppActions.RECEIVE_ASSIGNMENT_BEGIN,
  }
}

function receiveAssignmentFailed() {
  return {
    type: AppActions.RECEIVE_ASSIGNMENT_FAILED,
  }
}

function receiveAssignmentSuccessful(assignment) {
  return {
    type: AppActions.RECEIVE_ASSIGNMENT_SUCCESSFUL,
    assignment,
  }
}

function receiveCourseBegin() {
  return {
    type: AppActions.RECEIVE_COURSE_BEGIN,
  }
}

function receiveCourseFailed() {
  return {
    type: AppActions.RECEIVE_COURSE_FAILED,
  }
}

function receiveCourseSuccessful(course) {
  return {
    type: AppActions.RECEIVE_COURSE_SUCCESSFUL,
    course,
  }
}

function receiveCoursesBegin() {
  return {
    type: AppActions.RECEIVE_COURSES_BEGIN,
  }
}

function receiveCoursesSuccessful(courses) {
  return {
    type: AppActions.RECEIVE_COURSES_SUCCESSFUL,
    courses,
  }
}

export function selectAnnouncement(announcement) {
  Actions.Announcement({ type: ActionConst.RESET })
  return {
    type: AppActions.SELECT_ANNOUNCEMENT,
    announcement,
  }
}

export function selectAssignment(assignment, navigationOptions = {}) {
  Actions.Assignment(navigationOptions)
  return {
    type: AppActions.SELECT_ASSIGNMENT,
    assignment,
    backTitle: navigationOptions.backTitle,
  }
}

export function selectCourse(course) {
  return {
    type: AppActions.SELECT_COURSE,
    course,
  }
}

export function selectCourseById(courseId) {
  return {
    type: AppActions.SELECT_COURSE_BY_ID,
    courseId,
  }
}

function deleteAnnouncementSuccessful(announcementId) {
  return {
    type: AppActions.DELETE_ANNOUNCEMENT,
    announcementId,
  }
}

function markAnnouncementReadFailed(announcementId) {
  return {
    type: AppActions.MARK_ANNOUNCEMENT_READ_STATUS,
    announcementId,
    read: false,
  }
}

function markAnnouncementReadSuccessful(announcementId) {
  return {
    type: AppActions.MARK_ANNOUNCEMENT_READ_STATUS,
    announcementId,
    read: true,
  }
}

function markAnnouncementUnreadFailed(announcementId) {
  return markAnnouncementReadSuccessful(announcementId)
}

function markAnnouncementUnreadSuccessful(announcementId) {
  return markAnnouncementReadFailed(announcementId)
}

export function goToCourse(course) {
  return (dispatch) => {
    dispatch(selectCourse(course))
    return Actions.Tabbar({ type: ActionConst.RESET })
  }
}

export function getCourse(courseId) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader("Loading course data"))
    dispatch(receiveCourseBegin())
    return courseService
      .getCourse(courseId)
      .then((res) => {
        dispatch(GlobalActions.hideLoader())
        if (res.status === 200) {
          return res.json()
                    .then(body => (
                      dispatch(receiveCourseSuccessful(body))
                    ))
        }
        return dispatch(receiveCourseFailed())
      })
  }
}

export function getCourses() {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader("Loading list of courses"))
    dispatch(receiveCoursesBegin())
    return courseService
      .getCourses()
      .then((res) => {
        dispatch(GlobalActions.hideLoader())
        if (res.status === 200) {
          return res.json()
                    .then((body) => {
                      dispatch(receiveCoursesSuccessful(body))
                      if (body.length === 1) {
                        return goToCourse(body[0])
                      }
                      return Actions.Courses({
                        type: ActionConst.RESET,
                      })
                    })
        }
        dispatch(GlobalActions.serverError())
        return Actions.ErrorView()
      })
  }
}

export function deleteAnnouncement(announcementId, navigate = false) {
  return (dispatch) => {
    dispatch(deleteAnnouncementSuccessful(announcementId))
    if (navigate) {
      Actions.Announcements({ type: ActionConst.RESET })
    }
    return courseService.deleteAnnouncement(announcementId)
  }
}

export function getAnnouncements(courseId) {
  return (dispatch) => {
    dispatch(receiveAnnouncementsBegin())
    return courseService
      .getAnnouncements(courseId)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
                    .then(body => (
                      dispatch(receiveAnnouncementsSuccessful(body))
                    ))
        }
        return dispatch(receiveAnnouncementsFailed())
      })
  }
}

export function markAnnouncementRead(courseId, announcementId) {
  const body = {
    course_id: courseId,
    read: true,
  }
  return (dispatch) => {
    dispatch(markAnnouncementReadSuccessful(announcementId))
    return courseService
      .markAnnouncementReadStatus(announcementId, body)
      .then((res) => {
        if (res.status !== 204) {
          return dispatch(markAnnouncementReadFailed(announcementId))
        }
        return true
      })
  }
}

export function markAnnouncementUnread(courseId, announcementId) {
  const body = {
    course_id: courseId,
    read: false,
  }
  return (dispatch) => {
    dispatch(markAnnouncementUnreadSuccessful(announcementId))
    return courseService
      .markAnnouncementReadStatus(announcementId, body)
      .then((res) => {
        if (res.status !== 204) {
          return dispatch(markAnnouncementUnreadFailed(announcementId))
        }
        return true
      })
  }
}

export function getAssignment(assignmentId, courseId, navigate = false) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoader("Refreshing assignment data"))
    dispatch(receiveAssignmentBegin())
    if (navigate) {
      Actions.pop()
    }
    return courseService
      .getAssignment(assignmentId, courseId)
      .then((res) => {
        dispatch(GlobalActions.hideLoader())
        if (res.status === 200) {
          return res.json()
                    .then(body => (
                      dispatch(receiveAssignmentSuccessful(body))
                    ))
        }
        return dispatch(receiveAssignmentFailed())
      })
  }
}
