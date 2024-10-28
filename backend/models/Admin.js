import mongoose from 'mongoose';

const Schema = mongoose.Schema
const adminSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        minLength:6,
        required: true,
    },
    addedMovies:[
        {
        type: String,
    },
],
});

export default mongoose.model("Admin",adminSchema)