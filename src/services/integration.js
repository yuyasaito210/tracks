import BaseService from '/services/base'
import config from '/services/config'

class IntegrationService extends BaseService {

  getIntegrationStatus () {
    return super.getToken()
      .then(token => super.get(`${config.api.url}/api/v1/bearface/status`, token))
  }

  updateIntegration (body) {
    return super.getToken()
      .then(token => super.put(`${config.api.url}/api/v1/bearface`, token, body))
  }

  deleteIntegration () {
    return super.getToken()
      .then(token => super.del(`${config.api.url}/api/v1/bearface`, token))
  }
}

export default IntegrationService
