"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.verifyJwt = exports.signJwt = void 0;
var jwt = require("jsonwebtoken");
var signJwt = function (object, key, options) {
    var signKey = Buffer.from(key, "base64").toString("ascii");
    return jwt.sign(object, signKey, __assign({}, (options && options)));
};
exports.signJwt = signJwt;
var verifyJwt = function (token, key) {
    var publicKey = Buffer.from(key, "base64").toString("ascii");
    try {
        var decoded = jwt.verify(token, publicKey);
        return decoded;
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.verifyJwt = verifyJwt;
