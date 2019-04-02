import { AsyncStorage } from "react-native"
import { AuthService } from "/services"
import { AppActions } from "/constants"
import { Actions, ActionConst } from "react-native-router-flux"
import * as GlobalActions from "/actions/globalActions"
import bugsnag from "/lib/bugsnag"

const authService = new AuthService()

export function internetConnection(hasInternetConnection) {
  return (dispatch) => {
    dispatch(GlobalActions.connectionError(hasInternetConnection))
    hasInternetConnection
    ? Actions.Tabbar({ type: ActionConst.RESET })
    : Actions.ErrorView({ type: ActionConst.RESET })
  }
}

function authSuccessfull(profile) {
  return {
    type: AppActions.LOGIN_SUCCESS,
    payload: {
      profile,
    },
  }
}
export function completeReset() {
  return {
    type: AppActions.COMPLETE_RESET,
  }
}

function userLogout() {
  return {
    type: AppActions.LOGOUT,
  }
}

function profileSuccessfull(profile) {
  return {
    type: AppActions.PROFILE_SUCCESS,
    payload: {
      profile,
    },
  }
}

function saveToken(token, email) {
  AsyncStorage.setItem("authToken", token)
  AsyncStorage.setItem("authHeader", `Token token=${token}, email=${email}`)
    .then(() => {
      Actions.Tabbar({ type: ActionConst.RESET })
    })
}

function authFailed(error) {
  return {
    type: AppActions.LOGIN_FAILED,
    payload: {
      error,
    },
  }
}

function profileFailed(error) {
  return {
    type: AppActions.PROFILE_FAILED,
    payload: {
      error,
    },
  }
}

function resetPasswordSuccessfull() {
  return {
    type: AppActions.RESET_PASSWORD_SUCCESS,
  }
}

function resetPasswordFailed() {
  return {
    type: AppActions.RESET_PASSWORD_FAILED,
  }
}

function createAccountSuccessfull() {
  return {
    type: AppActions.CREATE_ACCOUNT_SUCCESS,
  }
}

function createAccountFailed() {
  return {
    type: AppActions.CREATE_ACCOUNT_FAILED,
  }
}
function sessionTokenRequestSuccess() {
  return {
    type: AppActions.SESSION_TOKEN_SUCCESS,
  }
}

function sessionTokenRequestFailure() {
  return {
    type: AppActions.SESSION_TOKEN_FAILURE,
  }
}

function deviceRegistrationSuccessful() {
  return {
    type: AppActions.DEVICE_REGISTERED,
  }
}

function deviceRegistrationFailed() {
  return {
    type: AppActions.DEVICE_REGISTERED_FAILED,
  }
}

function deviceUnregistrationSuccessful() {
  return {
    type: AppActions.DEVICE_UNREGISTERED,
  }
}

function deviceUnregistrationFailed() {
  return {
    type: AppActions.DEVICE_UNREGISTERED_FAILED,
  }
}

function saveActivationInfo(token, email) {
  AsyncStorage.removeItem("isActivating")
  AsyncStorage.setItem("authToken", token)
  AsyncStorage.setItem("authHeader", `Token token=${token}, email=${email}`)
    .then(() => {
      Actions.Profile({ type: ActionConst.RESET })
    })
}

function activateAccountSuccessful(profile) {
  return {
    type: AppActions.ACTIVATION_SUCCESSFUL,
    payload: {
      profile,
    },
  }
}

function activateAccountFailed() {
  return {
    type: AppActions.ACTIVATION_FAILED,
  }
}

function setBugSnagInfo(firstName, lastName) {
  AsyncStorage.getItem("authHeader")
    .then((token) => {
      if (!token) {
        return
      }
      const matches = token.match(/email=(.+)/)
      bugsnag.setUser("", `${firstName} ${lastName}`, matches[1])
    })
}

export function oauthLogin(email, token, profileData) {
  return (dispatch) => {
    saveToken(token, email)
    dispatch(authSuccessfull(profileData))
    bugsnag.setUser(`${profileData.id}`, `${profileData.first_name} ${profileData.last_name}`, email)
  }
}

export function login(email, password) {
  const data = {
    user: {
      email,
      password,
    },
  }
  return (dispatch) => {
    authService.login(data)
      .then((res) => {
        return res.json()
          .then((body) => {
            saveToken(body.authentication_token, email)
            dispatch(authSuccessfull(body.profile))
            bugsnag.setUser("", `${body.profile.first_name} ${body.profile.last_name}`, email)
          })
      })
      .catch((e) => {
        dispatch(authFailed(e))
        dispatch(GlobalActions.serverError())
        Actions.ErrorView()
      })
  }
}

