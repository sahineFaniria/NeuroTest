import { QuizLevel, QuizResult } from "@/types/quiz";

export function computeResult(score: number, total: number): QuizResult {
  const pct = (score / total) * 100;

  let level: QuizLevel;
  let message: string;

  if (pct >= 90) {
    level = "Expert";
    message = "Impressionnant ! Vous maîtrisez parfaitement ces sujets. Votre culture générale est remarquable.";
  } else if (pct >= 70) {
    level = "Avancé";
    message = "Très bon résultat ! Vous avez de solides connaissances dans plusieurs domaines.";
  } else if (pct >= 50) {
    level = "Intermédiaire";
    message = "Bien joué ! Vous avez un bon socle de connaissances, continuez à apprendre.";
  } else {
    level = "Débutant";
    message = "C'est un début ! Chaque quiz est une occasion d'apprendre de nouvelles choses.";
  }

  return { score, total, level, message };
}
