import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { combineReducers } from 'redux'
import { authReducer } from './auth/store/reducer';


const rootReducer = combineReducers({
  auth: authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunk,
  logger

]

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
))

export default { store }