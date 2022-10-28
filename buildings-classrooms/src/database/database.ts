import mongoose from "mongoose";
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

export async function startDatabase() {
  try {
    await mongoose.connect(url);
    await Building.createCollection();
    console.log("[OK] Building collection.");
    await Classroom.createCollection();
    console.log("[OK] Classroom collection.\n");
  } catch (error) {
    throw error;
  }
}
