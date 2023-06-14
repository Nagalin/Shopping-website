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
const express_1 = require("express");
const User_1 = __importDefault(require("../database/schema/User"));
const bcrypt = require('bcryptjs');
require('dotenv').config();
const router = (0, express_1.Router)();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    //Check if username is already in used
    try {
        const oldUser = yield User_1.default.findOne({ username: username });
        if (oldUser)
            return res.status(409).send({ message: 'Username is already in used' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'error occurs on server side , plesase try again later'
        });
    }
    //hasing a password and save new account to database
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    const account = new User_1.default({
        username: username,
        password: hashedPassword,
        role: 'user'
    });
    try {
        yield account.save();
        res.status(200).send({ message: 'Account created' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'error occurs on server side , plesase try again later'
        });
    }
}));
exports.default = router;
