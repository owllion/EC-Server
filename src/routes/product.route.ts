import express from "express";
import * as ProductController from "../controller/Product.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

//Public endpoint
router.get("/product-list", ProductController.getProductList); //ok

//Protected endpoint

router.post(
  "/product",
  auth,
  validateInput(Interface.CreateProductInterface),
  ProductController.createProduct
); //ok
router.patch(
  "/product",
  auth,
  validateInput(Interface.ModifyProductInterface),
  ProductController.modifyProduct
); //ok
router.delete(
  "/product",
  auth,
  validateInput(Interface.DeleteProductInterface),
  ProductController.deleteProduct
); //ok
router.delete(
  "/product/multi_delete",
  auth,
  validateInput(Interface.DeleteMultipleProductsInterface),
  ProductController.deleteMultipleProducts
);

router.post(
  "/product/detail",
  auth,
  validateInput(Interface.GetProductDetailInterface),
  ProductController.getProductDetail
); //ok

export default router;
