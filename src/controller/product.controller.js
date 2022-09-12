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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getBestSellerList = exports.getProductDetail = exports.getProductList = exports.modifyProduct = exports.deleteMultipleProducts = exports.deleteProduct = exports.createProduct = void 0;
var product_model_1 = require("./../model/product.model");
var ProductServices = require("../services/product.service");
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                product = new product_model_1["default"](req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product.save()];
            case 2:
                _a.sent();
                res.status(201).send({
                    msg: "success",
                    product: product
                });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.status(500).send({ msg: e_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.body.productId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, product_model_1["default"].findOne({ productId: productId })];
            case 2:
                product = _a.sent();
                return [4 /*yield*/, product.remove()];
            case 3:
                _a.sent();
                res.status(200).send({ msg: "Delete successfully" });
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                res.status(500).send({ msg: e_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
var deleteMultipleProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var batch, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                batch = req.body.productList;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product_model_1["default"].deleteMany({
                        productId: {
                            $in: batch
                        }
                    })];
            case 2:
                _a.sent();
                res.status(200).send({ msg: "Delete successfully!" });
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                res.status(500).send({ msg: e_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteMultipleProducts = deleteMultipleProducts;
var modifyProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, ProductServices.getModifiedItem(req.body.productItem)];
            case 1:
                product = _a.sent();
                return [4 /*yield*/, product.save()];
            case 2:
                _a.sent();
                res.status(200).send({
                    msg: "success"
                });
                return [3 /*break*/, 4];
            case 3:
                e_4 = _a.sent();
                res.status(500).send({ msg: e_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.modifyProduct = modifyProduct;
var getProductList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var paginatedProducts, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ProductServices.generatePipeline(req.query)];
            case 1:
                paginatedProducts = _a.sent();
                res.status(200).send({
                    productList: paginatedProducts
                });
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).send({ msg: e_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductList = getProductList;
var getProductDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productDetail, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ProductServices.getDetailWithReview(req.body.productId)];
            case 1:
                productDetail = _a.sent();
                res.status(200).send({
                    msg: "success",
                    productDetail: productDetail
                });
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                res.status(500).send({ msg: e_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductDetail = getProductDetail;
var getBestSellerList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var list, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, product_model_1["default"].find().sort({ sales: -1 }).limit(20)];
            case 1:
                list = _a.sent();
                res.status(200).send({
                    msg: "success",
                    list: list
                });
                return [3 /*break*/, 3];
            case 2:
                e_7 = _a.sent();
                res.status(500).send({ msg: e_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBestSellerList = getBestSellerList;
