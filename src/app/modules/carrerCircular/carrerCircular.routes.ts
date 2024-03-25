import { Router } from "express";

const router = Router();

router.post("/create-circular");
router.get("/");
router.get("/:circularId");
router.patch("/:circularId");
router.delete("/:circularId");

export const circularRoutes = router;