export function getUserProfile() {
  return (dispatch) => {
    authService.getProfile()
      .then((res) => {
        return res.json()
          .then((body) => {
            dispatch(profileSuccessfull(body.profile))
            setBugSnagInfo(body.profile.first_name, body.profile.last_name)
          })
      })
      .catch(e => {
        dispatch(profileFailed(e))
      })
  }
}

export function resetPassword(email) {
  const data = {
    email,
  }
  return (dispatch) => {
    authService.resetPassword(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(resetPasswordSuccessfull())
        } else {
          dispatch(resetPasswordFailed())
        }
      })
      .catch(e => {
        dispatch(resetPasswordFailed())
        dispatch(GlobalActions.serverError())
        Actions.ErrorView()
      })
  }
}
export function createAccount(firstname, lastname, email) {
  const data = {
    user: {
      email,
    },
    profile: {
      first_name: firstname,
      last_name: lastname,
    },
  }
  return (dispatch) => {
    authService.createAccount(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(createAccountSuccessfull())
        } else {
          dispatch(createAccountFailed())
          dispatch(GlobalActions.serverError())
          Actions.ErrorView()
        }
      })
      .catch(e => {
        dispatch(createAccountFailed())
        dispatch(GlobalActions.serverError())
        Actions.ErrorView()
      })
  }
}

export function getSessionToken() {
  return (dispatch) => {
    AsyncStorage.getItem("authHeader")
      .then((token) => {
        if (token) {
          Actions.Tabbar({ type: ActionConst.RESET })
          dispatch(sessionTokenRequestSuccess(token))
        } else {
          dispatch(sessionTokenRequestFailure())
          Actions.Login({ type: ActionConst.RESET })
        }
      })

      .catch((e) => {
        dispatch(sessionTokenRequestFailure(e))
        Actions.Login({ type: ActionConst.RESET })
      })
  }
}

export function logout() {
  return (dispatch) => {
    AsyncStorage.getItem("deviceId").then((token) => {
      authService.unregisterDevice(token)
      AsyncStorage.removeItem("deviceId")
    }).then(() =>
      AsyncStorage.removeItem("authHeader")
        .then(() => {
          dispatch(userLogout())
          bugsnag.clearUser()
          Actions.Login({ type: ActionConst.RESET })
        })

        .catch((e) => {
          dispatch(GlobalActions.serverError())
          Actions.ErrorView()
          console.log(e)
        }))
  }
}

export function registerDevice(deviceToken, platform) {
  const body = {
    device_token: deviceToken,
    device_type: platform,
  }
  return (dispatch) => {
    authService.registerDevice(body)
      .then((res) => {
        if (res.status === 201) {
          return dispatch(deviceRegistrationSuccessful())
        }
        return dispatch(deviceRegistrationFailed())
      })
      .catch(e => (
        dispatch(deviceRegistrationFailed(e))
      ))
  }
}

export function unregisterDevice(deviceToken) {
  return (dispatch) => {
    authService.unregisterDevice(deviceToken)
      .then((res) => {
        if (res.status === 200) {
          return dispatch(deviceUnregistrationSuccessful())
        }
        return dispatch(deviceUnregistrationFailed())
      })
      .catch((e) => {
        dispatch(deviceUnregistrationFailed(e))
      })
  }
}

export function activateAccount(id, token, password, passwordConfirmation) {
  const data = {
    token,
    password,
    password_confirmation: passwordConfirmation,
  }
  return (dispatch) => {
    dispatch(GlobalActions.showLoader())
    authService.activateAccount(id, data)
      .then((res) => {
        if (res.status === 201) {
          res.json().then((body) => {
            saveActivationInfo(body.authentication_token, body.email)
            dispatch(GlobalActions.hideLoader())
            dispatch(activateAccountSuccessful(body.profile))
          })
        } else {
          dispatch(activateAccountFailed())
          dispatch(GlobalActions.serverError())
          Actions.ErrorView()
        }
      })
      .catch(e => {
        dispatch(GlobalActions.hideLoader())
        dispatch(activateAccountFailed())
        dispatch(GlobalActions.serverError())
        Actions.ErrorView()
      })
  }
}
