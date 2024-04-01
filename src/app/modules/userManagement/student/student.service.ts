import { Types } from "mongoose";
import { TRoles } from "../users.interface";

const allStudents = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneStudent = async (suid: Types.ObjectId) => {
  console.log(suid);
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

export const studentServices = {
  allStudents,
  oneStudent,
  getMe,
  updateMe,
  deleteMe,
};
