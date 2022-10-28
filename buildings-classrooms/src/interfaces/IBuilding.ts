import { Types } from "mongoose";

export default interface IBuilding {
  name: string;
  number: number;
  address: {
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  classrooms: Array<Types.ObjectId>;
}
