import express from 'express';
import { getAllUsers , addUser, updateUser, deleteUser, userLogin, getBookingUser , getOneUser } from '../controllers/userController.js';

const userRouter = express.Router();

//sign up
userRouter.get("/user",getAllUsers);
userRouter.get("/:id",getOneUser);
userRouter.post("/signup",addUser);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
//login
userRouter.post("/login",userLogin)
userRouter.get("/booking/:id",getBookingUser)



export default userRouter;