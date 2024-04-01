import { Types } from "mongoose";
import { TRoles } from "../users.interface";

const allLecturers = async (query: Record<string, unknown>) => {
  console.log(query);
};

const onelecturer = async (luid: Types.ObjectId) => {
  console.log(luid);
};

const getMe = async (id: Types.ObjectId, role: TRoles) => {
  console.log(id, role);
};
const updateMe = async (id: Types.ObjectId, role: TRoles) => {
  console.log(id, role);
};
const deleteMe = async (id: Types.ObjectId, role: TRoles) => {
  console.log(id, role);
};

export const userServices = {
  allLecturers,
  onelecturer,
  getMe,
  updateMe,
  deleteMe,
};
