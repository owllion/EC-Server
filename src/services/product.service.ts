import { omit } from "ramda";
import ProductModel from "../model/product.model";
import * as ProductInterface from "../interface/controller/product.controller.interface";

export const getDetailWithReview = async (productId: string) => {
  const product = await ProductModel.findOne({ productId }).populate("reviews");

  if (!product) throw new Error("Product not found");

  return product;
};

export const getPriceRange = (price: string) => {
  return {
    max_: Number(price.substring(0, price.indexOf("-"))) || 0,
    min_: Number(price.substring(price.indexOf("-"))) || 0,
  };
};

export const generatePipeline = async (query: ProductInterface.IQuery) => {
  const {
    keyword = "",
    brands,
    price,
    categories,
    sortBy,
    orderBy,
    page,
  } = query;

  type Pipeline = ProductInterface.IMatch | ProductInterface.IFacet;
  let pipeline: Pipeline[] = [];

  const AMatch: ProductInterface.IMatch = {
    $match: {
      productName: {
        $regex: keyword,
        $options: "i",
      },
    },
  };
  if (price) {
    AMatch.$match["price"] = {
      $gte: getPriceRange(price).max_,
      $lte: getPriceRange(price).min_,
    };
  }
  if (brands) {
    AMatch.$match["brand"] = Array.isArray(brands)
      ? {
          $in: brands,
        }
      : brands;
  }

  if (categories) {
    AMatch.$match["category"] = Array.isArray(categories)
      ? {
          $in: categories,
        }
      : categories;
  }
  pipeline.push(AMatch);
  const AFacet: ProductInterface.IFacet = {
    $facet: {
      list: [],
      count: [
        {
          $count: "totalDoc",
        },
      ],
    },
  };
  if (sortBy) {
    const ASort: ProductInterface.ISort = {
      $sort: {
        [sortBy]: orderBy === "asc" ? 1 : -1,
        _id: orderBy === "asc" ? 1 : -1,
      },
    };
    AFacet.$facet.list.push(ASort);
  }
  AFacet.$facet.list.push({ $skip: (page - 1) * 10 }, { $limit: 10 });

  pipeline.push(AFacet);

  //@ts-ignore
  return await ProductModel.aggregate(pipeline);
};

export const getModifiedItem = async (
  productItem: ProductInterface.IProduct
) => {
  const updateFields: ProductInterface.IList = {};

  Object.keys(omit(["_id"], productItem)).forEach((item) => {
    updateFields[item] = productItem[item];
  });

  const product = await ProductModel.findOneAndUpdate(
    { _id: productItem._id },
    updateFields,
    { new: true }
  );
  if (!product) throw new Error("Product not found");
  return product;
};
