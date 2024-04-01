import { Types } from "mongoose";

export type TDepartmentAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  dAdminId: string;
  assignDepartment: Types.ObjectId;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};
