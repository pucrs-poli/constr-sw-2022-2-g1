import Building from "../models/Building";

export async function getAll() {
  return await Building.find().populate("classrooms");
}

export async function getById(id: string) {
  return await Building.findById(id).populate("classrooms");
}
