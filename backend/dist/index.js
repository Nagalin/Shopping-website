"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const passport_config_1 = __importDefault(require("./setup/passport-config"));
const User_1 = __importDefault(require("./database/schema/User"));
const express_session_1 = __importDefault(require("express-session"));
const cors = require('cors');
require('dotenv').config();
require('./database/database');
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: 'something',
    saveUninitialized: false,
    resave: false
}));
app.use(passport_config_1.default.initialize());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(register_1.default);
app.use(login_1.default);
//an endpoint to ensure that client has logined before navigate to private route
app.get('/checkauth', passport_config_1.default.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.headers);
    res.status(200).end();
});
app.post('/checkUsername', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.username);
    const oldUser = yield User_1.default.findOne({ username: req.body.username });
    if (oldUser)
        return res.status(409).end();
    res.status(200).end();
}));
app.post('/test', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
});
app.listen(PORT, () => console.log('Listening on port 8000'));
