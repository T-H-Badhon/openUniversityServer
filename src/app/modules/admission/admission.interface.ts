import { Types } from "mongoose";

export type TRequirement = {
  exam: string;
  minResult: number;
  details?: string;
};

export type TAdmission = {
  department: Types.ObjectId;
  faculty: Types.ObjectId;
  session: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  requirements: TRequirement[];
  additionalNotes: string;
  totalStudents: number;
};
