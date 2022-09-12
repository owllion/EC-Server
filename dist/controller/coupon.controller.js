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
exports.redeemCoupon = exports.applyCoupon = exports.modifyCoupon = exports.deleteMultipleCoupons = exports.deleteCoupon = exports.createCoupon = void 0;
const coupon_model_1 = __importDefault(require("./../model/coupon.model"));
const CouponServices = __importStar(require("../services/coupon.service"));
const createCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const coupon = new coupon_model_1.default(req.body);
    try {
        yield coupon.save();
        res.status(201).send({
            msg: "Coupon has been created",
            coupon,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.createCoupon = createCoupon;
const deleteCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    try {
        const coupon = yield CouponServices.findCoupon({
            field: "code",
            value: code,
        });
        yield coupon.remove();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.deleteCoupon = deleteCoupon;
const deleteMultipleCoupons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codeList: batch } = req.body;
    try {
        yield coupon_model_1.default.deleteMany({
            code: {
                $in: batch,
            },
        });
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.deleteMultipleCoupons = deleteMultipleCoupons;
const modifyCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { couponItem } = req.body;
    try {
        const coupon = yield CouponServices.getModifiedItem(couponItem);
        yield coupon.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.modifyCoupon = modifyCoupon;
const applyCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { totalPrice, code } = req.body;
    try {
        const coupon = yield CouponServices.findCoupon({
            field: "code",
            value: code,
        });
        const { expiryDate, minimumAmount, discountType, amount, } = coupon;
        yield CouponServices.isExpired(expiryDate);
        yield CouponServices.isShort(minimumAmount, totalPrice);
        const { discountTotal, discount } = yield CouponServices.getPriceAndDiscount(discountType, totalPrice, amount);
        res.send({
            msg: "success",
            discountTotal,
            discount,
            usedCode: code,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.applyCoupon = applyCoupon;
const redeemCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield CouponServices.addCouponToUserCouponList(req.body.code, req.user);
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.redeemCoupon = redeemCoupon;
//# sourceMappingURL=coupon.controller.js.map