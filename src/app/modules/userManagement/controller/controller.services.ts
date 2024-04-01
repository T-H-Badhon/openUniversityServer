import { Types } from "mongoose";
import { TRoles } from "../users.interface";

const allControllers = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneController = async (cuid: Types.ObjectId) => {
  console.log(cuid);
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
  allControllers,
  oneController,
  getMe,
  updateMe,
  deleteMe,
};
