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
};

export type TRoles =
  | "student"
  | "lecturer"
  | "department-admin"
  | "faculty-admin"
  | "controller"
  | "visitor"
  | "admin";

export type TUser = {
  userId: string;
  userName: string;
  role: TRoles;
  email: string;
  password: string;
};

export type TStudent = {
  uuid: Types.ObjectId;
  userId: string;
  studentId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  enrolledDergee: Types.ObjectId;
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
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  assignDepartment: string;
  assignFaculty: string;
  status: "active" | "inactive";
};

export type TDepartmentAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  dAdminId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  assignDepartment: string;
  assignFaculty: string;
  status: "active" | "inactive";
};

export type TFacultyAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  fAdminId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  assignFaculty: string;
  status: "active" | "inactive";
};

export type TController = {
  uuid: Types.ObjectId;
  userId: string;
  controllerId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  assignFaculty: string;
  status: "active" | "inactive";
};

export type TAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  adminId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  assignFaculty: string;
  status: "active" | "inactive";
};
