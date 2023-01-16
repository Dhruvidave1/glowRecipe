//This syntax is common JS, in front end we are using import syntax which is es modules
// convert from common JS to ES modules
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const PORT = process.env.PORT || 5000
const app = express()
// will allow us to accept JSON data in the body
// added for POST req to auth users and send a token back
app.use(express.json())
app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// we will add this code just above the app.listen and at the end of all the other routes handling in tha app, therefore if none of them resolved
// or one of them throws an error the next code will be fired off :

// 404 error creator:
app.use(notFound)

//error handling middleware: middleware --> function that has access to request response cycle
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .brightMagenta.bold
  )
)
