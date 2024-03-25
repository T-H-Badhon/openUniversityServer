import { Router } from "express";

const router = Router();

//students...............
router.post("/student-applications");
router.get("/student-applications");
router.get("/student-applications/:applicationId");
router.patch("/student-applications/:applicationId/department-approved");
router.patch("/student-applications/:applicationId/faculty-approved");
router.patch("/student-applications/:applicationId/rejected");
router.delete("/student-applications/delete-rejected");

//lecturers...................
router.post("/lecturer-applications");
router.get("/lecturer-applications");
router.get("/lecturer-applications/:applicationId");
router.patch("lecturer-applications/:applicationId/faculty-approved");
router.patch("lecturer-applications/:applicationId/admin-approved");
router.patch("lecturer-applications/:applicationId/rejected");
router.delete("/lecturer-applications/delete-rejected");

//department admin...............
router.post("/d-admin-applications");
router.get("/d-admin-applications");
router.get("/d-admin-applications/:applicationId");
router.patch("/d-admin-applications/:dAdminId/faculty-approved");
router.patch("/d-admin-applications/:dAdminId/admin-approved");
router.patch("/d-admin-applications/:dAdminId/rejected");
router.delete("/d-admin-applications/delete-rejected");

//faculty admin....................
router.post("/f-admin-applications");
router.get("/f-admin-applications");
router.get("/f-admin-applications/:applicationId");
router.patch("/f-admin-applications/:applicationId/admin-approved");
router.patch("/f-admin-applications/:applicationId/rejected");
router.delete("/f-admin-applications/delete-rejected");

//controllers........................
router.post("/controller-applications");
router.get("/controller-applications");
router.get("/controller-applications/applicationId");
router.patch("/controller-applications/:applicationId/admin-approved");
router.patch("/controller-applications/:applicationId/rejected");
router.delete("/controller-applications/delete-rejected");

//admin...............................
router.post("/admin-applications");
router.get("/admin-applications");
router.get("/admin-applications/:applicationId");
router.patch("/admin-applications/:applicationId/approved");
router.patch("/admin-applications/:applicationId/rejected");
router.delete("/admin-applications/delete-rejected");

export const applicationRoutes = router;
