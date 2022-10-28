import mongoose from "mongoose";
import IBuilding from "../interfaces/IBuilding";

const buildingSchema = new mongoose.Schema<IBuilding>({
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
      ref: "Classroom",
    },
  ],
});

const Building = mongoose.model<IBuilding>("Building", buildingSchema);

export default Building;
