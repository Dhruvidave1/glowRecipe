import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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
