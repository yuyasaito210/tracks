import BaseService from '/services/base'
import config from '/services/config'

class AuthService extends BaseService {

  login (data) {
    return super.authPost(`${config.api.url}/api/v1/user_sessions`, data)
  }

  getProfile () {
    return super.getToken()
      .then(token => super.get(`${config.api.url}/api/v1/users/profile`, token))
  }

  resetPassword (data) {
    return super.authPost(`${config.api.url}/api/v1/forgot_passwords`, data)
  }

  createAccount (data) {
    return super.authPost(`${config.api.url}/api/v1/users`, data)
  }

  activateAccount (id, data) {
    return super.authPost(`${config.api.url}/api/v1/users/${id}/activate`, data)
  }

  registerDevice (body) {
    return super.getToken()
      .then(token => super.post(`${config.api.url}/api/v1/devices`, token, body))
  }

  unregisterDevice (id) {
    return super.getToken()
      .then(token => super.del(`${config.api.url}/api/v1/devices/${id}`, token))
  }
}

export default AuthService
