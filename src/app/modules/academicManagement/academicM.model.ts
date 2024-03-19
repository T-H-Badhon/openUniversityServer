import { Schema } from "mongoose";
import {
  TAcademicCourse,
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSession,
} from "./academicM.interfaces";

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

const aSessionSchema = new Schema<TAcademicSession>(
  {
    sessionId: {
      type: String,
      required: true,
    },
    academicSession: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
