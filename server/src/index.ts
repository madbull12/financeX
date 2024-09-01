import express, { type Express } from 'express'
import mongoose from 'mongoose';
const app:Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())

const mongoURI: string = process.env.MONGO_URI as string;

mongoose.connect(mongoURI).then(()=>console.log('Connected successfully!')).catch((err)=>console.log('Failed to connect to MongoDB: ', err))

app.listen(port,()=>{
    console.log('Server running on port', port)
})