import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()
// not a protected route so we dont need to add 'protect' middleware. Just '/' because this route is just /api/users
router.route('/').post(registerUser)
// here we define GET, POST, PUT etc and then call the controller functions to do the requests for us
router.post('/login', authUser)
// protect middleware is going to run whenever we hit this route
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
