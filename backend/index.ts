import  express  from "express";
import bodyParser from 'body-parser'
require('dotenv').config()
import register from './routes/register'
import login from './routes/login'
import passport from "./setup/passport-config";
const cors = require('cors')
const app = express()
require('./database/database')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(register)
app.use(login)


app.listen(process.env.PORT!,()=>console.log('Listening on port 8000'))

