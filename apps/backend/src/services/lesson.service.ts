// lesson.service.ts

import { lessons } from "../utils/lesson.data";
import { Lesson } from "../types/lesson.types";

export class LessonService {
  static getAll(): Lesson[] {
    return lessons;
  }

  static getById(id: string): Lesson | undefined {
    return lessons.find((l) => l.id === id);
  }

  static getRecommended(completedLessonIds: string[]): Lesson | null {
    return (
      lessons.find((l) => !completedLessonIds.includes(l.id)) || null
    );
  }
}
