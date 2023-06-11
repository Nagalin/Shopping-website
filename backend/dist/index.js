"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const register_1 = __importDefault(require("./routes/registeration/register"));
const login_1 = __importDefault(require("./routes/login/login"));
const passport_config_1 = __importDefault(require("./setup/passport-config"));
const app = (0, express_1.default)();
require('./database/database');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(register_1.default);
app.use(login_1.default);
app.get('/protected', passport_config_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'You have access to this protected route!' });
});
app.listen(process.env.PORT, () => console.log('Listening on port 8000'));
