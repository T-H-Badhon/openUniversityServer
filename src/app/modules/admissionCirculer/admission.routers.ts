import { Router } from "express";

const router = Router();

router.post("/open-admission");
router.get("/");
router.get("/:admissionId");

export const admissionRoutes = router;
