import IClassroom from "../interfaces/IClassroom";
import Classroom from "../models/Classroom";

export async function getAll() {
  return await Classroom.find().populate("building");
}

export async function getById(id: string) {
  return await Classroom.findById(id).populate("building");
}

export async function create(classroom: IClassroom) {
  return await Classroom.create(classroom);
}
