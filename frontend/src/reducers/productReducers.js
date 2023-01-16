import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from '../constants/productConstants'
// product list reducer to handle state for product list that can be seen on the home page
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] } //this is when its still loading and fetching the products for us
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload } //if successful send data in the payload
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload } // if unsuccessful send error in the payload
    default:
      return state //default is sending initial state, empty product list
  }
}

// Step 2:
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state } //this is when its still loading and fetching the products for us
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload } //if successful send data in the payload
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload } // if unsuccessful send error in the payload
    default:
      return state //default is sending initial state, empty product object with empty reviews list
  }
}
