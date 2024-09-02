import 'dotenv/config'
import express, { type Express } from 'express'
import mongoose from 'mongoose';
import financialRoutes from './routes/financial-record'
const app:Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/financial-records',financialRoutes)
const mongoURI: string = process.env.MONGO_URI as string;

mongoose.connect(mongoURI).then(()=>console.log('Connected successfully!')).catch((err)=>console.log('Failed to connect to MongoDB: ', err))

app.listen(port,()=>{
    console.log('Server running on port', port)
})