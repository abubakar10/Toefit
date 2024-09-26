import express from 'express';
import colors from "colors";
import dotenv from 'dotenv';
// const path = require('path');
import morgan from 'morgan';
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import CategoryRoutes from "./routes/CategoryRoutes.js"
import productRoutes from "./routes/productRoute.js"
import cors from "cors";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app =express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use("/api/v1/category" ,CategoryRoutes);
app.use('/api/v1/product' ,productRoutes)

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ecommerce app</h1>");
})

//Port
const Port =process.env.PORT || 8080;

//run listen
app.listen(Port,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${Port}`.bgCyan.white);
})