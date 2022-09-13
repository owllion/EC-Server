"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController = __importStar(
  require("../controller/product.controller")
);
const auth_middleware_1 = __importDefault(
  require("../middleware/auth.middleware")
);
const validate_middleware_1 = __importDefault(
  require("../middleware/validate.middleware")
);
const Interface = __importStar(require("../schema/index"));
const router = express_1.default.Router();
router.get("/product-list", ProductController.getProductList);
router.get("/best-seller-list", ProductController.getBestSellerList);
router.post(
  "/product/detail",
  (0, validate_middleware_1.default)(Interface.GetProductDetailInterface),
  ProductController.getProductDetail
);
router.post(
  "/product",
  auth_middleware_1.default,
  (0, validate_middleware_1.default)(Interface.CreateProductInterface),
  ProductController.createProduct
);
router.patch(
  "/product",
  auth_middleware_1.default,
  (0, validate_middleware_1.default)(Interface.ModifyProductInterface),
  ProductController.modifyProduct
);
router.delete(
  "/product",
  auth_middleware_1.default,
  (0, validate_middleware_1.default)(Interface.DeleteProductInterface),
  ProductController.deleteProduct
);
router.delete(
  "/product/multi_delete",
  auth_middleware_1.default,
  (0, validate_middleware_1.default)(Interface.DeleteMultipleProductsInterface),
  ProductController.deleteMultipleProducts
);
exports.default = router;
//# sourceMappingURL=product.route.js.map
