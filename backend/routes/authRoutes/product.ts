import { Router } from "express";
import multer from 'multer'
import path from 'path'
import Product from "../../database/schema/Product";
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