import mongoose, { Connection } from "mongoose";
import { Db } from "mongodb";
import {
  MONGODB_HOST,
  MONGODB_PASSWORD,
  MONGODB_PORT,
  MONGODB_USER,
} from "../config";
import Building from "../models/Building";
import Classroom from "../models/Classroom";

const DATABASE_NAME = "buildings-classrooms";

const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${DATABASE_NAME}?authSource=admin`;

let connection: Connection;

export async function startDatabase(): Promise<void> {
  try {
    // Connecting to the database.
    await mongoose.connect(url);
    // Creating collections.
    await Building.createCollection();
    console.log("[OK] Building collection.");
    await Classroom.createCollection();
    console.log("[OK] Classroom collection.\n");
    connection = mongoose.connection;
  } catch (error) {
    throw error;
  }
}

export function getDatabase(): Db {
  return connection.db;
}
