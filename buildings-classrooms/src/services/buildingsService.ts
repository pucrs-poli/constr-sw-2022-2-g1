import { Types } from "mongoose";
import IBuilding from "../interfaces/IBuilding";
import Building from "../models/Building";

export async function getAll(attributes: object) {
  if (attributes) {
    return Building.find(attributes).populate("classrooms");
  } else {
    return Building.find().populate("classrooms");
  }
}

export async function getById(id: string) {
  return await Building.findById(id).populate("classrooms");
}

export async function create(building: IBuilding) {
  return await Building.create(building);
}

export async function addClassroom(
  buildingId: Types.ObjectId,
  classroomId: Types.ObjectId
) {
  const building = await getById(buildingId.toString());
  if (building) {
    building.classrooms.push(classroomId);
    await building.save();
  } else {
    throw new Error("Building not found.");
  }
}

export async function updateById(id: string, building: IBuilding) {
  return await Building.findByIdAndUpdate(id, building);
}

export async function deleteById(id: string) {
  return await Building.findByIdAndDelete(id);
}
