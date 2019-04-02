import BaseService from "/services/base"
import config from "/services/config"

class GlobalService extends BaseService {

  createMobileUserEvent(body) {
    return super.getToken()
                .then(token => super.post(`${config.api.url}/api/v1/mobile_user_events`, token, body))
  }

  sendDeviceToken(body) {
    return super.getToken()
      .then(token => super.post(`${config.api.url}/api/v1/devices`, token, body))
  }
}

export default GlobalService
