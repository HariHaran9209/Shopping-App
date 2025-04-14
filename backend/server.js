import express from 'express'
import cors from 'cors'
import path from 'path'
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
const __dirname = path.resolve();

// Middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.use(express.static(path.join(__dirname, "/frontend")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
	// DB Connection
	connectDB();
	console.log(`Server Running on port ${PORT}`);
});

// mongodb+srv://codemash44:<db_password>@cluster0.wodocp7.mongodb.net/?
