import express , { Express ,Request , Response } from 'express';
import cors from 'cors';

import bodyparser from 'body-parser'

import connection from './database/connection';

import  userRouter from './src/api/routes/userRoutes'


const app : Express = express()

connection()

app.use(cors())
app.use(express.json())
app.use((bodyparser.urlencoded({ extended: true })))


app.get('/' ,(req : Request,res : Response) =>{
    res.json({data : "hello"})
})

app.use('/user', userRouter)


app.listen(3000, ()=>{
    console.log("Server Running ")
})

