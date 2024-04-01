import { Router } from "express";
import { adminRoutes } from "./admin/admin.routes";
import { controllerRoutes } from "./controller/controller.routes";
import { facultyAdminRoutes } from "./facultyAdmin/facultyAdmin.routes";
import { departmenAdmintRoutes } from "./departmentAdmin/departmentAdmin.routes";
import { lecturerRoutes } from "./lecturer/lecturer.routes";
import { studentRoutes } from "./student/student.routes";

const router = Router();

//user.........................

router.post("/create-user");
router.get("/users");
router.get("/users/userId");
router.delete("/delete-user");
router.patch("/block-user");

//sub modules
router.use("/admins", adminRoutes);
router.use("/controllers", controllerRoutes);
router.use("/faculty-admins", facultyAdminRoutes);
router.use("/department-admins", departmenAdmintRoutes);
router.use("/lecturers", lecturerRoutes);
router.use("/students", studentRoutes);

export const userRoutes = router;
