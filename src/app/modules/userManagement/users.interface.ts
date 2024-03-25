import { Types } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  area: string;
  upazilla: string;
  district: string;
  country: string;
};

export type TGuardian = {
  relation: string;
  firstName: string;
  lastName: string;
  contactNo: string;
};

export type TAcademicQualification = {
  exam: string;
  passingYear: number;
  result: number;
};

export type TRoles =
  | "student"
  | "lecturer"
  | "department-admin"
  | "faculty-admin"
  | "controller"
  | "applicant"
  | "admin";

export type TUser = {
  userId: string;
  userName: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  academicQualification: TAcademicQualification[];
  guardian: TGuardian;
  role: TRoles;
  email: string;
  password: string;
  isBlocked: boolean;
};

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

export type TLecturer = {
  uuid: Types.ObjectId;
  userId: string;
  lecturerId: string;
  assignDepartment: Types.ObjectId;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};

export type TDepartmentAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  dAdminId: string;
  assignDepartment: Types.ObjectId;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};

export type TFacultyAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  fAdminId: string;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};

export type TController = {
  uuid: Types.ObjectId;
  userId: string;
  controllerId: string;
  assignFaculty: Types.ObjectId;
  status: "active" | "inactive";
};

export type TAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  adminId: string;
  status: "active" | "inactive";
};
