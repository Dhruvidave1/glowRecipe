// script we can run to import data
// this file isn't connected to the server in any way, its completely seperate
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

// returns a promise so has to be async - dealing with the database (mongoose)
const importData = async () => {
  try {
    // wiping out the database before importing anything, because we dont want to import if the database already has something in it
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // an array of all the imported users
    const createdUsers = await User.insertMany(users)
    // the first user is an admin, so we are storing the _id of the admin user
    const adminUser = createdUsers[0]._id
    // products imported, mapping through them and adding admin user to each one
    const sampleProducts = products.map((product) => {
      // for each product, return everything that is in the product already (spread operator ... will spread across all the data already there)
      // in addition to that add to the user field: adminUser from above
      // all the products with an addition of adminUser assigned to the user field
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // wiping out the database before importing anything, because we dont want to import if the database already has something in it
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

// if command line says node backend/seeder -d then destroy data, else import data
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
