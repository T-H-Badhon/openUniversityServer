import mongoose, { Schema } from "mongoose";
import {
  TAcademicCourse,
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSession,
} from "./academicM.interfaces";

const aSessionSchema = new Schema<TAcademicSession>(
  {
    sessionId: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const aFacultySchema = new Schema<TAcademicFaculty>(
  {
    facultyId: {
      type: String,
      required: true,
    },
    facultyName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const aDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    departmentId: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
    ufid: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    facultyId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const aCourseSchema = new Schema<TAcademicCourse>(
  {
    courseId: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    duid: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    departmentId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model<TAcademicCourse>("course", aCourseSchema);

export const Department = mongoose.model<TAcademicDepartment>(
  "department",
  aDepartmentSchema
);

export const Faculty = mongoose.model<TAcademicFaculty>(
  "faculty",
  aFacultySchema
);

export const Session = mongoose.model<TAcademicSession>(
  "session",
  aSessionSchema
);
