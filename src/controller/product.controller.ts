import ProductModel, { Product } from "./../model/product.model";
import { RequestHandler, Request, Response } from "express";
import { omit } from "ramda";

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
  salePrice?: number;
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
    const updateFields: IList = {};

    Object.keys(omit(["_id"], productItem)).forEach((item) => {
      updateFields[item] = productItem[item];
    });

    const product = await ProductModel.findOneAndUpdate(
      { _id: productItem._id },
      updateFields,
      { new: true }
    );
    if (!product) throw new Error("Product not found");
    console.log({ product });

    await product!.save();

    res.status(200).send({
      msg: "success",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

interface IQuery {
  keyword: string;
  price: string;
  brands: string[];
  categories: string[];
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

interface IFacet {
  $facet: {
    count: { $count: string }[];
    list: [{ [key: string]: number }?, ISort?, { [key: string]: number }?];
  };
}

export const getProductList: RequestHandler<
  unknown,
  unknown,
  unknown,
  IQuery
> = async (req, res) => {
  const {
    keyword = "",
    brands,
    price,
    categories,
    sortBy,
    orderBy,
    page,
  } = req.query;

  let pipeline: (IMatch | IFacet)[] = [];

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

    if (brands) {
      AMatch.$match["brand"] = Array.isArray(brands)
        ? {
            $in: brands,
          }
        : brands;
    }
    console.log(brands);
    console.log(categories);

    if (categories) {
      AMatch.$match["category"] = Array.isArray(categories)
        ? {
            $in: categories,
          }
        : categories;
    }
    pipeline.push(AMatch);

    const AFacet: IFacet = {
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
      const ASort: ISort = {
        $sort: {
          [sortBy]: orderBy === "asc" ? 1 : -1,
          _id: orderBy === "asc" ? 1 : -1,
        },
      };
      AFacet.$facet.list.push(ASort);
    }
    AFacet.$facet.list.push({ $skip: (page - 1) * 10 }, { $limit: 1 });
    pipeline.push(AFacet);

    //@ts-ignore
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
    const product = await ProductModel.findOne({ productId }).populate(
      "reviews"
    );
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
