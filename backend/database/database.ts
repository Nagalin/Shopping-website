require('dotenv').config()
import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE!)
.then(()=>console.log('Connected to mongodb database'))
.catch(err =>console.error(err))

export default mongoose