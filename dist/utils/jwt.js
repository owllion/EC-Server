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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const signJwt = (object, key, options) => {
    const signKey = Buffer.from(key, "base64").toString("ascii");
    return jwt.sign(object, signKey, Object.assign({}, (options && options)));
};
exports.signJwt = signJwt;
const verifyJwt = (token, key) => {
    const publicKey = Buffer.from(key, "base64").toString("ascii");
    try {
        const decoded = jwt.verify(token, publicKey);
        return decoded;
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.js.map