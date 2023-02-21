import axios from 'axios';
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

// getState allows us to get access to the entire state tree, so we can
//  grab something directly like: getState.productList
export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);
	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		// dispatching an action of type CART_REMOVE_ITEM
		type: CART_REMOVE_ITEM,
		// dispatching payload of type id that was passed into the removeFromCart function
		payload: id,
	});

	// after dispatching, getting the current state of the store and setting cartItems to new cartItems
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		// dispatching an action of type CART_REMOVE_ITEM
		type: CART_SAVE_SHIPPING_ADDRESS,
		// dispatching payload of type id that was passed into the removeFromCart function
		payload: data,
	});

	// after dispatching, getting the current state of the store and setting cartItems to new cartItems
	localStorage.setItem('shippingAddress', JSON.stringify(data));
};
