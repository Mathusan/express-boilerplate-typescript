import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request } from 'express';

const  APP_SECRET  = "secretapp"


module.exports.GenerateSalt = async() => {
        return await bcrypt.genSalt() 
},

module.exports.GeneratePassword = async (password : any, salt : any) => {
        return await bcrypt.hash(password, salt);
};


module.exports.ValidatePassword = async (enteredPassword : any, savedPassword : any , salt: any) => {
        return await bcrypt.hash(enteredPassword, salt) === savedPassword;
};

module.exports.GenerateSignature = async (payload : any) => {
        return await jwt.sign(payload, APP_SECRET, { expiresIn: '1d'} )
}, 


module.exports.FormateData = (data :any) => {
        if(data){
            return { data }
        }else{
            throw new Error('Data Not found!')
        }
    }