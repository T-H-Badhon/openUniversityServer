import mongoose, { Schema } from "mongoose";
import { TCourseResult, TResult, TSemesterResult } from "./result.interfaces";

const courseResultSchema = new Schema<TCourseResult>(
  {
    cuid: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    gpa: {
      type: Number,
      required: true,
    },
    isPassed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const semesterResultSchema = new Schema<TSemesterResult>(
  {
    semester: {
      type: String,
      enum: ["1st", "2nd", "3rd", "4th"],
      required: true,
    },
    courseResult: [courseResultSchema],
    cgpa: {
      type: Number,
      required: true,
    },
    isPassed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const resultSchema = new Schema<TResult>(
  {
    suid: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    semesterResult: [semesterResultSchema],
    cgpa: {
      type: String,
      default: "n/a",
    },
    isGraduated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Result = mongoose.model<TResult>("result", resultSchema);
