"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const passport_config_1 = __importDefault(require("./setup/passport-config"));
const cors = require('cors');
const app = (0, express_1.default)();
require('./database/database');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(passport_config_1.default.initialize());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(register_1.default);
app.use(login_1.default);
app.listen(process.env.PORT, () => console.log('Listening on port 8000'));
