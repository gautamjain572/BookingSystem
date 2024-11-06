import User from "../models/User.js";
import Bookings from "../models/Bookings.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req,res,next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return next(error);
    }
    if (!users) {
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({ users})
}

export const addUser = async (req,res,next) => {
    const {name,email,password} = req.body;
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({message: "Invalid Input"});
    }
    const newPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({name,email,password:newPassword});
        user = await user.save();
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!user) {
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(201).json({ id :user._id })
}

export const updateUser = async (req,res,next) => {
    const id = req.params.id;
    const {name,email,password} = req.body;
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({message: "Invalid Input"});
    }
    let user;
    const newPassword = bcrypt.hashSync(password);
    try {
        user = await User.findByIdAndUpdate(id,{name,email,password:newPassword})
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!user) {
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({ message:"Updated Successfully" })
}

export const deleteUser = async (req,res,next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!user) {
        return res.status(500).json({message:"Unexpected Error Occured"})
    }
    return res.status(200).json({ message:"Deleted Successfully" })
}

export const userLogin = async (req,res,next) => {
    const {email,password} = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({message: "Invalid Input"});
    }
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!existingUser) {
        return res.status(404).json({message: "User dosen't Exits"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password"});
    }
    return res.status(200).json({ message:"Login Suceessfull",id :existingUser._id });
}

export const getBookingUser = async (req,res,next) => {
    const id = req.params.id;
    let booking;
    try {
        booking = await Bookings.find({user : id})
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!booking) {
        return res.status(500).json({message: "Internal Server Error"});
    }
    return res.status(200).json({ booking });
}