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

export const modifyProduct: RequestHandler = async (req, res) => {
  const { productItem } = req.body as { productItem: IProduct };
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
  order: {
    price: string;
    brand: string[];
    category: string[];
  };
  sort: Record<string, number>;
  page: number;
}
export const getProductList: RequestHandler<
  unknown,
  unknown,
  unknown,
  IQuery
> = async (req, res) => {
  //keyword/filter {price:[],brand:[],category:[]}/sort:sales、createdAt、price、字母(product:1or-1)/limit固定10/page
  const { keyword, order, sort, page } = req.query;
  // 總頁數totalPage 要跳過的skip 總共的資料筆數 totalDoc
  try {
    // const productList = await ProductModel.find({ category });
    // console.log(productList);
    // res.status(200).send({
    //   msg: "success",
    //   productList,
    // });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
