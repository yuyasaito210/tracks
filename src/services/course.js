import BaseService from "/services/base"
import config from "/services/config"

export default class CourseService extends BaseService {
  deleteAnnouncement(announcementId) {
    return super.getToken()
                .then(token => super.del(`${config.api.url}/api/v1/mobile_announcements/${announcementId}`, token))
  }

  getAnnouncements(courseId) {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/courses/${courseId}/announcements`, token))
  }

  getAssignment(assignmentId, courseId) {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/courses/${courseId}/assignments/${assignmentId}`, token))
  }

  getCourses() {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/courses`, token))
  }

  getCourse(courseId) {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/courses/${courseId}`, token))
  }

  markAnnouncementReadStatus(announcementId, body) {
    return super.getToken()
      .then(token => super.patch(`${config.api.url}/api/v1/mobile_announcements/${announcementId}`, token, body))
  }
}
