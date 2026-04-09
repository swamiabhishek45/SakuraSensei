import { Lesson } from "../types/lesson.types";

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    unit: 1,
    title: "Greetings",
    order: 1,
    vocabulary: [
      {
        id: "v1",
        jp: "こんにちは",
        romaji: "konnichiwa",
        meaning: "Hello",
        example: "こんにちは、元気ですか？",
      },
      {
        id: "v2",
        jp: "ありがとう",
        romaji: "arigatou",
        meaning: "Thank you",
        example: "ありがとうございます。",
      },
    ],
    kanji: [
      {
        id: "k1",
        character: "日",
        meanings: ["day", "sun"],
        onyomi: ["ニチ", "ジツ"],
        kunyomi: ["ひ", "か"],
        examples: ["日本", "休日"],
      },
    ],
    grammar: {
      id: "g1",
      title: "Basic Greeting Sentence",
      explanation: "Used to greet someone politely.",
      pattern: "こんにちは + (name)",
      examples: ["こんにちは、さくらさん。"],
    },
  },

  {
    id: "lesson-2",
    unit: 1,
    title: "Introducing Yourself",
    order: 2,
    vocabulary: [
      {
        id: "v3",
        jp: "わたし",
        romaji: "watashi",
        meaning: "I / Me",
        example: "わたしは学生です。",
      },
      {
        id: "v4",
        jp: "なまえ",
        romaji: "namae",
        meaning: "Name",
        example: "なまえは何ですか？",
      },
    ],
    kanji: [
      {
        id: "k2",
        character: "人",
        meanings: ["person"],
        onyomi: ["ジン", "ニン"],
        kunyomi: ["ひと"],
        examples: ["日本人", "三人"],
      },
    ],
    grammar: {
      id: "g2",
      title: "は (Topic Marker)",
      explanation: "は marks the topic of the sentence.",
      pattern: "A は B です",
      examples: ["わたしはアビシェックです。"],
    },
  },

  {
    id: "lesson-3",
    unit: 1,
    title: "Polite Expressions",
    order: 3,
    vocabulary: [
      {
        id: "v5",
        jp: "すみません",
        romaji: "sumimasen",
        meaning: "Excuse me / Sorry",
        example: "すみません、遅れました。",
      },
      {
        id: "v6",
        jp: "はい",
        romaji: "hai",
        meaning: "Yes",
        example: "はい、そうです。",
      },
    ],
    kanji: [
      {
        id: "k3",
        character: "口",
        meanings: ["mouth"],
        onyomi: ["コウ"],
        kunyomi: ["くち"],
        examples: ["入口", "出口"],
      },
    ],
    grammar: {
      id: "g3",
      title: "です (Polite Copula)",
      explanation: "です is used to make polite statements.",
      pattern: "Noun + です",
      examples: ["学生です。"],
    },
  },

  {
    id: "lesson-4",
    unit: 1,
    title: "Numbers 1–5",
    order: 4,
    vocabulary: [
      {
        id: "v7",
        jp: "いち",
        romaji: "ichi",
        meaning: "One",
        example: "りんごをいちください。",
      },
      {
        id: "v8",
        jp: "に",
        romaji: "ni",
        meaning: "Two",
        example: "にほんごをに年勉強しています。",
      },
    ],
    kanji: [
      {
        id: "k4",
        character: "一",
        meanings: ["one"],
        onyomi: ["イチ"],
        kunyomi: ["ひと"],
        examples: ["一人", "一日"],
      },
    ],
    grammar: {
      id: "g4",
      title: "Counting Basics",
      explanation: "Basic number usage in sentences.",
      pattern: "Number + Noun",
      examples: ["一人です。"],
    },
  },

  {
    id: "lesson-5",
    unit: 1,
    title: "Asking Questions",
    order: 5,
    vocabulary: [
      {
        id: "v9",
        jp: "なに",
        romaji: "nani",
        meaning: "What",
        example: "これはなにですか？",
      },
      {
        id: "v10",
        jp: "どこ",
        romaji: "doko",
        meaning: "Where",
        example: "トイレはどこですか？",
      },
    ],
    kanji: [
      {
        id: "k5",
        character: "何",
        meanings: ["what"],
        onyomi: ["カ"],
        kunyomi: ["なに"],
        examples: ["何人", "何時"],
      },
    ],
    grammar: {
      id: "g5",
      title: "Question Marker か",
      explanation: "か turns a statement into a question.",
      pattern: "Sentence + か",
      examples: ["なまえは何ですか？"],
    },
  },

  {
    id: "lesson-6",
    unit: 2,
    title: "Family",
    order: 1,
    vocabulary: [
      {
        id: "v11",
        jp: "ちち",
        romaji: "chichi",
        meaning: "Father",
        example: "ちちは会社員です。",
      },
      {
        id: "v12",
        jp: "はは",
        romaji: "haha",
        meaning: "Mother",
        example: "ははは先生です。",
      },
    ],
    kanji: [
      {
        id: "k6",
        character: "父",
        meanings: ["father"],
        onyomi: ["フ"],
        kunyomi: ["ちち"],
        examples: ["父親"],
      },
    ],
    grammar: {
      id: "g6",
      title: "Possession の",
      explanation: "の shows possession or relationship.",
      pattern: "A の B",
      examples: ["わたしのちちです。"],
    },
  },

  {
    id: "lesson-7",
    unit: 2,
    title: "Daily Activities",
    order: 2,
    vocabulary: [
      {
        id: "v13",
        jp: "たべます",
        romaji: "tabemasu",
        meaning: "Eat",
        example: "ごはんをたべます。",
      },
      {
        id: "v14",
        jp: "のみます",
        romaji: "nomimasu",
        meaning: "Drink",
        example: "みずをのみます。",
      },
    ],
    kanji: [
      {
        id: "k7",
        character: "食",
        meanings: ["eat", "food"],
        onyomi: ["ショク"],
        kunyomi: ["た"],
        examples: ["食事"],
      },
    ],
    grammar: {
      id: "g7",
      title: "Verb ます Form",
      explanation: "Polite verb ending used in daily conversation.",
      pattern: "Verb + ます",
      examples: ["パンをたべます。"],
    },
  },

  {
    id: "lesson-8",
    unit: 2,
    title: "Time",
    order: 3,
    vocabulary: [
      {
        id: "v15",
        jp: "いま",
        romaji: "ima",
        meaning: "Now",
        example: "いま何時ですか？",
      },
      {
        id: "v16",
        jp: "じかん",
        romaji: "jikan",
        meaning: "Time",
        example: "じかんがあります。",
      },
    ],
    kanji: [
      {
        id: "k8",
        character: "時",
        meanings: ["time", "hour"],
        onyomi: ["ジ"],
        kunyomi: ["とき"],
        examples: ["時間", "三時"],
      },
    ],
    grammar: {
      id: "g8",
      title: "Asking Time",
      explanation: "Used to ask and tell time.",
      pattern: "何時ですか",
      examples: ["今は三時です。"],
    },
  },

  {
    id: "lesson-9",
    unit: 2,
    title: "Places",
    order: 4,
    vocabulary: [
      {
        id: "v17",
        jp: "がっこう",
        romaji: "gakkou",
        meaning: "School",
        example: "がっこうへ行きます。",
      },
      {
        id: "v18",
        jp: "えき",
        romaji: "eki",
        meaning: "Station",
        example: "えきはどこですか？",
      },
    ],
    kanji: [
      {
        id: "k9",
        character: "学",
        meanings: ["study"],
        onyomi: ["ガク"],
        kunyomi: ["まな"],
        examples: ["学校"],
      },
    ],
    grammar: {
      id: "g9",
      title: "へ (Direction Particle)",
      explanation: "へ indicates direction or destination.",
      pattern: "Place + へ + 行きます",
      examples: ["学校へ行きます。"],
    },
  },

  {
    id: "lesson-10",
    unit: 2,
    title: "Simple Preferences",
    order: 5,
    vocabulary: [
      {
        id: "v19",
        jp: "すき",
        romaji: "suki",
        meaning: "Like",
        example: "にほんごがすきです。",
      },
      {
        id: "v20",
        jp: "きらい",
        romaji: "kirai",
        meaning: "Dislike",
        example: "コーヒーがきらいです。",
      },
    ],
    kanji: [
      {
        id: "k10",
        character: "好",
        meanings: ["like"],
        onyomi: ["コウ"],
        kunyomi: ["す"],
        examples: ["好き"],
      },
    ],
    grammar: {
      id: "g10",
      title: "が for Likes/Dislikes",
      explanation: "が is used with すき / きらい.",
      pattern: "Noun + が + すきです",
      examples: ["音楽がすきです。"],
    },
  },
];
