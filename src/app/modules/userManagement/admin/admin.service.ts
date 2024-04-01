import { Types } from "mongoose";
import { TRoles } from "../users.interface";
const allAdmins = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneAdmin = async (auid: Types.ObjectId) => {
  console.log(auid);
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
  allAdmins,
  oneAdmin,
  getMe,
  updateMe,
  deleteMe,
};
