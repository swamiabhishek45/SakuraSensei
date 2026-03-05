// lesson.routes.ts

import { Router } from "express";
import {
  listLessons,
  getLesson,
  startLesson,
  completeLesson,
  recommendedLesson,
} from "../controllers/lesson.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/", authenticate, listLessons);
router.get("/recommended", authenticate, recommendedLesson);
router.get("/:id", authenticate, getLesson);
router.post("/:id/start", authenticate, startLesson);
router.post("/:id/complete", authenticate, completeLesson);

export default router;
