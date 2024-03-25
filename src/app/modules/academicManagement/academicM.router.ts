import { Router } from "express";

const router = Router();

//courses.................................
router.post("/courses");
router.get("/courses");
router.get("/courses/:courseId");
router.patch("/courses/:courseId");
router.delete("/courses/:courseId");

//departments.............................
router.post("/departments");
router.get("/departments");
router.get("/departments/:departmentId");
router.patch("/departments/:departmentId");
router.delete("/departments/:departmentId");

//faculties.................................
router.post("/faculties");
router.get("/faculties");
router.get("/faculties/:facultyId");
router.patch("/faculties/:facultyId");
router.delete("/faculties/:facultyId");

//sessions..................................
router.post("/sessions");
router.get("/sessions");
router.get("/sessions/:sessionId");
router.patch("/sessions/:sessionId");
router.delete("/sessions/:sessionId"); //fully delete

export const academicRoutes = router;
