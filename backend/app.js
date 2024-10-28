import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js';

dotenv.config();
// server
const app = express();
app.listen(5000, () => console.log(`server started on PORT : ${5000}`));

// middleware
app.use(express.json());
app.use("/api",userRouter);
app.use("/admin",adminRouter);

// databse connect
const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}
connectDB();


















































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