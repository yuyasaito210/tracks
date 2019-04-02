import BaseService from "/services/base"
import config from "/services/config"

class AssessmentService extends BaseService {

  checkAnswers(assessmentId, body) {
    return super.getToken()
                .then(token => super.put(`${config.api.url}/api/v1/assessment_attempts/${assessmentId}/check_answer`, token, body))
  }

  completeAttempt(id) {
    return super
      .getToken()
      .then(token => super.post(`${config.api.url}/api/v1/assessment_attempts/${id}/complete`, token))
  }

  continueAttempt(url) {
    return super.getToken()
                .then(token => super.get(url, token))
  }

  getAssessmentIntro(url) {
    return super.getToken()
                .then(token => super.get(url, token))
  }

  getDynamicData(id, key) {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/assessment_attempts/${id}/dynamic_data?key=${key}`, token))
  }

  getResults(id) {
    return super.getToken()
                .then(token => super.get(`${config.api.url}/api/v1/assessment_attempts/${id}/feedback`, token))
  }

  newAssessmentAttempt(body) {
    return super.getToken()
                .then(token => super.post(`${config.api.url}/api/v1/assessment_attempts`, token, body))
  }

  putAnalytics(id, body) {
    return super.getToken()
                .then(token => super.put(`${config.api.url}/api/v1/assessment_attempts/${id}/record_analytics`, token, body))
  }

  putAnswer(id, body) {
    return super.getToken()
                .then(token => super.put(`${config.api.url}/api/v1/assessment_attempts/${id}/save_response`, token, body))
  }

  visitPage(id, body) {
    return super.getToken()
      .then(token => super.put(`${config.api.url}/api/v1/assessment_attempts/${id}/visit_page`, token, body))
  }
}

export default AssessmentService
