import BaseService from "/services/base"
import config from "/services/config"

export default class UserService extends BaseService {

  updateProfile(body) {
    return super.getToken()
      .then(token => super.patch(`${config.api.url}/api/v1/users/update_profile`, token, body))
  }

  updateUser(body) {
    return super.getToken()
      .then(token => super.patch(`${config.api.url}/api/v1/users/-1`, token, body))
  }
}
