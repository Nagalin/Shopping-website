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
exports.isSeller = exports.isAuthenticated = void 0;
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("../database/schema/User"));
function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }
    passport_1.default.authenticate('jwt', { session: false }, (err, id) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        if (!id) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
        req.user = id;
        return next();
    })(req, res, next);
}
exports.isAuthenticated = isAuthenticated;
function isSeller(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }
    passport_1.default.authenticate('jwt', { session: false }, (err, id) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!id)
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        const user = yield User_1.default.findById(id);
        if ((user === null || user === void 0 ? void 0 : user.role) === 'seller')
            return next();
        return res.status(401).json({ message: 'Unauthorized - Invalid role' });
    }))(req, res, next);
}
exports.isSeller = isSeller;
