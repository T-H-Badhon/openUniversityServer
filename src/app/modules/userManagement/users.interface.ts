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
