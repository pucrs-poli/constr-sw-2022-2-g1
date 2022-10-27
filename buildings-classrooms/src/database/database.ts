import mongoose, { Connection } from "mongoose";
import { MONGODB_HOST, MONGODB_PORT } from "../config";
import Building from "../models/Building";
import Classroom from "../models/Classroom";

const DATABASE_NAME = "buildings-classrooms";

const url = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${DATABASE_NAME}`;

let connection: Connection;

export async function startDatabase(): Promise<void> {
  try {
    await mongoose.connect(url);
    await Building.createCollection();
    console.log("Building collection created.");
    await Classroom.createCollection();
    console.log("Classroom collection created.");
    connection = mongoose.connection;
  } catch (error) {
    throw error;
  }
}

export function getDatabase() {
  return connection.db;
}
