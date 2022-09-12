var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var User_1;
import pkg from "@typegoose/typegoose";
const { modelOptions, getModelForClass, prop, Severity, pre, post } = pkg;
import validator from "validator";
import argon2 from "argon2";
import config from "config";
import OrderModel from "../model/order.model.js";
import ReviewModel from "../model/review.model.js";
import { signJwt } from "./../utils/jwt.js";
let User = User_1 = class User {
    static async findByCredentials(email, password) {
        const user = await this.findOne({ email });
        if (!user) {
            throw new Error("No user with that email!");
        }
        console.log("這是pwd", password);
        const isMatch = await argon2.verify(user.password, password.trim());
        if (!isMatch) {
            throw new Error("Incorrect Password ");
        }
        return user;
    }
    async generateAuthToken() {
        const token = signJwt({ _id: this._id.toString() }, config.get("jwtSecret"), {
            expiresIn: "1d",
        });
        this.tokens = this.tokens?.concat({ token });
        await this.save();
        return token;
    }
    async generateRefreshToken() {
        const refreshToken = signJwt({ _id: this._id.toString() }, config.get("refreshSecret"), {
            expiresIn: "1y",
        });
        return refreshToken;
    }
    async generateLinkToken() {
        const linkToken = signJwt({ _id: this._id.toString() }, config.get("linkSecret"), {
            expiresIn: "1d",
        });
        return linkToken;
    }
};
__decorate([
    prop({
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    prop({ default: "", trim: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    prop({ default: "", trim: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    prop({ default: "", trim: true }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    prop({ default: "" }),
    __metadata("design:type", Object)
], User.prototype, "phone", void 0);
__decorate([
    prop({ default: "" }),
    __metadata("design:type", String)
], User.prototype, "avatarUpload", void 0);
__decorate([
    prop({
        default: "https://res.cloudinary.com/azainseong/image/upload/v1662517415/mij3ogxe5cqxitevri9z.png",
    }),
    __metadata("design:type", String)
], User.prototype, "avatarDefault", void 0);
__decorate([
    prop({
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
    prop(),
    __metadata("design:type", Array)
], User.prototype, "tokens", void 0);
__decorate([
    prop({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    prop(),
    __metadata("design:type", Array)
], User.prototype, "cartList", void 0);
__decorate([
    prop(),
    __metadata("design:type", Array)
], User.prototype, "favList", void 0);
__decorate([
    prop(),
    __metadata("design:type", Array)
], User.prototype, "couponList", void 0);
__decorate([
    prop({
        ref: "Order",
        foreignField: "owner",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], User.prototype, "orderList", void 0);
__decorate([
    prop({
        ref: "Review",
        foreignField: "user",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], User.prototype, "reviewList", void 0);
User = User_1 = __decorate([
    pre("save", async function (next) {
        const user = this;
        if (user.isModified("password")) {
            user.password = await argon2.hash(user.password);
        }
        next();
    }),
    pre("deleteOne", async function (next) {
        const id = this.getFilter()["_id"];
        await OrderModel.deleteMany({ owner: id });
        await ReviewModel.deleteMany({ owner: id });
        next();
    }),
    post("save", function () {
        console.log("after save");
    }),
    modelOptions({
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
            allowMixed: Severity.ALLOW,
        },
    })
], User);
export { User };
const UserModel = getModelForClass(User);
export default UserModel;
//# sourceMappingURL=user.model.js.map