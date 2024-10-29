import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const addAdmin = async (req,res,next) => {
    const {email,password} = req.body;
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email});
    } catch (error) {
        console.log(error);
        return next(error);
    }
    if (existingAdmin) {
        return res.status(400).json({message:"Admin already Exits"})
    }
    let admin;
    const newPassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({email,password:newPassword});
        admin = await admin.save();
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!admin) {
        return res.status(500).json({message:"Unable to Reach"})
    }
    return res.status(201).json({ admin })
}

export const adminLogin = async (req,res,next) => {
    const {email,password} = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({message: "Invalid Input"});
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!existingAdmin) {
        return res.status(404).json({message: "Admin dosen't Exits"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingAdmin.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password"});
    }
    const token = jwt.sign({id:existingAdmin._id},process.env.SECRET_KEY,{
        expiresIn: "7d",
    });
    return res.status(200).json({ message:"Login Suceessfull" , token , id:existingAdmin._id});
}

export const getAdmins = async (req,res,next) => {
    let admins;
    try {
        admins = await Admin.find()
    } catch (error) {
        console.log(error); 
        return next(error);
    }
    if (!admins) {
        return res.status(500).json({message: "Internal Server Error"});
    }
    return res.status(200).json({ admins });
}