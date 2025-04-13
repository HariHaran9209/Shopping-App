import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import dotenv from 'dotenv'
dotenv.config();

// App Config
const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// api endpoint
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.listen(port, () => {
    console.log(`Server Stated On http://localhost:${port}`)
})

// mongodb+srv://codemash44:<db_password>@cluster0.wodocp7.mongodb.net/?