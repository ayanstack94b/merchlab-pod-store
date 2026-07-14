import "dotenv/config";

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

const db = client.db("MERCHLAB-AUTH-DB");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  trustedOrigins: [
    "http://localhost:5173",
  ],

  emailAndPassword: {
    enabled: true,
  },
});