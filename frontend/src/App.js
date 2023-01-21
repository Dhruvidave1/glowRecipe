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

// Arrow function
const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<h1> Fruit-Forward 🍉. Clinically Effective 🧪. Glowing Skin ✨ </h1>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/login' element={<LoginScreen />}></Route>
						<Route path='/register' element={<RegisterScreen />}></Route>
						<Route path='/profile' element={<ProfileScreen />}></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
