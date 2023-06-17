import { Router } from "express";
import User from "../database/schema/User";
import jwt from 'jsonwebtoken'
require('dotenv').config()
const bcrypt = require('bcryptjs')
const router = Router();
const KEY = process.env.SECRET_KEY

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    //look up in the database if this credential valid
    const account = await User.findOne({ username: username })

    if (account && await bcrypt.compare(password, account?.password)) {
      const payload = {id : account._id,role : account.role}
      const token =  jwt.sign(payload,KEY!)
      return res.status(200).send({token : token ,role :  account.role})
    }

  } catch (err) {
    console.error(err)
    return res.status(500).send({
      message: 'error occurs on server side , plesase try again later'
    })
  }

  res.status(401).send({ message: 'Invalid username or password' })
});




export default router;
