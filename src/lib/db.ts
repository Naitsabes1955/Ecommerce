import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("Environment variable MONGO_URI is required");
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: typeof mongoose;
};

const connectDb = async () => {
  if (globalWithMongoose.mongoose?.connection?.readyState) {
    return globalWithMongoose.mongoose;
  }

  const mongooseInstance = await mongoose.connect(mongoUri, {
    dbName: "ecommerce",
  });

  globalWithMongoose.mongoose = mongooseInstance;
  return mongooseInstance;
};

export default connectDb;
