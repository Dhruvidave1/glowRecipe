//This syntax is common JS, in front end we are using import syntax which is es modules
const express = require('express')
const products = require('./data/products')
const app = express()
app.get('/', (req, res) => {
  res.send('API is running')
})

// to send all products
app.get('/api/products', (req, res) => {
  //this will convert it to JSON content type even tho this file is javascript objects
  res.json(products)
})

//to send one specific product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('server running on port 5000'))
