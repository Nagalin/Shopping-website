import { Router } from "express";
import User from "../database/schema/user";
const bcrypt = require('bcryptjs')
require('dotenv').config()
const router = Router();

router.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //Check if username is already in used
  try {
    const oldUser = await User.findOne({ username: username })
    if (oldUser) return res.status(409).send({ message: 'Username is already in used' })
  } catch (err) {
    console.error(err)
    res.status(500).end()

  }


  //hasing a password and save new account to database
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const account = new User({
    username: username,
    password: hashedPassword,
    role: 'user'
  })

  try {
    await account.save()
    res.send({ message: 'Account created' })

  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
})


export default router;
