
import { Router } from "express";
import Profile from "../../database/schema/Profile";
import mongoose from "mongoose";

const jwt = require('jsonwebtoken')
const router = Router();
require('dotenv').config()
const KEY = process.env.SECRET_KEY;

router.get('/profile',async(req,res)=>{
    
    const authHeader = req.headers.authorization
    console.log(authHeader)
    const token = authHeader?.split(' ')[1]
    let id
   
    
    jwt.verify(token,KEY,(error : any,decoded : any)=>{
        if(error) {
            console.error(error)
            return res.status(500).send({message : 'Error occurs on server side, please try again later'})
        }
        id = decoded.id
    })

    console.log(id)
    

    const result = await Profile.findOne({ user: id }).select('-__v -_id -user');
    return res.status(200).send([result]);


    

})

export default router