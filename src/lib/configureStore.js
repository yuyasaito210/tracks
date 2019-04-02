/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from "redux"
import { persistStore } from "redux-persist"
import thunk from "redux-thunk"
import reducer from "/reducers"

export const store = compose(applyMiddleware(thunk)(createStore)(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

export const persistor = persistStore(store)
