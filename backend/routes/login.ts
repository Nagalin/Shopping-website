import { Router } from "express";
import User from "../database/schema/user";
const bcrypt = require('bcryptjs')
const router = Router();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    try {
      //look up in the database if this credential exist
      const account = await User.findOne({username : username})

      if(account && await bcrypt.compare(password,account?.password)) {
        return res.status(200).end()
      }
      
    } catch (err) {
      console.error(err)
      return res.status(500).end()
    }
    
    res.status(401).send({message : 'Invalid username or password'})
  });


  

export default router;
