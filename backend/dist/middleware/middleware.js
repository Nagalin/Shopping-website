"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const passport_1 = __importDefault(require("passport"));
function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }
    passport_1.default.authenticate('jwt', { session: false }, (err, user) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
        req.user = user;
        return next();
    })(req, res, next);
}
exports.isAuthenticated = isAuthenticated;
