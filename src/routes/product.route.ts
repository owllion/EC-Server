import express from "express";
import * as ProductController from "../controller/Product.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

//Public endpoint
router.get("/product_list", ProductController.getProductList); //ok

//Protected endpoint
router.use(auth); //ok
router.post(
  "/product/create",
  validateInput(Interface.CreateProductInterface),
  ProductController.createProduct
); //ok
router.patch(
  "/product/update",
  validateInput(Interface.ModifyProductInterface),
  ProductController.modifyProduct
); //ok
router.delete(
  "/product/delete",
  validateInput(Interface.DeleteProductInterface),
  ProductController.deleteProduct
); //ok
router.delete(
  "/product/multi_delete",
  validateInput(Interface.DeleteMultipleProductsInterface),
  ProductController.deleteMultipleProducts
);

router.post(
  "/product/detail",
  validateInput(Interface.GetProductDetailInterface),
  ProductController.getProductDetail
); //ok

export default router;
