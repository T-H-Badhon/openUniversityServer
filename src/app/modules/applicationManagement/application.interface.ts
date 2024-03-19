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

export type TSApplication = {
  uuid: Types.ObjectId;
  userId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  appliedDegree: Types.ObjectId;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
  appliedSession: Types.ObjectId;
};

export type TLecturer = {
  uuid: Types.ObjectId;
  userId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
};

export type TDepartmentAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  name: TName;
  contactNo: string;
  address: TAddress;
  guardian: TGuardian;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
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
  assignFaculty: Types.ObjectId;
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
  assignFaculty: Types.ObjectId;
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
  status: "active" | "inactive";
};
