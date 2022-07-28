export interface CreateProductInterface {
  productName: string;
  imageList: Array<string>;
  price: number;
  salePrice?: number;
  brand: string;
  category: string;
  description: string;
  stock: number;
  availability: boolean;
  sales: number;
}
interface baseIdInterface {
  productId: string;
}
export interface DeleteProductInterface extends baseIdInterface {}

export interface DeleteMultipleProductsInterface {
  productList: string[];
}
export interface getProductDetailInterface extends baseIdInterface {}

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
export interface ModifyProductInterface {
  productItem: IProduct;
}
