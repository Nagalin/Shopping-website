import mongoose, { Schema } from "mongoose";

const product = new mongoose.Schema({
    name : String,
    price : Number,
    imageName : String,
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User' 
    }
})

export default mongoose.model('Product',product)