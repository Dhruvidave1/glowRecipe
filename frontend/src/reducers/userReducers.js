import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants.js'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true } //this is when its still loading and fetching the user for us
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload } //if successful send data in the payload
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload } // if unsuccessful send error in the payload
    case USER_LOGOUT:
      return {}
    default:
      return state //default is sending initial state, empty product list
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true } //this is when its still loading and fetching the user for us
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload } //if successful send data in the payload
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload } // if unsuccessful send error in the payload
    case USER_LOGOUT:
      return {}

    default:
      return state //default is sending initial state, empty product list
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true } //this is when its still loading and fetching the user for us
    case USER_DETAILS_SUCCESS:
      return { loading: false, userInfo: action.payload } //if successful send data in the payload
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload } // if unsuccessful send error in the payload
    case USER_LOGOUT:
      return {}

    default:
      return state //default is sending initial state, empty product list
  }
}
