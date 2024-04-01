import mongoose, { Schema } from "mongoose";
import { TController } from "./controller.interface";
const controllerSchema = new Schema<TController>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    controllerId: { type: String, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

export const ControllerModel = mongoose.model<TController>(
  "controller",
  controllerSchema
);
