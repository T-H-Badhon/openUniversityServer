import { Types } from "mongoose";

export type TCourseResult = {
  cuid: Types.ObjectId;
  courseId: string;
  marks: number;
  gpa: number;
  isPassed: boolean;
};

export type TSemesterResult = {
  semester: "1st" | "2nd" | "3rd" | "4th";
  courseResult: TCourseResult[];
  cgpa: number;
  isPassed: boolean;
};

export type TResult = {
  suid: Types.ObjectId;
  studentId: string;
  semesterResult: TSemesterResult[];
  cgpa: string;
  isGraduated: boolean;
};
