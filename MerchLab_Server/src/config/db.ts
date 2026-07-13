import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    console.log("✅ MerchLab Database Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed");

    process.exit(1);
  }
};

export default connectDB;