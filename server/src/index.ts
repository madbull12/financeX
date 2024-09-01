import express, { type Express } from 'express'
import mongoose from 'mongoose';
const app:Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())

const mongoURI: string = "mongodb+srv://huangandrian02:UcTdeM8d2pVQM1uV@financetracker.2n6m1.mongodb.net/"

mongoose.connect(mongoURI).then(()=>console.log('Connected successfully!')).catch((err)=>console.log('Failed to connect to MongoDB: ', err))

app.listen(port,()=>{
    console.log('Server running on port', port)
})