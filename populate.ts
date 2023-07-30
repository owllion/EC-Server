import { faker } from "@faker-js/faker";

import mongoose from "mongoose";
const mongoUrl =
  "mongodb+srv://taskapp:71696B7B4EBA5E794EC09EBC@cluster0.obssg.mongodb.net/React-Ecommerce";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to DB");
  } catch (e) {
    console.log(
      `Initial Distribution API Database connection error occur -`,
      e
    );
  }
};
dbConnect();

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, trim: true },
  description: { type: String },
  discountType: { type: String, required: true },
  amount: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  minimumAmount: { type: Number, required: true },
  // Add other properties as needed
});
const CouponModel = mongoose.model("Coupon", couponSchema);

async function generateFakeData() {
  const numberOfCoupons = 50;

  for (let i = 0; i < numberOfCoupons; i++) {
    const code = faker.string.alphanumeric(8);
    console.log(code, "這是code");
    const description = faker.lorem.sentence();
    const discountType = faker.helpers.arrayElement([
      "Percentage",
      "Fixed Amount",
    ]);
    const amount = faker.number.int({ min: 5, max: 50 });

    const expiryDate = faker.date.future();

    const minimumAmount = faker.number.int({ min: 100, max: 500 });
    console.log(
      {
        code,
        description,
        discountType,
        amount,
        expiryDate,
        minimumAmount,
        relatedCoupons: [],
      },
      "這是果"
    );
    const coupon = new CouponModel({
      code,
      description,
      discountType,
      amount,
      expiryDate,
      minimumAmount,
      relatedCoupons: [],
    });

    await coupon.save();
  }

  console.log("Fake data generated successfully.");
}

generateFakeData();
