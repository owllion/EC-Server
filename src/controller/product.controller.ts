import ProductModel, { Product } from "./../model/product.model";
import { RequestHandler, Request, Response } from "express";

export const createProduct: RequestHandler = async (req, res) => {
  const product = new ProductModel(req.body as Product);

  try {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const productId = `${random1}${Date.now()}${random2}`;

    product.productId = productId;

    await product.save();

    res.status(201).send({
      msg: "success",
      product,
    });
  } catch (e) {
    res.send(500).send({ msg: e.message });
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const { productId } = req.body as { productId: string };
  try {
    const product = await ProductModel.findOne({ productId });

    await product!.remove();

    res.status(200).send({ msg: "Delete successfully" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteMultipleProducts: RequestHandler = async (req, res) => {
  const { productList: batch } = req.body as { productList: string[] };

  try {
    await ProductModel.deleteMany({
      productId: {
        $in: [...batch],
      },
    });

    res.status(200).send({ msg: "Delete successfully!" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

interface ObjKeys {
  [key: string]: string | string[] | undefined | Date | number | boolean;
}
interface IProduct extends ObjKeys {
  _id: string;
  productName?: string;
  imageList?: string[];
  price?: number;
  sale_price?: number;
  brand?: string;
  category?: string;
  description?: string;
  stock?: number;
  availability?: boolean;
  sales?: number;
  isChecked?: boolean;
}
interface IList extends Omit<IProduct, "_id"> {}

export const modifyProduct: RequestHandler<
  unknown,
  unknown,
  { productItem: IProduct },
  unknown
> = async (req, res) => {
  const { productItem } = req.body;
  try {
    const fieldList: IList = {};

    const updateFields = Object.keys(productItem);

    updateFields.forEach((item) => {
      fieldList[item] = productItem[item];
    });

    const coupon = await ProductModel.findOneAndUpdate(
      { _id: productItem._id },
      fieldList,
      { new: true }
    );

    console.log({ coupon });

    await coupon!.save();

    res.status(200).send({
      msg: "success",
    });
  } catch (e) {
    res.status(50).send({ msg: e.message });
  }
};

interface IQuery {
  keyword: string;
  price: string;
  brandList: string[];
  categoryList: string[];
  sortBy: string;
  orderBy: string;
  page: number;
}
interface IMatch {
  $match: {
    productName: {
      $regex: string;
      $options: string;
    };
    brand?: {
      $in: string[];
    };
    category?: {
      $in: string[];
    };
    price?: {
      $gte: number;
      $lte: number;
    };
  };
}
interface ISort {
  $sort: {
    [x: string]: 1 | -1;
    _id: 1 | -1;
  };
}

export const getProductList: RequestHandler<
  unknown,
  unknown,
  unknown,
  IQuery
> = async (req, res) => {
  const { keyword, brandList, price, categoryList, sortBy, orderBy, page } =
    req.query;

  let pipeline = [];

  try {
    const getPriceRange = () => {
      return {
        max_: Number(price.substring(0, price.indexOf("-"))) || 0,
        min_: Number(price.substring(price.indexOf("-"))) || 0,
      };
    };

    const AMatch: IMatch = {
      $match: {
        productName: {
          $regex: keyword,
          $options: "i",
        },
      },
    };
    if (price) {
      AMatch.$match["price"] = {
        $gte: getPriceRange().max_,
        $lte: getPriceRange().min_,
      };
    }
    if (brandList.length > 0) {
      AMatch.$match["brand"] = {
        $in: brandList,
      };
    }
    if (categoryList.length > 0) {
      AMatch.$match["category"] = {
        $in: categoryList,
      };
    }
    pipeline.push(AMatch);

    if (sortBy) {
      const ASort: ISort = {
        $sort: {
          [sortBy]: orderBy === "asc" ? 1 : -1,
          _id: orderBy === "asc" ? 1 : -1,
        },
      };
      pipeline.push(ASort);
    }

    const ASkip = {
      $skip: (page - 1) * 20,
    } as { $skip: number };

    pipeline.push(ASkip, { $limit: 10 });

    const paginatedProducts = await ProductModel.aggregate(pipeline);

    res.status(200).send({
      productList: paginatedProducts,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getProductDetail: RequestHandler = async (req, res) => {
  const { productId } = req.body as { productId: string };
  try {
    const product = await ProductModel.findOne({ productId });
    if (!product) {
      throw new Error("Product does not exist");
    }
    res.status(200).send({
      msg: "success",
      productDetail: product,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
