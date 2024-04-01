import { Types } from "mongoose";

export type TAdmin = {
  uuid: Types.ObjectId;
  userId: string;
  adminId: string;
  status: "active" | "inactive";
};
