"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.User = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var validator_1 = require("validator");
var argon2_1 = require("argon2");
var config_1 = require("config");
var order_model_1 = require("../model/order.model");
var review_model_1 = require("../model/review.model");
var jwt_1 = require("./../utils/jwt");
var User = /** @class */ (function () {
    function User() {
    }
    User_1 = User;
    User.findByCredentials = function (
    /**
     * this -> refer to whole model
     */
    email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error("No user with that email!");
                        }
                        return [4 /*yield*/, argon2_1["default"].verify(user.password, password.trim())];
                    case 2:
                        isMatch = _a.sent();
                        // argon2.verify("<big long hash>", "password");
                        if (!isMatch) {
                            throw new Error("Incorrect Password ");
                        }
                        return [2 /*return*/, user]; //instance of UserModel and mongoose.Document
                }
            });
        });
    };
    User.prototype.generateAuthToken = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = (0, jwt_1.signJwt)({ _id: this._id.toString() }, config_1["default"].get("jwtSecret"), {
                            expiresIn: "1d"
                        });
                        this.tokens = (_a = this.tokens) === null || _a === void 0 ? void 0 : _a.concat({ token: token });
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, token];
                }
            });
        });
    };
    User.prototype.generateRefreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                refreshToken = (0, jwt_1.signJwt)({ _id: this._id.toString() }, config_1["default"].get("refreshSecret"), {
                    expiresIn: "1y"
                });
                return [2 /*return*/, refreshToken];
            });
        });
    };
    /**
     * reset password & verify email link's token
     */
    User.prototype.generateLinkToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var linkToken;
            return __generator(this, function (_a) {
                linkToken = (0, jwt_1.signJwt)({ _id: this._id.toString() }, config_1["default"].get("linkSecret"), {
                    expiresIn: "1d"
                });
                return [2 /*return*/, linkToken];
            });
        });
    };
    var User_1;
    __decorate([
        (0, typegoose_1.prop)({
            lowercase: true,
            required: true,
            unique: true,
            trim: true,
            validate: function (value) {
                if (!validator_1["default"].isEmail(value)) {
                    throw new Error("Email is invalid");
                }
            }
        })
    ], User.prototype, "email");
    __decorate([
        (0, typegoose_1.prop)({ "default": "", trim: true })
    ], User.prototype, "firstName");
    __decorate([
        (0, typegoose_1.prop)({ "default": "", trim: true })
    ], User.prototype, "lastName");
    __decorate([
        (0, typegoose_1.prop)({ "default": "", trim: true })
    ], User.prototype, "fullName");
    __decorate([
        (0, typegoose_1.prop)({ "default": "" })
    ], User.prototype, "phone");
    __decorate([
        (0, typegoose_1.prop)({ "default": "" })
    ], User.prototype, "avatarUpload");
    __decorate([
        (0, typegoose_1.prop)({
            "default": "https://res.cloudinary.com/azainseong/image/upload/v1662517415/mij3ogxe5cqxitevri9z.png"
        })
    ], User.prototype, "avatarDefault");
    __decorate([
        (0, typegoose_1.prop)({
            trim: true,
            minlength: 7,
            validate: function (value) {
                if (value.includes("password")) {
                    throw new Error("Password must not contain 'password'.");
                }
            }
        })
    ], User.prototype, "password");
    __decorate([
        (0, typegoose_1.prop)()
    ], User.prototype, "tokens");
    __decorate([
        (0, typegoose_1.prop)({ "default": false })
    ], User.prototype, "verified");
    __decorate([
        (0, typegoose_1.prop)()
    ], User.prototype, "cartList");
    __decorate([
        (0, typegoose_1.prop)()
    ], User.prototype, "favList");
    __decorate([
        (0, typegoose_1.prop)()
    ], User.prototype, "couponList");
    __decorate([
        (0, typegoose_1.prop)({
            ref: "Order",
            foreignField: "owner",
            localField: "_id"
        })
    ], User.prototype, "orderList");
    __decorate([
        (0, typegoose_1.prop)({
            ref: "Review",
            foreignField: "user",
            localField: "_id"
        })
    ], User.prototype, "reviewList");
    User = User_1 = __decorate([
        (0, typegoose_1.pre)("save", function (next) {
            return __awaiter(this, void 0, void 0, function () {
                var user, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            user = this;
                            if (!user.isModified("password")) return [3 /*break*/, 2];
                            _a = user;
                            return [4 /*yield*/, argon2_1["default"].hash(user.password)];
                        case 1:
                            _a.password = _b.sent();
                            _b.label = 2;
                        case 2:
                            next();
                            return [2 /*return*/];
                    }
                });
            });
        }),
        (0, typegoose_1.pre)("deleteOne", function (next) {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = this.getFilter()["_id"];
                            return [4 /*yield*/, order_model_1["default"].deleteMany({ owner: id })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, review_model_1["default"].deleteMany({ owner: id })];
                        case 2:
                            _a.sent();
                            next();
                            return [2 /*return*/];
                    }
                });
            });
        }),
        (0, typegoose_1.post)("save", function () {
            console.log("after save");
        }),
        (0, typegoose_1.modelOptions)({
            schemaOptions: {
                timestamps: true,
                toObject: { virtuals: true },
                // toObject: {
                //   transform: function (_, ret) {
                //     delete ret.password;
                //     delete ret.tokens;
                //   },
                // },
                toJSON: {
                    virtuals: true,
                    transform: function (_, ret) {
                        // ret.toObject();
                        delete ret.password;
                        delete ret.tokens;
                    }
                }
            },
            options: {
                /**
                 * allow the use and execution of mongoose.Schema.Types.Mixed, if the inferred type cannot be set otherwise
                 */
                allowMixed: typegoose_1.Severity.ALLOW
            }
        })
    ], User);
    return User;
}());
exports.User = User;
var UserModel = (0, typegoose_1.getModelForClass)(User);
exports["default"] = UserModel;
