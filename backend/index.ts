import  express  from "express";
import bodyParser from 'body-parser'
require('dotenv').config()
import register from './routes/registeration/register'
const app = express()
const mongodb = require('./database/database')
import User from "./database/schema/user";
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

/* app.get('/',(req,res)=>{
    const user = new User({username : 'admin' , password : 'password' , role : 'admin'})
    user.save().then(()=>res.send('success'))
    .catch(err=>console.error(err))
}) */


app.use(register)

app.listen(process.env.PORT!,()=>console.log('Listening on port 8000'))

