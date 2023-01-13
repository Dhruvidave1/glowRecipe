import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1> Our Latest Products </h1>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3> {products.name} </h3> */}
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
