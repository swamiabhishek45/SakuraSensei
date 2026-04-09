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

router.use(authenticate);

router.get("/", listLessons);
router.get("/:id", getLesson);
router.post("/:id/start", startLesson);
router.post("/:id/complete", completeLesson);
router.get("/recommended", recommendedLesson);

export default router;
