"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import all dependencies
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const passport_config_1 = __importDefault(require("./setup/passport-config"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/authRoutes/index"));
require('dotenv').config();
require('./database/database');
const PORT = process.env.PORT;
const app = (0, express_1.default)();
//initialize a global middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(passport_config_1.default.initialize());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//routing
app.use(register_1.default);
app.use(login_1.default);
app.use(index_1.default);
//an endpoint to ensure that client has logined before navigate to private route
app.get('/checkauth', passport_config_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).end();
});
app.listen(PORT, () => console.log('Listening on port 8000'));
