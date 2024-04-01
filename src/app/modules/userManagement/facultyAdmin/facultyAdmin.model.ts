import mongoose, { Schema } from "mongoose";
import { TFacultyAdmin } from "./facultyAdmin.interface";

const fAdminSchema = new Schema<TFacultyAdmin>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    fAdminId: { type: String, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

export const FAdminModel = mongoose.model<TFacultyAdmin>(
  "faculty-admin",
  fAdminSchema
);
