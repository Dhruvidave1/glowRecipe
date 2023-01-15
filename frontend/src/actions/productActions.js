import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from '../constants/productConstants'
import axios from 'axios'

// instead of fetching data through the fetch request, we are going to get it using this action
//  then dispatch actions to the reducer
//  these functions are action creators, the PRODUCT_LIST_SUCCESS etc are actual actions
export const listProducts = () => async (dispatch) => {
  // redux thunk allows us to add a functoin within a function
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get('/api/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
