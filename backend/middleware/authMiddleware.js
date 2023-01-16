import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//add protect to whichever route we want to protect now
// once user logs in: back end will send a token
// then when user tries to access their profile, we will first check if they have a valid token (which they need to access protected routes)
// if token is valid, we will assign req.user to the user from the database, and now we can access all their data through that
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    //token that is coming in from postman (front-end)(which was initially sent from the back end)
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //splitting to remove the word 'Bearer'
      token = req.headers.authorization.split(' ')[1]
      //decoding, will give us something like { id: '63c452688a0cbcee04b32432', iat: 1673893669, exp: 1676485669 }
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //now based on the id we got above, we will find that user from the database, and set our req.user to that user
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
