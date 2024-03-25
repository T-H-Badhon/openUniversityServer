import { Router } from "express";

const router = Router();

//create user.........................

router.post("/create-user");

//admin control......................

//students
router.get("/students");
router.get("/students/:studentId");

//lecturers
router.get("/lecturers");
router.get("/lecturers/:lecturerId");

//department admins
router.get("/department-admins");
router.get("/department-admins/:dAdminId");

//faculty admins
router.get("/faculty-admins");
router.get("/faculty-admins/:fAdminId");

//controllers
router.get("/controllers");
router.get("/controllers/:controllerId");

//admin
router.get("/admins");
router.get("/admins/adminId");

//common
router.delete("/delete-user");
router.patch("/block-user");

//own account control.................

router.patch("/me");
router.delete("/me");

export const userRoutes = router;
