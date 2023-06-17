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
const Profile_1 = __importDefault(require("../../database/schema/Profile"));
const jwt = require('jsonwebtoken');
const router = (0, express_1.Router)();
require('dotenv').config();
const KEY = process.env.SECRET_KEY;
router.get('/profile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    let id;
    jwt.verify(token, KEY, (error, decoded) => {
        if (error) {
            console.error(error);
            return res.status(500).send({
                message: 'Error occurs on server side, please try again later'
            });
        }
        id = decoded.id;
    });
    const result = yield Profile_1.default.findOne({ user: id }).select('-__v -_id -user');
    return res.status(200).send([result]);
}));
exports.default = router;
