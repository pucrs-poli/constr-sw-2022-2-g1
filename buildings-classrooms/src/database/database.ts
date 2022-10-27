import { MongoClient, Db } from "mongodb";
import { MONGODB_HOST, MONGODB_PORT } from "../config";

const url = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}`;
const databaseName = "buildings-classrooms";

const client = new MongoClient(url);
let database: Db;

export async function connectToMongoDB(): Promise<Db> {
  try {
    await client.connect();
    database = client.db(databaseName);
    return database;
  } catch (error) {
    throw error;
  }
}

export function getDatabase(): Db {
  return database;
}
