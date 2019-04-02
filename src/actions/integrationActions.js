import { AppActions } from '/constants'
import { IntegrationService } from '/services'

const integrationService = new IntegrationService()

function receiveIntegrationStatus (profile, allowNotifications) {
  return {
    type: AppActions.RECEIVE_INTEGRATION_STATUS,
    profile,
    allowNotifications
  }
}

function receiveIntegrationStatusFailed () {
  return {
    type: AppActions.RECEIVE_INTEGRATION_STATUS_FAILED
  }
}

function updateIntegrationNotificationPermissionSuccessful (allowNotifications) {
  return {
    type: AppActions.UPDATE_INTEGRATION_NOTIFICATION_PERMISSION,
    allowNotifications
  }
}

function updateIntegrationNotificationPermissionFailed () {
  return {
    type: AppActions.UPDATE_INTEGRATION_NOTIFICATION_PERMISSION_FAILED
  }
}

function deleteIntegrationSuccessful () {
  return {
    type: AppActions.DELETE_INTEGRATION
  }
}

function deleteIntegrationFailed () {
  return {
    type: AppActions.DELETE_INTEGRATION_FAILED
  }
}

export function getIntegrationStatus () {
  return (dispatch) => {
    integrationService.getIntegrationStatus()
      .then((res) => {
        if (res.status === 200) {
          return res.json()
            .then((body) => {
              dispatch(receiveIntegrationStatus(body.integration_profile, body.allow_notifications))
            })
        }
        return dispatch(receiveIntegrationStatusFailed())
      })
      .catch((e) => {
        dispatch(receiveIntegrationStatusFailed(e))
      })
  }
}

export function updateIntegrationNotificationPermission (allowNotifications) {
  const body = {
    allow_mobile_notifications: allowNotifications
  }
  return (dispatch) => {
    integrationService.updateIntegration(body)
      .then((res) => {
        if (res.status === 200) {
          dispatch(updateIntegrationNotificationPermissionSuccessful(allowNotifications))
        } else {
          updateIntegrationNotificationPermissionFailed()
        }
      })
      .catch((e) => {
        dispatch(updateIntegrationNotificationPermissionFailed(e))
      })
  }
}

export function deleteIntegration () {
  return (dispatch) => {
    integrationService.deleteIntegration()
      .then((res) => {
        if (res.status === 200) {
          dispatch(deleteIntegrationSuccessful())
        } else {
          dispatch(deleteIntegrationFailed())
        }
      })
      .catch((e) => {
        dispatch(deleteIntegrationFailed(e))
      })
  }
}
