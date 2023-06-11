import express, { Router } from "express";
import User from "../../database/schema/user";
const jwt = require('jsonwebtoken')

require('../../database/database')
const router: Router = express.Router();
require('dotenv').config()
router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign(username,process.env.SECRET_KEY)
    res.json(token)
    
})

/* router.get('/test',(req,res)=>{
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  jwt.verify(token,process.env.SECRET_KEY,(err: any,user: any)=>{
    if(err) return res.status(401).end()
    console.log(user)
  })
  res.status(200).end()
}) */
  

export default router;
