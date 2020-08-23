import { AUTH_ERROR, FETCH_USER } from './types'

const INITIAL_STATE = {
  error: null,
  user: null
}

export function authReducer (state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_USER:
      return handleFetchUser(state, payload)
    case AUTH_ERROR:
      return handleError(state, payload)
    default:
      return state
  }
}

function handleError (state, payload) {
  return {
    ...state,
    error: {
      code: payload.code,
      message: payload.message
    }
  }
}

function handleFetchUser (state, payload) {
  console.log(payload)
  return {
    ...state,
    user: payload
  }
}
