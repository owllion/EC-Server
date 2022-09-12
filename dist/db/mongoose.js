import mongoose from "mongoose";
import config from "config";
const dbConnect = async () => {
    const dbUri = config.get("dbUri");
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        mongoose.connect(dbUri);
        console.log("Connected to DB");
    }
    catch (e) {
        console.log(`Initial Distribution API Database connection error occur -`, e);
    }
};
export default dbConnect;
//# sourceMappingURL=mongoose.js.map