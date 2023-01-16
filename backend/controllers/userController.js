import User from '../models/userModel.js'
// installed asyncHandler to handle errors
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access Public
// POST request to send back whatever is being sent from the front end
const authUser = asyncHandler(async (req, res) => {
  // data that is being sent from front end
  const { email, password } = req.body
  // finding a user whose email matches the email coming from front end
  const user = await User.findOne({ email: email })

  if (user && (await user.matchPassword(password))) {
    // if user exists, and password matches, we will send this data back
    // token has user id embedded in it as the payload
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
  res.send({ email, password })
})

// @desc    Register a new user
// @route   POST /api/users
// @access Public
// PUT request to register a new user
const registerUser = asyncHandler(async (req, res) => {
  // data that is being sent from front end
  const { name, email, password } = req.body
  // finding a user whose email matches the email coming from front end
  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists with this email')
  }

  //this create will already call the .pre and .save method in userModel which will hash the password before saving
  const user = await User.create({ name, email, password })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // also send the token back because we want to be able to authenticate right after we register
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  res.send({ email, password })
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  private
// we will only get to this function if the user passes the protection function
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('user not found')
  }
})
export { authUser, getUserProfile, registerUser }
