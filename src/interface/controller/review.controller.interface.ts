export interface IReview extends Record<string, string | number | undefined> {
  comment?: string;
  rating?: number;
  reviewId: string;
}
export interface IList extends Omit<IReview, "reviewId"> {}
