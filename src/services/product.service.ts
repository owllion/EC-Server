import ProductModel from "../model/product.model";

export const getDetailWithReview = async (productId: string) => {
  const product = await ProductModel.findOne({ productId }).populate("reviews");

  if (!product) throw new Error("Product not found");

  return product;
};
