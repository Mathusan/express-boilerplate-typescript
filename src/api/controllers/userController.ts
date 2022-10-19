import { Request, Response , NextFunction } from "express"


const {signUp, logIn} = require('../../services/userService')



export const registerUser = async (req :Request,res : Response,next : NextFunction) =>{
        try {
            const {name,email,password} = req.body
            const {data} = await signUp({name,email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }

export const loginUser = async (req : Request,res : Response,next : NextFunction) =>{
        try {
            const {email,password} = req.body
            const {data} = await logIn({email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }
