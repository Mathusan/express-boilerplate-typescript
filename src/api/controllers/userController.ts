import { Request, Response , NextFunction } from "express"


const {signUp} = require('../../services/userService')


const userController = {
    registerUser : async (req :Request,res : Response,next : NextFunction) =>{
        try {
            const {name,email,password} = req.body
            const {data} = await signUp({name,email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
       

    },
    loginUser  : async (req : Request,res : Response,next : NextFunction) =>{
        try {
            const {email,password} = req.body
            const {data} = await userService.login({email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default  userController