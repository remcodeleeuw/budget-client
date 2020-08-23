import axios from 'axios'
import { AUTH_ERROR, FETCH_USER } from './types'

const BASE_API = 'http://localhost:5001/user'

export function handleError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

function handleFetchUser (props) {
  return {
    type: FETCH_USER,
    payload: props
  }
}

export function createUser (user) {
  return async function (dispatch) {
    try {
      await axios.post(`${BASE_API}`, user)
    } catch (error) {
      dispatch(handleError(error))
    }
  }
}

export function loginUser (props) {
  return async function (dispatch) {
    try {
      await axios.post(`${BASE_API}/login`, props,
        { withCredentials: true }
      )
      dispatch(getUser())
    } catch (error) {
      console.log(error.message)
      dispatch(handleError(error))
      throw Error('Could not login')
    }
  }
}

export function logoutUser () {
  return async function (dispatch) {
    try {
      await axios.get(`${BASE_API}/logout`,
        { withCredentials: true }
      )
      dispatch(getUser())
    } catch (error) {
      console.log(error)
    }
  }
}

export const getUser = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${BASE_API}/current`,
        { withCredentials: true }
      )
      dispatch(handleFetchUser(data.user))
    } catch (error) {
      console.log('hoi')

      console.log(error)
    }
  }
}
