import mongoose, { Schema } from "mongoose";
import { TCarrer } from "./carrerCircular.interface";
import { requirementSchema } from "../admissionCirculer/admission.model";

const carrerSchema = new Schema<TCarrer>(
  {
    post: {
      type: String,
      enum: [
        "lecturer",
        "department-admin",
        "faculty-admin",
        "controller",
        "admin",
      ],
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    requirements: {
      type: [requirementSchema],
    },
    salaryRange: {
      type: String,
      required: true,
    },
    additionalNotes: {
      type: String,
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Carrer = mongoose.model<TCarrer>("carrer", carrerSchema);
