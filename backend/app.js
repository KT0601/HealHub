import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
// import webRoutes from './routes/web.js'
// import adminRoutes from './routes/adminRouter.js'

import path from 'path'
// // import WebSocket from 'ws'
// import  { NlpManager } from 'node-nlp' 
// import { WebSocketServer } from 'ws'
dotenv.config()

const app = express()

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// view engine
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: false })); 

// Load Routes
app.use("/user", userRoutes);
// app.use("/admin",adminRoutes);

// app.use("/",webRoutes);

const staticPath = path.join(process.cwd(), 'static');
app.use('/static', express.static(staticPath)); 
// app.use('/static', express.static(path.join(__dirname, 'static')))



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})