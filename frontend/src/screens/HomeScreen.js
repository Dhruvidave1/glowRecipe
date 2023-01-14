import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  //as soon as the page loads this gets called
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1> Our Latest Products </h1>
      <Row>
        {products.map((products) => (
          // key is to make sure each thing in the list has a unique id [fixing the error]
          <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
