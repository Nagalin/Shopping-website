
import { Router } from "express";
import Profile from "../../database/schema/Profile";
const router = Router();
require('dotenv').config()

router.get('/profile',async(req,res)=>{
    const id = req.user
    const result = await Profile.findOne({ user: id }).select('-__v -_id -user');
    return res.status(200).send([result]);
})

export default router