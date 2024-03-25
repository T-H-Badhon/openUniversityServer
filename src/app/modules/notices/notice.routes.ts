import { Router } from "express";

const router = Router();

router.post("/create-notice");
router.get("/");
router.get("/:noticeId");
router.patch("/:noticeId");
router.delete("/:noticeId");

export const noticeRoutes = router;
