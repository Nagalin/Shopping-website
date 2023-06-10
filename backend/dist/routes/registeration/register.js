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
const user_1 = __importDefault(require("../../database/schema/user"));
const mongodb = require('../../database/database');
const router = express_1.default.Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existingUser = yield user_1.default.find({ username: username });
        console.log(existingUser);
        if (existingUser.length > 0) {
            return res.send({ message: 'Username is already in use' });
        }
        // Create a new user account
        // ...
        // (code to create the user account goes here)
        res.send({ message: 'Account created' });
    }
    catch (error) {
        // Handle any errors that occur during the process
        res.status(500).send({ message: 'An error occurred' });
    }
}));
exports.default = router;
