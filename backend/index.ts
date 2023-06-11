import  express  from "express";
import bodyParser from 'body-parser'
require('dotenv').config()
import register from './routes/registeration/register'
import login from './routes/login/login'
import passport from "./setup/passport-config";
const app = express()
require('./database/database')

app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(register)
app.use(login)

app.listen(process.env.PORT!,()=>console.log('Listening on port 8000'))

