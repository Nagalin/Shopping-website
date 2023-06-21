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
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const Product_1 = __importDefault(require("../../database/schema/Product"));
const router = (0, express_1.Router)();
require('dotenv').config();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + " _ " + Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.get('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_1.default.find({ user: req.user }).select('-__v -user');
    return res.json(result);
}));
router.post('/add-product', upload.single('img'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { name, price } = req.body;
    const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const id = req.user;
    const product = new Product_1.default({
        imageName: image,
        name: name,
        price: price,
        user: id
    });
    try {
        yield product.save();
    }
    catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
}));
exports.default = router;
