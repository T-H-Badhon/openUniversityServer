import { Types } from "mongoose";

export type TController = {
  uuid: Types.ObjectId;
  userId: string;
  controllerId: string;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};
