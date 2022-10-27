import mongoose from "mongoose";
import { CLASSROOM_MODEL_NAME } from "./Classroom";

export const BUILDING_MODEL_NAME = "Building";

const buildingSchema = new mongoose.Schema(
  {
    name: String,
    number: Number,
    address: {
      street: String,
      number: Number,
      complement: {
        type: String,
        required: false,
      },
      neighborhood: String,
      city: String,
      state: String,
      zipCode: String,
    },
    classrooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: CLASSROOM_MODEL_NAME,
      },
    ],
  },
  {
    methods: {
      findById: (id: string) => {
        return mongoose.model(BUILDING_MODEL_NAME).findById(id);
      },
      findAll: () => {
        return mongoose.model(BUILDING_MODEL_NAME).find();
      },
    },
  }
);

const Building = mongoose.model(BUILDING_MODEL_NAME, buildingSchema);

export default Building;