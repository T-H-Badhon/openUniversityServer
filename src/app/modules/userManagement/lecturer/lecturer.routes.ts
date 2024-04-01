import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:lecturerId");
router.get("/me");
router.patch("/me");
router.delete("/me");

export const lecturerRoutes = router;
