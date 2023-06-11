import express, { Router } from "express";
import User from "../../database/schema/user";
import user from "../../database/schema/user";
const mongodb = require('../../database/database')
const router: Router = express.Router();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    try {
    
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).send({ message: 'An error occurred' });
    }
  });


  

export default router;
