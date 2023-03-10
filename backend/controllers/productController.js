import Product from '../models/productModel.js'
// installed asyncHandler to handle errors
import asyncHandler from 'express-async-handler'

// to send all products
// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  // find method with an empty object will return everything
  // returns a promise so async await
  const products = await Product.find({})
  //this will convert it to JSON content type even tho this file is javascript objects
  res.json(products)
})

//to send one specific product by id
// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    //   new error object created, this will be handled by errorHandler
    throw new Error('Product not found')
  }
})

export { getProductById, getProducts }
