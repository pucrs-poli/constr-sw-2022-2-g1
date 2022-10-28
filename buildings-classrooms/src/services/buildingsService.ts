import IBuilding from "../interfaces/IBuilding";
import Building from "../models/Building";

export async function getAll() {
  return await Building.find().populate("classrooms");
}

export async function getById(id: string) {
  return await Building.findById(id).populate("classrooms");
}

export async function create(building: IBuilding) {
  return await Building.create(building);
}
