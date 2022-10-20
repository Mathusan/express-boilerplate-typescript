import express, {Router} from 'express'

import {registerUser,loginUser, protectedRoute} from '../controllers/userController'
import {auth} from '../middlewares/auth'


const userRouter : Router = express.Router()


userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

// userRouter.post('/token',auth,protectedRoute)


//add test protected route 
userRouter.get('/private', auth ,protectedRoute)
export default userRouter

