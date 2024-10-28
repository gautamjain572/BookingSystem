import express from 'express';
import { getAllUsers , addUser, updateUser, deleteUser, userLogin } from '../controllers/userController.js';

const userRouter = express.Router();

//sign up
userRouter.get("/user",getAllUsers);
userRouter.post("/signup",addUser);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
//login
userRouter.post("/login",userLogin)


export default userRouter;