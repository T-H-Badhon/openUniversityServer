import mongoose, { Schema } from "mongoose";
import { TStudent } from "./student.interfaces";

const studentSchema = new Schema<TStudent>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    studentId: { type: String, required: true },
    enrolledDegree: { type: Schema.Types.ObjectId, required: true },
    enrolledDepartment: { type: Schema.Types.ObjectId, required: true },
    enrolledFaculty: { type: Schema.Types.ObjectId, required: true },
    enrolledSession: { type: Schema.Types.ObjectId, required: true },
    academicSemester: {
      type: String,
      enum: ["1st", "2nd", "3rd", "4th"],
      required: true,
    },
    status: { type: String, enum: ["running", "graduated"], required: true },
  },
  {
    timestamps: true,
  }
);

export const StudentModel = mongoose.model<TStudent>("student", studentSchema);
