export interface CreateProductInterface {
  productId: string;
  productName: string;
  image: Array<string>;
  price: number;
  salePrice: number;
  brand: string;
  category: string;
  description: string;
  stock: number;
  availability: string;
  sales: number;
}
interface baseIdInterface {
  productId: string;
}
export interface DeleteProductInterface extends baseIdInterface {}

export interface DeleteMultipleProductsInterface {
  deletedProducts: Array<string>;
}
export interface getProductDetailInterface
  extends Partial<Omit<CreateProductInterface, "productId">>,
    baseIdInterface {}

export interface getProductsByCategoryInterface {
  category: string;
}
export interface ModifyProductInterface {
  productUpdate: {
    productId: string;
  };
}
