import { omit } from "ramda";
import ProductModel from "../model/product.model.js";
export const getDetailWithReview = async (productId) => {
    const product = await ProductModel.findOne({ productId }).populate("reviews");
    if (!product)
        throw new Error("Product not found");
    return product;
};
export const getPriceRange = (price) => {
    return {
        min_: Number(price.substring(0, price.indexOf("-"))) || 0,
        max_: Number(price.substring(price.indexOf("-") + 1)) || 0,
    };
};
export const generatePipeline = async (query) => {
    const { keyword = "", brands, price, categories, sortBy, orderBy, page, } = query;
    let pipeline = [];
    const AMatch = {
        $match: {
            productName: {
                $regex: keyword,
                $options: "i",
            },
        },
    };
    if (price) {
        AMatch.$match["price"] = {
            $gte: getPriceRange(price).min_,
            $lte: getPriceRange(price).max_,
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
    const AFacet = {
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
        const ASort = {
            $sort: {
                [sortBy]: orderBy === "asc" ? 1 : -1,
                _id: orderBy === "asc" ? 1 : -1,
            },
        };
        AFacet.$facet.list.push(ASort);
    }
    AFacet.$facet.list.push({ $skip: (page - 1) * 12 }, { $limit: 12 });
    pipeline.push(AFacet);
    return await ProductModel.aggregate(pipeline);
};
export const getModifiedItem = async (productItem) => {
    const updateFields = {};
    Object.keys(omit(["_id"], productItem)).forEach((item) => {
        updateFields[item] = productItem[item];
    });
    const product = await ProductModel.findOneAndUpdate({ _id: productItem._id }, updateFields, { new: true });
    if (!product)
        throw new Error("Product not found");
    return product;
};
//# sourceMappingURL=product.service.js.map