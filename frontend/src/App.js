import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

// Arrow function
const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<h1> Fruit-Forward ๐. Clinically Effective ๐งช. Glowing Skin โจ </h1>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/login' element={<LoginScreen />}></Route>
						<Route path='/register' element={<RegisterScreen />}></Route>
						<Route path='/profile' element={<ProfileScreen />}></Route>
						<Route path='/cart/:id?' element={<CartScreen />}></Route>
						<Route path='/login/shipping' element={<ShippingScreen />}></Route>
						<Route path='/payment' element={<PaymentScreen />}></Route>
						<Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
