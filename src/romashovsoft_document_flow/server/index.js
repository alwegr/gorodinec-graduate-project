import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import  cors from 'cors'
import authorizationRoute from './routes/authorization.js'
 
const app = express()
dotenv.config()

//Constants
const PORT = process.env.PORT 

//Middleware
app.use(cors())
app.use(express.json())

// app.use(
//     Fingerprint({
//         parameter: [Fingerprint.useragent, Fingerprint.acceptHeaders],
//     })
// )

//Routes 
app.use('/api/authorization', authorizationRoute)

async function start() {
    try{
        await mongoose.connect(
            'mongodb://localhost:27017/Document',
        )
        app.listen(PORT, () => console.log(`server start: ${PORT}`))
    }catch(error){
        console.log(error)
    }
}
start()