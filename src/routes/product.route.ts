import express from "express";
import * as ProductController from "../controller/Product.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

//Public endpoint
router.get("/product_list", ProductController.getProductList); //ok

//Protected endpoint
router.use(auth); //ok
router.post("/product/create", ProductController.createProduct); //ok
router.patch("/product/update", ProductController.modifyProduct); //ok
router.delete("/product/delete", ProductController.deleteProduct); //ok
router.delete(
  "/product/multi_delete",
  ProductController.deleteMultipleProducts
);

router.post("/product/detail", ProductController.getProductDetail); //ok

export default router;
