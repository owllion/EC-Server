import mongoose from "mongoose";

const dbConnect = async () => {
  console.log("db網誌", process.env.MONGODB_URI!);
  const dbUri = process.env.MONGODB_URI!!;
  console.log({ dbUri });
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (e) {
    console.log(
      `Initial Distribution API Database connection error occur -`,
      e
    );
  }
};

export default dbConnect;
