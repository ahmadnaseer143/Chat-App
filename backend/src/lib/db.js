import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo Db Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongo DB connecttion error:", error);
    process.exit(1);
  }
};
