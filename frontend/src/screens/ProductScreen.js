import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProductScreen = (history) => {
	// quantity is a part of component level state, so for that we have to use useState()
	const [qty, setQty] = useState(1);

	const params = useParams();
	const dispatch = useDispatch();
	// get product data
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	//as soon as the page loads this gets called
	useEffect(() => {
		dispatch(listProductDetails(params.id));
	}, [dispatch]);

	const addToCartHandler = () => {
		history.push(`/cart/${params.id}?qty=${qty}`);
	};
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant={'danger'}>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>

					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
							<ListGroup.Item>
								Quantity in stock: {product.countInStock}
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<strong>${product.price}</strong>
										<Col></Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<strong>
											{product.countInStock > 0
												? 'In Stock 😍'
												: 'Out of Stock 😓'}
										</strong>
										<Col></Col>
									</Row>
								</ListGroup.Item>

								{/* && means then --> if this is true then do this */}
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													className='form-select'
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}
												>
													{/* if count in stock = 5, then [0,1,2,3,4] is the array
                          then we can map through this, and display an option with key & value & displayed text */}
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className='btn btn-lg btn-primary btn-info'
										type='button'
										disabled={(product.countInStock = 0)}
									>
										Add to cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
