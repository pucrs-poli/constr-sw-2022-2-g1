import { Types } from "mongoose";

export default interface IClassroom {
  number: number;
  capacity: number;
  floor: number;
  resource: string;
  building: Types.ObjectId;
}
