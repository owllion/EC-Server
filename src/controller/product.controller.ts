import { RequestHandler } from "express";
import ProductModel, { Product } from "./../model/product.model";
import * as ProductServices from "../services/product.service";
import * as ProductInterface from "../interface/controller/product.controller.interface";

export const createProduct: RequestHandler = async (req, res) => {
  const product = new ProductModel(req.body as Product);
  try {
    await product.save();

    res.status(201).send({
      msg: "success",
      product,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteProduct: RequestHandler<
  {},
  {},
  { productId: string }
> = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await ProductModel.findOne({ productId });

    await product!.remove();

    res.status(200).send({ msg: "Delete successfully" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteMultipleProducts: RequestHandler<
  {},
  {},
  { productList: string[] }
> = async (req, res) => {
  const { productList: batch } = req.body;

  try {
    await ProductModel.deleteMany({
      productId: {
        $in: batch,
      },
    });

    res.status(200).send({ msg: "Delete successfully!" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const modifyProduct: RequestHandler<
  unknown,
  unknown,
  { productItem: ProductInterface.IProduct },
  unknown
> = async (req, res) => {
  try {
    const product = await ProductServices.getModifiedItem(req.body.productItem);

    await product!.save();

    res.status(200).send({
      msg: "success",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getProductList: RequestHandler<
  unknown,
  unknown,
  unknown,
  ProductInterface.IQuery
> = async (req, res) => {
  try {
    const paginatedProducts = await ProductServices.generatePipeline(req.query);
    res.status(200).send({
      productList: paginatedProducts,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getProductDetail: RequestHandler<
  {},
  {},
  { productId: string }
> = async (req, res) => {
  try {
    const productDetail = await ProductServices.getDetailWithReview(
      req.body.productId
    );

    res.status(200).send({
      msg: "success",
      productDetail,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getBestSellerList: RequestHandler = async (req, res) => {
  try {
    const list = await ProductModel.find().sort({ sales: -1 }).limit(10);

    res.status(200).send({
      msg: "success",
      list,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
