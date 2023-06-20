import { Router } from "express";
import multer from 'multer'
import path from 'path'
import Product from "../../database/schema/Product";
const jwt = require('jsonwebtoken')
const router = Router()
require('dotenv').config()

const KEY = process.env.SECRET_KEY;
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'public')
    },
    filename: (req,file,cb) =>{
        cb(null,file.fieldname + " _ " + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage})

router.post('/add-product', upload.single('img'), async(req, res) => {
    const {name,price} = req.body
    const image = req.file?.filename
    
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