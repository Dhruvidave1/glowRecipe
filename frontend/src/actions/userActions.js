import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'

// login action that is going to make a request to login and get the token
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    //data is the data backend is going to send back when we make this post request {user id, name, email, token, isAdmin etc.}
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    // we want to send this daya as the payload for success
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    // and also set this data in localStorage as userInfo(includes the token recieved)
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    //data is the data backend is going to send back when we make this post request {user id, name, email, token, isAdmin etc.}
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    // we want to send this daya as the payload for success
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    // to login the user right after registration
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    // and also set this data in localStorage as userInfo(includes the token recieved)
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
