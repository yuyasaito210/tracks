import { AppActions } from "/constants"

export function updateExternalData(data) {
  return {
    type: AppActions.UPDATE_EXTERNAL,
    ...data,
  }
}
