import express from "express";
import * as ProductController from "../controller/Product.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

//Public endpoint
router.get("/product_list", ProductController.getProductList);

//Protected endpoint
router.use(auth);
router.post("/product/create", ProductController.createProduct);
router.patch("/product/update", ProductController.modifyProduct);
router.delete("/product/delete", ProductController.deleteProduct);
router.delete(
  "/product/multi_delete",
  ProductController.deleteMultipleProducts
);

router.post("/product/detail", ProductController.getProductDetail);

export default router;
