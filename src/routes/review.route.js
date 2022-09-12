"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ReviewController = require("../controller/review.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validate_middleware_1 = require("../middleware/validate.middleware");
var Interface = require("../schema/index");
var router = express_1["default"].Router();
router.post("/review", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.CreateReviewInterface), ReviewController.createReview); //ok
router.patch("/review", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UpdateReviewInterface), ReviewController.modifyReview); //ok
router["delete"]("/review", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.DeleteReviewInterface), ReviewController.deleteReview); //ok
exports["default"] = router;
