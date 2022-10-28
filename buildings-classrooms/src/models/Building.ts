import mongoose from "mongoose";
import IBuilding from "../interfaces/IBuilding";

const buildingSchema = new mongoose.Schema<IBuilding>({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    complement: {
      type: String,
      required: false,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  classrooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
    },
  ],
});

const Building = mongoose.model<IBuilding>("Building", buildingSchema);

export default Building;
