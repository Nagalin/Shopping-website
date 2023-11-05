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
const Product_1 = __importDefault(require("../../database/schema/Product"));
const router = (0, express_1.Router)();
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchField = req.query.searchField;
        if (!searchField) {
            return res.status(400).json({ error: "Search field is required" });
        }
        // Use a regular expression to perform a case-insensitive search for product names
        const products = yield Product_1.default.find({ name: { $regex: new RegExp(`^${searchField}`, "i") } });
        const productsName = products.map(product => product.name);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while searching for products" });
    }
}));
exports.default = router;
