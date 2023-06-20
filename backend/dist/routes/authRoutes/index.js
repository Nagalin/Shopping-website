"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware/middleware");
const profile_1 = __importDefault(require("./profile"));
const product_1 = __importDefault(require("./product"));
const router = (0, express_1.Router)();
router.use(middleware_1.isAuthenticated);
router.use(profile_1.default);
router.use(product_1.default);
exports.default = router;
