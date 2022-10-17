import express, {Router} from 'express'

import userController from '../controllers/userController'

const userRouter : Router = express.Router()


userRouter.post('/register',userController.registerUser)
userRouter.post('/login',userController.loginUser)


export default userRouter

