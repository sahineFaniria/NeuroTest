export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  isFinished: boolean;
  isLoading: boolean;
}

export type QuizLevel = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

export interface QuizResult {
  score: number;
  total: number;
  level: QuizLevel;
  message: string;
}
