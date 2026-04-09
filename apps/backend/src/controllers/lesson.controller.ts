// lesson.controller.ts

import { Request, Response } from "express";
import { LessonService } from "../services/lesson.service";
import { ProgressService } from "../services/progress.service";
import { AuthRequest } from "../types/types";


export const listLessons = (_: Request, res: Response) => {
  res.json(LessonService.getAll());
};

export const getLesson = (req: Request, res: Response) => {
  const lessonId = req.params.id as string;

  const lesson = LessonService.getById(lessonId);
  if (!lesson) return res.status(404).json({ message: "Lesson not found" });

  res.json(lesson);
};

export const startLesson = (req: AuthRequest, res: Response) => {
  const lessonId = req.params.id as string;

  ProgressService.startLesson(req.user!.id, lessonId);
  res.json({ message: "Lesson started" });
};

export const completeLesson = (req: AuthRequest, res: Response) => {
  const lessonId = req.params.id as string;

  ProgressService.completeLesson(req.user!.id, lessonId);
  res.json({ message: "Lesson completed" });
};

export const recommendedLesson = (req: AuthRequest, res: Response) => {
  const completed = ProgressService.getCompletedLessons(req.user!.id);
  const lesson = LessonService.getRecommended(completed);
  res.json(lesson);
};
