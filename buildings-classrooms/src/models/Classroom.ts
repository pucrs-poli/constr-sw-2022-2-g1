import mongoose from "mongoose";
import IClassroom from "../interfaces/IClassroom";

const classroomSchema = new mongoose.Schema<IClassroom>({
  number: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  resource: {
    type: String,
    required: true,
  },
  building: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Building",
  },
});

const Classroom = mongoose.model<IClassroom>("Classroom", classroomSchema);

export default Classroom;
