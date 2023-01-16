import express from 'express'
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// here we define GET, POST, PUT etc and then call the controller functions to do the requests for us
router.post('/login', authUser)
// protect middleware is going to run whenever we hit this route
router.route('/profile').get(protect, getUserProfile)

export default router
