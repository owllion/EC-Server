"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ProductController = require("../controller/product.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validate_middleware_1 = require("../middleware/validate.middleware");
var Interface = require("../schema/index");
var router = express_1["default"].Router();
//Public endpoint
router.get("/product-list", ProductController.getProductList); //ok
router.get("/best-seller-list", ProductController.getBestSellerList); //ok
router.post("/product/detail", (0, validate_middleware_1["default"])(Interface.GetProductDetailInterface), ProductController.getProductDetail); //ok
//Protected endpoint
router.post("/product", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.CreateProductInterface), ProductController.createProduct); //ok
router.patch("/product", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.ModifyProductInterface), ProductController.modifyProduct); //ok
router["delete"]("/product", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.DeleteProductInterface), ProductController.deleteProduct); //ok
router["delete"]("/product/multi_delete", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.DeleteMultipleProductsInterface), ProductController.deleteMultipleProducts);
exports["default"] = router;
