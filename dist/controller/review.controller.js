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
exports.modifyReview = exports.deleteReview = exports.createReview = void 0;
const review_model_1 = __importDefault(require("./../model/review.model"));
const ReviewServices = __importStar(require("../services/review.service"));
const apiMsg_1 = require("../constant/apiMsg");
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ReviewServices.checkIfUserHasCommented(req.body.product, req.user.id);
        const review = new review_model_1.default(Object.assign(Object.assign({}, req.body), { user: req.user.id }));
        yield review.save();
        res.status(201).send({
            msg: "successfully created",
            review,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.createReview = createReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reviewId } = req.body;
    try {
        const review = yield review_model_1.default.findOneAndDelete({ reviewId });
        if (!review)
            throw new Error(apiMsg_1.reviewNotFound);
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.deleteReview = deleteReview;
const modifyReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ReviewServices.checkIfReviewExists(req.body.reviewItem.reviewId);
        const review = yield ReviewServices.getModifiedItem(req.body.reviewItem);
        yield review.save();
        res.status(200).send({ msg: "success", review });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.modifyReview = modifyReview;
//# sourceMappingURL=review.controller.js.map