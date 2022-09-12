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
exports.addCouponToUserCouponList = exports.getModifiedItem = exports.getPriceAndDiscount = exports.isShort = exports.isExpired = exports.findCoupon = void 0;
var ramda_1 = require("ramda");
var coupon_model_1 = require("../model/coupon.model");
var findCoupon = function (_a) {
    var field = _a.field, value = _a.value;
    return __awaiter(void 0, void 0, void 0, function () {
        var coupon;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, coupon_model_1["default"].findOne((_b = {}, _b[field] = value, _b))];
                case 1:
                    coupon = _c.sent();
                    if (!coupon)
                        throw new Error("Coupon not found!");
                    return [2 /*return*/, coupon];
            }
        });
    });
};
exports.findCoupon = findCoupon;
var isExpired = function (expiryDate) { return __awaiter(void 0, void 0, void 0, function () {
    var now, expire;
    return __generator(this, function (_a) {
        now = Date.now() / 1000;
        expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
        //valueOf -> because ts does not allow us to put the value that type is not equal to number in Math.floor,so we need to add valueOf to turn Date -> number.
        if (expire - now < 0)
            throw new Error("This code is already expired!");
        return [2 /*return*/];
    });
}); };
exports.isExpired = isExpired;
var isShort = function (minimumAmount, totalPrice) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // if code has the consumption threshold
        if (minimumAmount) {
            if (totalPrice < minimumAmount)
                throw new Error("You are ".concat(minimumAmount - totalPrice, " dollars short!"));
        }
        return [2 /*return*/];
    });
}); };
exports.isShort = isShort;
var getPriceAndDiscount = function (discountType, totalPrice, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var finalPrice;
    return __generator(this, function (_a) {
        finalPrice = discountType === "rebate"
            ? totalPrice - amount
            : Math.round(totalPrice * (amount * 0.01));
        return [2 /*return*/, {
                discountTotal: finalPrice,
                discount: totalPrice - finalPrice
            }];
    });
}); };
exports.getPriceAndDiscount = getPriceAndDiscount;
var getModifiedItem = function (couponItem) { return __awaiter(void 0, void 0, void 0, function () {
    var updateFields, coupon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updateFields = {};
                Object.keys((0, ramda_1.omit)(["_id"], couponItem)).forEach(function (item) {
                    updateFields[item] = couponItem[item];
                });
                return [4 /*yield*/, coupon_model_1["default"].findByIdAndUpdate({ _id: couponItem._id }, updateFields, { "new": true })];
            case 1:
                coupon = _a.sent();
                if (!coupon)
                    throw new Error("Coupon not found");
                return [2 /*return*/, coupon];
        }
    });
}); };
exports.getModifiedItem = getModifiedItem;
var addCouponToUserCouponList = function (code, user) { return __awaiter(void 0, void 0, void 0, function () {
    var coupon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.findCoupon)({
                    field: "code",
                    value: code
                })];
            case 1:
                coupon = _a.sent();
                user.couponList.push(coupon);
                return [4 /*yield*/, user.save()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.addCouponToUserCouponList = addCouponToUserCouponList;
