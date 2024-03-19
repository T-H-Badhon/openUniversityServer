import mongoose, { Schema } from "mongoose";
import {
  TAApplication,
  TCApplication,
  TDAApplication,
  TFAApplication,
  TLApplication,
  TSApplication,
} from "./application.interface";

const sApplicationSchema = new Schema<TSApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    appliedDegree: { type: Schema.Types.ObjectId, required: true },
    appliedDepartment: { type: Schema.Types.ObjectId, required: true },
    appliedFaculty: { type: Schema.Types.ObjectId, required: true },
    appliedSession: { type: Schema.Types.ObjectId, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const lApplicationSchema = new Schema<TLApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    appliedDepartment: { type: Schema.Types.ObjectId, required: true },
    appliedFaculty: { type: Schema.Types.ObjectId, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const dAApplicationSchema = new Schema<TDAApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },

    appliedDepartment: { type: Schema.Types.ObjectId, required: true },
    appliedFaculty: { type: Schema.Types.ObjectId, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const fAApplicationSchema = new Schema<TFAApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },

    appliedFaculty: { type: Schema.Types.ObjectId, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const cApplicationSchema = new Schema<TCApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    appliedFaculty: { type: Schema.Types.ObjectId, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const aApplicationSchema = new Schema<TAApplication>(
  {
    applicationId: { type: String, required: true },
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const SApplicationModel = mongoose.model<TSApplication>(
  "s-application",
  sApplicationSchema
);
export const LApplicationModel = mongoose.model<TLApplication>(
  "l-application",
  lApplicationSchema
);
export const DAApplicationModel = mongoose.model<TDAApplication>(
  "da-application",
  dAApplicationSchema
);
export const FAApplicationModel = mongoose.model<TFAApplication>(
  "fa-application",
  fAApplicationSchema
);
export const CApplicationModel = mongoose.model<TCApplication>(
  "c-application",
  cApplicationSchema
);
export const AApplicationModel = mongoose.model<TAApplication>(
  "a-application",
  aApplicationSchema
);
