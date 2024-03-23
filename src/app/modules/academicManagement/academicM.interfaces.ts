import { Types } from "mongoose";

export type TAcademicFaculty = {
  facultyId: string;
  facultyName: string;
};

export type TAcademicDepartment = {
  departmentId: string;
  departmentName: string;
  ufid: Types.ObjectId;
  facultyId: string;
};

export type TAcademicCourse = {
  courseId: string;
  courseName: string;
  credits: number;
  duid: Types.ObjectId;
  departmentId: string;
};

export type TAcademicSession = {
  sessionId: string;
  session: string;
};
