"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./user.route"));
const coupon_route_1 = __importDefault(require("./coupon.route"));
const order_route_1 = __importDefault(require("./order.route"));
const product_route_1 = __importDefault(require("./product.route"));
const review_route_1 = __importDefault(require("./review.route"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello, World!");
});
router.use(product_route_1.default);
router.use(user_route_1.default);
router.use(coupon_route_1.default);
router.use(order_route_1.default);
router.use(review_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map