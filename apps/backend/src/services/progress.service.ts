// progress.service.ts

const userProgress = new Map<string, Set<string>>();

export class ProgressService {
  static startLesson(userId: string, lessonId: string) {
    if (!userProgress.has(userId)) {
      userProgress.set(userId, new Set());
    }
  }

  static completeLesson(userId: string, lessonId: string) {
    if (!userProgress.has(userId)) {
      userProgress.set(userId, new Set());
    }
    userProgress.get(userId)!.add(lessonId);
  }

  static getCompletedLessons(userId: string): string[] {
    return Array.from(userProgress.get(userId) || []);
  }
}
