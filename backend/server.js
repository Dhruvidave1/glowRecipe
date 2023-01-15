//This syntax is common JS, in front end we are using import syntax which is es modules
// convert from common JS to ES modules
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const PORT = process.env.PORT || 5000
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

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
)
