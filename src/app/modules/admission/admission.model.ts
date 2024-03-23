import mongoose, { Schema } from "mongoose";
import { TAdmission, TRequirement } from "./admission.interface";

export const requirementSchema = new Schema<TRequirement>({
  exam: {
    types: String,
    required: true,
  },
  minResult: {
    types: Number,
    required: true,
  },
  details: {
    types: String,
  },
});

const admissionSchema = new Schema<TAdmission>(
  {
    department: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    session: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    requirements: {
      type: [requirementSchema],
      required: true,
    },
    additionalNotes: {
      type: String,
      required: true,
    },
    totalStudents: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Admission = mongoose.model<TAdmission>(
  "admission",
  admissionSchema
);
