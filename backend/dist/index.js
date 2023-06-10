"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const register_1 = __importDefault(require("./routes/registeration/register"));
const app = (0, express_1.default)();
const mongodb = require('./database/database');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/* app.get('/',(req,res)=>{
    const user = new User({username : 'admin' , password : 'password' , role : 'admin'})
    user.save().then(()=>res.send('success'))
    .catch(err=>console.error(err))
}) */
app.use(register_1.default);
app.listen(process.env.PORT, () => console.log('Listening on port 8000'));
