import mongoose from "mongoose";
import { BUILDING_MODEL_NAME } from "./Building";

export const CLASSROOM_MODEL_NAME = "Classroom";

const classroomSchema = new mongoose.Schema(
  {
    number: Number,
    capacity: Number,
    floor: Number,
    resource: String,
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: BUILDING_MODEL_NAME,
    },
  },
  {
    methods: {
      findById: (id: string) => {
        return mongoose.model(CLASSROOM_MODEL_NAME).findById(id);
      },
      findAll: () => {
        return mongoose.model(CLASSROOM_MODEL_NAME).find();
      },
    },
  }
);

const Classroom = mongoose.model(CLASSROOM_MODEL_NAME, classroomSchema);

export default Classroom;
