import mongoose, { Schema } from "mongoose";

const profile = new mongoose.Schema({
    name : String,
    lastName :String,
    email : String,
    phoneNumber : String,
    age : Number ,
    address : String,
    user: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

export default mongoose.model('Profile',profile)