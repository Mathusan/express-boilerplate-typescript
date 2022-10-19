import { DocumentDefinition } from 'mongoose'
import userModel from '../models/user.model'
import {IUser} from '../types/user.type'


export const     createUser  = async ({name,email,password,salt} : DocumentDefinition<IUser> ) =>{
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
    }

 export const  findUser =async ({email} : DocumentDefinition<IUser>)=>{
        try {
            const existingUser = await userModel.findOne({email : email})
            return existingUser
        } catch (error) {
            
        }
    }

export const  findUserById = async ({id} : DocumentDefinition<IUser>) =>{
        try {
            const existingUser = await userModel.findById(id)
            .populate('name')
            .populate('email')

            return existingUser

        } catch (error) {
            
        }
    }

