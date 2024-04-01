import { Types } from "mongoose";

export type TLecturer = {
  uuid: Types.ObjectId;
  userId: string;
  lecturerId: string;
  assignDepartment: Types.ObjectId;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};
