import express, { Router } from "express";
import User from "../../database/schema/user";
import user from "../../database/schema/user";
const mongodb = require('../../database/database')
const router: Router = express.Router();

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    try {
      const existingUser = await User.find({ username: username });
      console.log(existingUser)
  
      if (existingUser.length > 0) {
        return res.send({ message: 'Username is already in use' });
      }
  
      // Create a new user account
      // ...
      // (code to create the user account goes here)
  
      res.send({ message: 'Account created' });
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).send({ message: 'An error occurred' });
    }
  });
  

export default router;
