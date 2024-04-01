import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:controllerId");
router.get("/me");
router.patch("/me");
router.delete("/me");

export const controllerRoutes = router;
