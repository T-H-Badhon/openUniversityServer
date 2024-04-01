import { Types } from "mongoose";

export type TFacultyAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  fAdminId: string;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};
