import { DocumentDefinition } from 'mongoose'
import userModel from '../models/user.model'
import {IUser} from '../types/user.type'



const userRepository = {
    createUser  : async ({name,email,password,salt} : DocumentDefinition<IUser> ) =>{
        try {

            const user = new userModel({
                name,
                email,
                password,
                salt
            })
            
            const userResult = await user.save()

            return userResult


        } catch (error) {
            return error
        }
    },
    findUser : async ({email} : DocumentDefinition<IUser>)=>{
        try {
            const existingUser = await userModel.findOne({email : email})
            return existingUser
        } catch (error) {
            
        }
    },
    findUserById : async ({id} : DocumentDefinition<IUser>) =>{
        try {
            const existingUser = await userModel.findById(id)
            .populate('name')
            .populate('email')

            return existingUser

        } catch (error) {
            
        }
    }
}


module.exports = userRepository