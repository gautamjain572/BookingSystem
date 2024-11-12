import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import movieRouter from './routes/movieRoute.js';
import bookingsRouter from './routes/bookingRoute.js';
import cors from 'cors'

dotenv.config();
// server
const app = express();


//cors
app.use(cors());

// middleware
app.use(express.json());
app.use("/api",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingsRouter);

// databse connect
const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}
connectDB();

app.get('/', (req, res) => {
    res.send('API Working')
 })

app.listen(5000, () => console.log(`server started on PORT : ${5000}`));


















































// mongoose.connect(
//     `mongodb+srv://gautamjain572:${process.env.MONGODB_PASS}@cluster1.ihpfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
// ).then(() => 
//     app.listen(5000, () => 
//     console.log(`connected to port ${5000}`)
//     )
// ).catch((e) => console.log(e));
// app.use("/", (req, res, next) => {
//     res.send("Working");
// })