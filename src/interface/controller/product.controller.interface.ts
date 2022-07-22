//getProductList
export interface IQuery {
  keyword: string;
  price: string;
  brands: string[];
  categories: string[];
  sortBy: string;
  orderBy: string;
  page: number;
}
export interface IMatch {
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
export interface ISort {
  $sort: {
    [x: string]: 1 | -1;
    _id: 1 | -1;
  };
}

export interface IFacet {
  $facet: {
    count: { $count: string }[];
    list: [{ [key: string]: number }?, ISort?, { [key: string]: number }?];
  };
}

//modifyProduct
interface ObjKeys {
  [key: string]: string | string[] | undefined | Date | number | boolean;
}
export interface IProduct extends ObjKeys {
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
export interface IList extends Omit<IProduct, "_id"> {}
