import mongoose from "mongoose";
import IClassroom from "../interfaces/IClassroom";

const classroomSchema = new mongoose.Schema<IClassroom>({
  number: Number,
  capacity: Number,
  floor: Number,
  resource: String,
  building: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Building",
  },
});

const Classroom = mongoose.model<IClassroom>("Classroom", classroomSchema);

export default Classroom;
