import { Types } from "mongoose";
import { Department } from "../academicManagement/academicM.model";
import { TRoles, TUser } from "./users.interface";

const createUser = async (userdata: TUser) => {
  console.log(userdata);
};

const getUsers = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneUser = async (uuid: Types.ObjectId) => {
  console.log(uuid);
};

const deleteUser = async (uuid: Types.ObjectId) => {
  console.log(uuid);
};

const blockUser = async (uuid: Types.ObjectId) => {
  console.log(uuid);
};

export const userServices = {
  createUser,
  getUsers,
  oneUser,
  deleteUser,
  blockUser,
};
