import { Product } from "../model/product.model";

export interface CreateReviewInterface {
  comment: string;
  rating: number;
  user: string;
  product: Product;
}

export interface UpdateReviewInterface {
  reviewItem: {
    reviewId: string;
    comment?: string;
    rating?: number;
  };
}

export interface DeleteReviewInterface {
  reviewId: string;
}
