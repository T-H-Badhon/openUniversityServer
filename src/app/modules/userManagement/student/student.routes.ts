import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:studentId");
router.get("/me");
router.patch("/me");
router.delete("/me");

export const studentRoutes = router;
