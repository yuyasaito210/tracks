import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import { createFilter, createBlacklistFilter } from "redux-persist-transform-filter"
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"

import assessment from "/reducers/assessment"
import auth from "/reducers/auth"
import course from "/reducers/course"
import external from "/reducers/external"
import global from "/reducers/global"
import integration from "/reducers/integration"
import user from "/reducers/user"

const courseFilter = createBlacklistFilter(
  "course",
  ["isLoadingCourseData", "isRefreshingAnnouncements", "needsCourseData"],
)

const userFilter = createFilter(
  "user",
  ["profile"],
)

const rootPersistConfig = {
  key: "root",
  stateReconciler: autoMergeLevel2,
  storage,
  blacklist: ["assessment", "external", "global"],
  transforms: [courseFilter, userFilter],
}

const coursePersistConfig = {
  key: "course",
  stateReconciler: autoMergeLevel2,
  storage,
  blacklist: ["isLoadingCourseData", "isRefreshingAnnouncements", "needsCourseData"],
}

const userPersistConfig = {
  key: "user",
  stateReconciler: autoMergeLevel2,
  storage,
  whitelist: ["profile"],
}

const rootReducer = combineReducers({
  assessment,
  auth,
  course: persistReducer(coursePersistConfig, course),
  external,
  global,
  integration,
  user: persistReducer(userPersistConfig, user),
})

export default persistReducer(rootPersistConfig, rootReducer)
