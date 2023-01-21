import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
	const dispatch = useDispatch();
	// productList is what we called this reducer in the store
	// we want the productList part of the state
	const productList = useSelector((state) => state.productList);
	// destructure to pull out what we want from productList
	const { loading, error, products } = productList;

	//as soon as the page loads this gets called
	useEffect(() => {
		// makes request to backend to get products
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<h1> Our Latest Products </h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant={'danger'}>{error}</Message>
			) : (
				<Row>
					{products.map((products) => (
						// key is to make sure each thing in the list has a unique id [fixing the error]
						<Col key={products._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={products} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
