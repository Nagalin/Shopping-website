"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware/middleware");
const profile_1 = __importDefault(require("./profile"));
const product_1 = __importDefault(require("./product"));
const buyer_1 = __importDefault(require("./buyer"));
const router = (0, express_1.Router)();
router.use(middleware_1.isAuthenticated);
router.use(profile_1.default);
router.use(product_1.default);
router.use(buyer_1.default);
router.use(middleware_1.isSeller);
router.get('/isSeller', (req, res) => {
    res.sendStatus(200);
});
exports.default = router;
