import { Router } from "express";

const router = Router();

router.get("/");
router.get("/adminId");
router.get("/me");
router.patch("/me");
router.delete("/me");

export const adminRoutes = router;
