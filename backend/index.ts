//import all dependencies
import  express  from "express";
import bodyParser from 'body-parser'
import register from './routes/register'
import login from './routes/login'
import passport from "./setup/passport-config";
import cors from 'cors'
import profile from './routes/authRoutes/profile'
import product from './routes/authRoutes/product'
require('dotenv').config()
require('./database/database')

const PORT = process.env.PORT!
const app = express()

//initialize a global middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

//routing
app.use(register)
app.use(login)
app.use(profile)
app.use(product)

//an endpoint to ensure that client has logined before navigate to private route
app.get('/checkauth', passport.authenticate('jwt', { session: false }),
    (req, res) =>{
      res.status(200).end()
    }
);

app.listen(PORT,()=>console.log('Listening on port 8000'))

