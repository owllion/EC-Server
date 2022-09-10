import express from "express";
import * as ProductController from "../controller/product.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

//Public endpoint
router.get("/product-list", ProductController.getProductList); //ok
router.get("/best-seller-list", ProductController.getBestSellerList); //ok
router.post(
  "/product/detail",
  validateInput(Interface.GetProductDetailInterface),
  ProductController.getProductDetail
); //ok

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

export default router;
