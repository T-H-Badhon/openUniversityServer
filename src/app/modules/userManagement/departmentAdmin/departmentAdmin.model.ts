import mongoose, { Schema } from "mongoose";
import { TDepartmentAdmin } from "./departmentAdmin.interface";

const dAdminSchema = new Schema<TDepartmentAdmin>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    dAdminId: { type: String, required: true },
    assignDepartment: { type: Schema.Types.ObjectId, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

export const DAdminModel = mongoose.model<TDepartmentAdmin>(
  "department-admin",
  dAdminSchema
);
