"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getBestSellerList = exports.getProductDetail = exports.getProductList = exports.modifyProduct = exports.deleteMultipleProducts = exports.deleteProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("./../model/product.model"));
const ProductServices = __importStar(require("../services/product.service"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.default(req.body);
    try {
        yield product.save();
        res.status(201).send({
            msg: "success",
            product,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.createProduct = createProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    try {
        const product = yield product_model_1.default.findOne({ productId });
        yield product.remove();
        res.status(200).send({ msg: "Delete successfully" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.deleteProduct = deleteProduct;
const deleteMultipleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productList: batch } = req.body;
    try {
        yield product_model_1.default.deleteMany({
            productId: {
                $in: batch,
            },
        });
        res.status(200).send({ msg: "Delete successfully!" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.deleteMultipleProducts = deleteMultipleProducts;
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield ProductServices.getModifiedItem(req.body.productItem);
        yield product.save();
        res.status(200).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.modifyProduct = modifyProduct;
const getProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paginatedProducts = yield ProductServices.generatePipeline(req.query);
        res.status(200).send({
            productList: paginatedProducts,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.getProductList = getProductList;
const getProductDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productDetail = yield ProductServices.getDetailWithReview(req.body.productId);
        res.status(200).send({
            msg: "success",
            productDetail,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.getProductDetail = getProductDetail;
const getBestSellerList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield product_model_1.default.find().sort({ sales: -1 }).limit(10);
        res.status(200).send({
            msg: "success",
            list,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.getBestSellerList = getBestSellerList;
//# sourceMappingURL=product.controller.js.map