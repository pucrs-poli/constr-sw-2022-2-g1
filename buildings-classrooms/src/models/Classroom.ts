import mongoose from "mongoose";

export const CLASSROOM_MODEL_NAME = "Classroom";

const classroomSchema = new mongoose.Schema(
  {
    number: Number,
    capacity: Number,
    floor: Number,
    resource: String,
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Building", // For some reason, ref does not work with variables in general.
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
