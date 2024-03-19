import mongoose, { Schema } from "mongoose";
import {
  TAddress,
  TAdmin,
  TController,
  TDepartmentAdmin,
  TFacultyAdmin,
  TGuardian,
  TLecturer,
  TName,
  TStudent,
  TUser,
} from "./users.interface";

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const addressSchema = new Schema<TAddress>({
  area: {
    type: String,
    required: true,
  },
  upazilla: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  relation: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema<TUser>(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "student",
        "lecturer",
        "department-admin",
        "faculty-admin",
        "controller",
        "visitor",
        "admin",
      ],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentSchema = new Schema<TStudent>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    studentId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    enrolledDegree: { type: Schema.Types.ObjectId, required: true },
    enrolledDepartment: { type: Schema.Types.ObjectId, required: true },
    enrolledFaculty: { type: Schema.Types.ObjectId, required: true },
    enrolledSession: { type: Schema.Types.ObjectId, required: true },
    academicSemester: {
      type: String,
      enum: ["1st", "2nd", "3rd", "4th"],
      required: true,
    },
    status: { type: String, enum: ["running", "graduated"], required: true },
  },
  {
    timestamps: true,
  }
);

const lecturerSchema = new Schema<TLecturer>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    lecturerId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    assignDepartment: { type: Schema.Types.ObjectId, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

const dAdminSchema = new Schema<TDepartmentAdmin>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    dAdminId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    assignDepartment: { type: Schema.Types.ObjectId, required: true },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

const fAdminSchema = new Schema<TFacultyAdmin>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    fAdminId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

const controllerSchema = new Schema<TController>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    controllerId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    assignFaculty: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

const adminSchema = new Schema<TAdmin>(
  {
    uuid: { type: Schema.Types.ObjectId, required: true },
    userId: { type: String, required: true },
    adminId: { type: String, required: true },
    name: {
      type: nameSchema,
      required: true,
    },
    contactNo: { type: String, required: true },
    address: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    status: { type: String, enum: ["active", "inactive"], required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<TUser>("user", userSchema);
export const StudentModel = mongoose.model<TStudent>("student", studentSchema);
export const DAdminModel = mongoose.model<TDepartmentAdmin>(
  "department-admin",
  dAdminSchema
);
export const FAdminModel = mongoose.model<TFacultyAdmin>(
  "faculty-admin",
  fAdminSchema
);
export const ControllerModel = mongoose.model<TController>(
  "controller",
  controllerSchema
);
export const AdminModel = mongoose.model<TAdmin>("admin", adminSchema);
