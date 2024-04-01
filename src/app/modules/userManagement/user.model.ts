import mongoose, { Schema } from "mongoose";
import {
  TAcademicQualification,
  TAddress,
  TGuardian,
  TName,
  TUser,
} from "./users.interface";

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const addressSchema = new Schema<TAddress>({
  area: {
    type: String,
    required: true,
  },
  upazilla: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  relation: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const academicQualificationSchema = new Schema<TAcademicQualification>({
  exam: {
    type: String,
    required: true,
  },
  passingYear: {
    type: Number,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema<TUser>(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    academicQualification: [academicQualificationSchema],
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "student",
        "lecturer",
        "department-admin",
        "faculty-admin",
        "controller",
        "applicant",
        "admin",
      ],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<TUser>("user", userSchema);
