"use strict";
exports.__esModule = true;
exports.notFoundHandler = void 0;
var notFoundHandler = function (req, res, next) {
    var message = "Resource not found";
    res.status(404).send({ msg: message });
};
exports.notFoundHandler = notFoundHandler;
