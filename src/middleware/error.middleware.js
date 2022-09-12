"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var errorHandler = function (error, req, res, next) {
    var status = error.statusCode || error.status || 500;
    res.status(status).send(error);
};
exports.errorHandler = errorHandler;
