"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const nanoid_1 = require("nanoid");
const validator_1 = __importDefault(require("validator"));
const argon2_1 = __importDefault(require("argon2"));
const order_model_1 = __importDefault(require("../model/order.model"));
const review_model_1 = __importDefault(require("../model/review.model"));
const jwt_1 = require("./../utils/jwt");
const userCoupon_model_1 = __importDefault(require("./userCoupon.model"));
let User = User_1 = class User {
    static findByCredentials(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne({ email });
            if (!user) {
                throw new Error("No user with that email!");
            }
            const isMatch = yield argon2_1.default.verify(user.password, password.trim());
            if (!isMatch) {
                throw new Error("Incorrect Password ");
            }
            return user;
        });
    }
    generateAuthToken() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = (0, jwt_1.signJwt)({ _id: this._id.toString() }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            this.tokens = (_a = this.tokens) === null || _a === void 0 ? void 0 : _a.concat({ token });
            yield this.save();
            return token;
        });
    }
    generateRefreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = (0, jwt_1.signJwt)({ _id: this._id.toString() }, process.env.REFRESH_SECRET, {
                expiresIn: "1y",
            });
            return refreshToken;
        });
    }
    generateLinkToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const linkToken = (0, jwt_1.signJwt)({ _id: this._id.toString() }, process.env.LINK_SECRET, {
                expiresIn: "1d",
            });
            return linkToken;
        });
    }
};
__decorate([
    (0, typegoose_1.prop)({
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: () => (0, nanoid_1.nanoid)() }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: "", trim: true }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", Object)
], User.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], User.prototype, "avatarUpload", void 0);
__decorate([
    (0, typegoose_1.prop)({
        default: "https://res.cloudinary.com/azainseong/image/upload/v1662517415/mij3ogxe5cqxitevri9z.png",
    }),
    __metadata("design:type", String)
], User.prototype, "avatarDefault", void 0);
__decorate([
    (0, typegoose_1.prop)({
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.includes("password")) {
                throw new Error("Password must not contain 'password'.");
            }
        },
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], User.prototype, "tokens", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], User.prototype, "cartList", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], User.prototype, "favList", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: "UserCoupon",
        foreignField: "user",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], User.prototype, "couponList", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: "Order",
        foreignField: "owner",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], User.prototype, "orderList", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: "Review",
        foreignField: "user",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], User.prototype, "reviewList", void 0);
User = User_1 = __decorate([
    (0, typegoose_1.pre)("save", function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this;
            if (user.isModified("password")) {
                user.password = yield argon2_1.default.hash(user.password);
            }
            next();
        });
    }),
    (0, typegoose_1.pre)("deleteOne", function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.getFilter()["_id"];
            yield order_model_1.default.deleteMany({ owner: id });
            yield review_model_1.default.deleteMany({ user: id });
            yield userCoupon_model_1.default.deleteMany({ user: id });
            next();
        });
    }),
    (0, typegoose_1.post)("save", function () {
        console.log("after save");
    }),
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            toObject: { virtuals: true },
            toJSON: {
                virtuals: true,
                transform: function (_, ret) {
                    delete ret.password;
                    delete ret.tokens;
                },
            },
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    })
], User);
exports.User = User;
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map