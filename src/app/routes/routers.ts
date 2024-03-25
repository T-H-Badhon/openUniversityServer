import { Router } from "express";
import { userRoutes } from "../modules/userManagement/users.router";
import { academicRoutes } from "../modules/academicManagement/academicM.router";
import { admissionRoutes } from "../modules/admissionCirculer/admission.routers";
import { applicationRoutes } from "../modules/applicationManagement/application.routes";
import { circularRoutes } from "../modules/carrerCircular/carrerCircular.routes";
import { noticeRoutes } from "../modules/notices/notice.routes";
import { resultRoutes } from "../modules/result_certifications/result.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/academic-management", academicRoutes);
router.use("/applications", applicationRoutes);
router.use("/admissions", admissionRoutes);
router.use("/circulars", circularRoutes);
router.use("/notices", noticeRoutes);
router.use("/results", resultRoutes);

export default router;
