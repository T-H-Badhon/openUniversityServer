import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:fAdminId");
router.get("/me");
router.patch("/me");
router.delete("/me");

export const facultyAdminRoutes = router;
