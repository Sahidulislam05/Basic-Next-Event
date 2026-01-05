import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

const uri = process.env.MONGODB_URI;

export async function dbConnect() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("NextEvent");
  return { client, db };
}
