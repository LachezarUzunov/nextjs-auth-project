import { MongoClient } from "mongodb";

export async function connnectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://lacho:mhbrW42k5@next-auth.f8gk3ag.mongodb.net/next-auth?retryWrites=true&w=majority"
  );

  return client;
}
