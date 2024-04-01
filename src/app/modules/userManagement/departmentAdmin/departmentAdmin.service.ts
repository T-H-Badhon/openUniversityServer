import { Types } from "mongoose";
import { TRoles } from "../users.interface";

const allDAdmins = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneDAdmin = async (duid: Types.ObjectId) => {
  console.log(duid);
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
  allDAdmins,
  oneDAdmin,
  getMe,
  updateMe,
  deleteMe,
};
