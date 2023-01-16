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

export { authUser }
