import  express  from "express";
import bodyParser from 'body-parser'
require('dotenv').config()
import register from './routes/register'
import login from './routes/login'
import passport from "./setup/passport-config";
const cors = require('cors')
const app = express()
require('./database/database')
const PORT = process.env.PORT!
app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(register)
app.use(login)

//an endpoint to ensure that client has logined before navigate to private route
app.get('/checkauth', passport.authenticate('jwt', { session: false }),
    (req, res) =>{
        console.log(req.headers)
      res.status(200).end()
    }
);
app.listen(PORT,()=>console.log('Listening on port 8000'))

