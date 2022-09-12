import express from "express";
import * as ProductController from "../controller/product.controller.js";
import auth from "../middleware/auth.middleware.js";
import validateInput from "../middleware/validate.middleware.js";
import * as Interface from "../schema/index.js";
const router = express.Router();
router.get("/product-list", ProductController.getProductList);
router.get("/best-seller-list", ProductController.getBestSellerList);
router.post("/product/detail", validateInput(Interface.GetProductDetailInterface), ProductController.getProductDetail);
router.post("/product", auth, validateInput(Interface.CreateProductInterface), ProductController.createProduct);
router.patch("/product", auth, validateInput(Interface.ModifyProductInterface), ProductController.modifyProduct);
router.delete("/product", auth, validateInput(Interface.DeleteProductInterface), ProductController.deleteProduct);
router.delete("/product/multi_delete", auth, validateInput(Interface.DeleteMultipleProductsInterface), ProductController.deleteMultipleProducts);
export default router;
//# sourceMappingURL=product.route.js.map