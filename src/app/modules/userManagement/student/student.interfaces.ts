import { Types } from "mongoose";

export type TStudent = {
  uuid: Types.ObjectId;
  userId: string;
  studentId: string;
  enrolledDegree: Types.ObjectId;
  enrolledDepartment: Types.ObjectId;
  enrolledFaculty: Types.ObjectId;
  enrolledSession: Types.ObjectId;
  academicSemester: "1st" | "2nd" | "3rd" | "4th";
  status: "running" | "graduated";
};
