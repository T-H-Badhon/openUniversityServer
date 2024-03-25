import { Router } from "express";

const router = Router();

router.get("/semesters/:semester");
router.get("/semesters/:semester/:studentId");
router.patch("/update-result/:studentId");

//student...........
router.get("/me");
router.get("/me/certificate");

export const resultRoutes = router;
