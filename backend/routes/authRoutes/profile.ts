
import { Router } from "express";
import Profile from "../../database/schema/Profile";
import { isAuthenticated } from "../../middleware/middleware";

const jwt = require('jsonwebtoken')
const router = Router();
require('dotenv').config()
const KEY = process.env.SECRET_KEY;


router.get('/profile',async(req,res)=>{
    console.log(req.user)
    
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    let id
   
    jwt.verify(token,KEY,(error : any,decoded : any)=>{
        if(error) {
            console.error(error)
            return res.status(500).send({
                message : 'Error occurs on server side, please try again later'
            })
        }
        id = decoded.id
    })

    const result = await Profile.findOne({ user: id }).select('-__v -_id -user');
    return res.status(200).send([result]);

})

export default router