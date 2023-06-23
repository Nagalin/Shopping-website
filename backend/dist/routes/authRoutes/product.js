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
require('dotenv').config();
const router = (0, express_1.Router)();
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
    try {
        const result = yield Product_1.default.find({ user: req.user }).select('-__v -user');
        return res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error occurs on server side, please try again later');
    }
}));
router.put('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: req.body.id };
    const update = { name: req.body.newName, price: req.body.newPrice };
    try {
        yield Product_1.default.findOneAndUpdate(filter, update);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Error occured on server side, please try again later');
    }
    return res.sendStatus(200);
}));
router.delete('/delete:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_1.default.deleteOne({ _id: req.params.id });
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
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
router.get('/store', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const store = yield Product_1.default.find({});
        return res.json(store);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}));
exports.default = router;
