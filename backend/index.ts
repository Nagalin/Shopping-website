import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import register from './routes/register';
import login from './routes/login';
import passport from './setup/passport-config';
import cors from 'cors';
import authRoute from './routes/authRoutes/index';
import dotenv from 'dotenv';
import setupSocket from './socket';

dotenv.config();
require('./database/database');

const PORT = process.env.PORT!;
const app = express();
const server = http.createServer(app);


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/checkauth', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).end();
  }
);

app.use(register);
app.use(login);
app.use(authRoute);

setupSocket(server);

server.listen(PORT, () => console.log('Listening on port 8000'));
