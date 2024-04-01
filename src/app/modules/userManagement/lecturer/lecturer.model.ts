import mongoose, { Schema } from "mongoose";
import { TLecturer } from "./lecturer.interface";
const lecturerSchema = new Schema<TLecturer>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    lecturerId: { type: String, required: true },
    assignDepartment: { type: Schema.Types.ObjectId, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

export const LecturerModel = mongoose.model<TLecturer>(
  "lecturer",
  lecturerSchema
);
