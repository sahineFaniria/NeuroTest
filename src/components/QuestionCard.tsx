import { useEffect, useState } from "react";
import { QuizQuestion } from "@/types/quiz";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onTimeUp: () => void;
  timeLimit?: number;
}

const QuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onTimeUp,
  timeLimit = 15,
}: QuestionCardProps) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  const isWarning = timeLeft <= 8 && timeLeft > 4;
  const isDanger = timeLeft <= 4;

  const timerColor = isDanger
    ? "text-red-400 border-red-400/40 bg-red-400/10"
    : isWarning
    ? "text-yellow-400 border-yellow-400/40 bg-yellow-400/10"
    : "text-emerald-400 border-emerald-400/40 bg-emerald-400/10";

  const dotColor = isDanger
    ? "bg-red-400"
    : isWarning
    ? "bg-yellow-400"
    : "bg-emerald-400";

  return (
    <div className="space-y-6">

      {/* Rangée : numéro de question + timer côte à côte */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Question{" "}
          <span className="font-semibold text-foreground">
            {questionNumber}
          </span>{" "}
          / {totalQuestions}
        </p>

        {/* Timer style horloge numérique */}
        <div
          className={`
            flex items-center gap-2 rounded-lg border px-3 py-1.5
            font-mono text-sm font-bold tabular-nums transition-colors duration-500
            ${timerColor}
          `}
        >
          {/* Petit point clignotant */}
          <span
            className={`h-1.5 w-1.5 rounded-full ${dotColor} ${
              isDanger ? "animate-ping" : "animate-pulse"
            }`}
          />
          {String(timeLeft).padStart(2, "0")}s
        </div>
      </div>

      {/* Catégorie */}
      <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
        {question.category}
      </div>

      {/* Question */}
      <h2 className="font-heading text-2xl font-semibold leading-snug sm:text-3xl">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`
                flex w-full items-center gap-4 rounded-xl border p-4 text-left
                transition-all duration-150 hover:border-primary/60 hover:bg-primary/5
                ${
                  isSelected
                    ? "border-primary bg-primary/10 font-medium"
                    : "border-border bg-card"
                }
              `}
            >
              <span
                className={`
                  flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                  text-sm font-bold
                  ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
                `}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;