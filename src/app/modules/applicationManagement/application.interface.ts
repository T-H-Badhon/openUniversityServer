import { Types } from "mongoose";

export type TSApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  appliedDegree: Types.ObjectId;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
  appliedSession: Types.ObjectId;
  isSelected: boolean;
};

export type TLApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
  isSelected: boolean;
};

export type TDAApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  appliedDepartment: Types.ObjectId;
  appliedFaculty: Types.ObjectId;
  isSelected: boolean;
};

export type TFAApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  appliedFaculty: Types.ObjectId;
  isSelected: boolean;
};

export type TCApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  appliedFaculty: Types.ObjectId;
  isSelected: boolean;
};

export type TAApplication = {
  applicationId: string;
  uuid: Types.ObjectId;
  userId: string;
  isSelected: boolean;
};
