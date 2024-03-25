import { TRequirement } from "../admissionCirculer/admission.interface";

export type TPost =
  | "lecturer"
  | "department-admin"
  | "faculty-admin"
  | "controller"
  | "admin";

export type TCarrer = {
  post: TPost;
  responsibilities: string;
  requirements?: TRequirement[];
  salaryRange: string;
  additionalNotes: string;
  vacancy: number;
};
