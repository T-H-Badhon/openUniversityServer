import { Types } from "mongoose";

export type TNotice = {
  title: string;
  onBehalf: string;
  publisher: Types.ObjectId; //auto generated
  department?: string; //auto generated
  date: Date; //auto generated.
  details: string;
};
