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

//student....
const allStudents = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneStudent = async (suid: Types.ObjectId) => {
  console.log(suid);
};

//lecturer..............
const allLecturers = async (query: Record<string, unknown>) => {
  console.log(query);
};

const onelecturer = async (luid: Types.ObjectId) => {
  console.log(luid);
};

//department admin........

const allDAdmins = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneDAdmin = async (duid: Types.ObjectId) => {
  console.log(duid);
};

//faculty admin............

const allFAdmins = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneFAdmin = async (fuid: Types.ObjectId) => {
  console.log(fuid);
};

//controller...................

const allControllers = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneController = async (cuid: Types.ObjectId) => {
  console.log(cuid);
};

//admin.............

const allAdmins = async (query: Record<string, unknown>) => {
  console.log(query);
};

const oneAdmin = async (auid: Types.ObjectId) => {
  console.log(auid);
};

//self controls.........

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
  createUser,
  getUsers,
  oneUser,
  deleteUser,
  blockUser,
  allStudents,
  oneStudent,
  allLecturers,
  onelecturer,
  allDAdmins,
  oneDAdmin,
  allFAdmins,
  oneFAdmin,
  allControllers,
  oneController,
  allAdmins,
  oneAdmin,
  getMe,
  updateMe,
  deleteMe,
};
