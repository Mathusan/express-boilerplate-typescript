import dotenv from 'dotenv';
import express , { Express ,Request , Response } from 'express';
import cors from 'cors';

import bodyparser from 'body-parser'

import connection from './database/connection';

import  userRouter from './src/api/routes/userRoutes'


if(process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

const app : Express = express()

connection(process.env.DATABASE_URL)

app.use(cors())
app.use(express.json())
app.use((bodyparser.urlencoded({ extended: true })))


app.get('/' ,(req : Request,res : Response) =>{
    res.json({data : "hello"})
})

app.use('/user', userRouter)


app.listen(process.env.PORT, ()=>{
    console.log("Server Running ")
})

