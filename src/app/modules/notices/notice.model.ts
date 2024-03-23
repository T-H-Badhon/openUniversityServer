import mongoose, { Schema } from "mongoose";
import { TNotice } from "./notice.interface";

const noticeSchema = new Schema<TNotice>(
  {
    title: {
      type: String,
      required: true,
    },
    onBehalf: {
      type: String,
      required: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Notice = mongoose.model<TNotice>("notice", noticeSchema);
