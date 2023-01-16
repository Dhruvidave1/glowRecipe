import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
    localStorage.setItem('userInfo', JOSN.stringify(data))
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
