const {findUser,createUser}= require('../../database/repository/user.repository')
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils/index');

export const signUp = async (userInputs: any) => {
    const { name,email, password} = userInputs

    try {
         const checkExistingUser = await findUser({email})

        if(!checkExistingUser){ 

            let salt = await GenerateSalt()

            let hashedPassword = await GeneratePassword(password,salt)

            const newUser = await createUser({name,email,password:hashedPassword,salt})

            const token = await GenerateSignature({email: newUser.email, _id: newUser._id})

            return FormateData({id:newUser._id, token})

        } else {

            return FormateData({err : "Email already registered"})
        }
        
    } catch (error) {
        return FormateData({error : error})
    }
}

export const logIn = async (userInputs : any) =>{

    const {email,password} = userInputs

            try {
                const existingUser = await findUser({email})
    
                if (existingUser) {
                    const  validatePassword = await ValidatePassword(password, existingUser.password,existingUser.salt)
    
                    if(validatePassword){
                         const token = await GenerateSignature({email : existingUser.email, _id:existingUser._id})   
                         return FormateData({id: existingUser._id,  token})
                    }else {
                        return FormateData({err: "Incorrect Password"})
                    }
    
    
    
                }else {
                    return FormateData({err: " User not found "})
                }
            } catch (error) {
                return FormateData({error: error})
            }
}
