// lesson.types.ts

export type VocabularyItem = {
  id: string;
  jp: string;        // 日本語
  romaji: string;    // nihongo
  meaning: string;
  example: string;
  audioUrl?: string;
  imageUrl?: string;
};

export type KanjiItem = {
  id: string;
  character: string;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  strokeOrderUrl?: string;
  examples: string[];
};

export type GrammarPoint = {
  id: string;
  title: string;
  explanation: string;
  pattern: string;
  examples: string[];
  audioUrls?: string[];
};

export type Lesson = {
  id: string;
  unit: number;
  title: string;
  order: number;
  vocabulary: VocabularyItem[];
  kanji: KanjiItem[];
  grammar: GrammarPoint;
};
