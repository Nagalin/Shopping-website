import { Router } from "express";
import multer from 'multer'
import path from 'path'
import Product from "../../database/schema/Product";
import mongoose from "mongoose";
const router = Router()
require('dotenv').config()


const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'public')
    },
    filename: (req,file,cb) =>{
        cb(null,file.fieldname + " _ " + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage})

router.get('/product',async(req,res)=>{
    const result = await Product.find({user : req.user}).select('-__v -user')
    return res.json(result)
    
    
})

router.put('/update',async(req,res)=>{
    console.log(req.body)
    const filter = {_id : req.body.id}
    const update = {name : req.body.newName,price :req.body.newPrice}

    try {
        await Product.findOneAndUpdate(filter,update)
        
    } catch (error) {
        console.error(error)
        return res.status(500).send('Error occured on server side, please try again later')
    }
    return res.sendStatus(200)
})

router.delete('/delete:id',async(req,res)=>{
    console.log(req.params.id)
    
    try {
        const obj = await Product.deleteOne({_id : req.params.id})
        console.log(obj)
        
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
    res.sendStatus(200)
})

router.post('/add-product', upload.single('img'), async(req, res) => {
    const {name,price} = req.body
    const image = req.file?.filename
    const id = req.user
   
    const product = new Product({
        imageName : image,
        name : name,
        price : price,
        user : id
    })
    try {
        await product.save()
        
    } catch (err) {
        console.error(err)
        return res.sendStatus(500)
    }
    
    res.sendStatus(200);
  });
  

export default router