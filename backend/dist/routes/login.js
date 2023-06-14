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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const bcrypt = require('bcryptjs');
const router = (0, express_1.Router)();
const KEY = process.env.SECRET_KEY;
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        //look up in the database if this credential valid
        const account = yield User_1.default.findOne({ username: username });
        if (account && (yield bcrypt.compare(password, account === null || account === void 0 ? void 0 : account.password))) {
            const payload = { id: account._id, role: account.role };
            const token = jsonwebtoken_1.default.sign(payload, KEY);
            return res.status(200).send({ token: token });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({
            message: 'error occurs on server side , plesase try again later'
        });
    }
    res.status(401).send({ message: 'Invalid username or password' });
}));
exports.default = router;
