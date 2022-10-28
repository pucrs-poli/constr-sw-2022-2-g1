import IClassroom from "../interfaces/IClassroom";
import Classroom from "../models/Classroom";
import * as buildingsService from "./buildingsService";

export async function getAll() {
  return await Classroom.find().populate("building");
}

export async function getById(id: string) {
  return await Classroom.findById(id).populate("building");
}

export async function create(classroom: IClassroom) {
  const createdClassroom = await Classroom.create(classroom);
  buildingsService.addClassroom(classroom.building, createdClassroom._id);
  return createdClassroom;
}
