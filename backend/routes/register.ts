import { Router } from "express";
import User from '../database/schema/User';
import Profile from '../database/schema/Profile'
const bcrypt = require('bcryptjs')
require('dotenv').config()
const router = Router();

router.post('/checkUsername', async (req, res) => {
  const oldUser = await User.findOne({ username: req.body.username })
  if (oldUser) return res.status(409).end()
  res.status(200).end()
})

router.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role.toLowerCase()
  const name = req.body.name
  const lastName = req.body.lastName
  const email = req.body.email
  const phoneNumber = req.body.phoneNumber
  const age = req.body.age
  const address = req.body.address

  try {
    //hasing a password and save new account to database
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const account = new User({
      username: username,
      password: hashedPassword,
      role: role
    })
    await account.save()
    

  } catch (err) {
    console.error(err)
    return res.status(500).send({
      message: 'error occurs on server side , plesase try again later'
    })
  }

  //store account profile information
  try {
    const userID = await User.findOne({username : username})
    const profile = new Profile({
      name: name,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      age: age,
      address: address,
      user : userID
    })
    await profile.save()

  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: 'error occurs on server side , plesase try again later'
    })

  }

  return res.status(201).end()
})


export default router;
