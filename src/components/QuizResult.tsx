import { QuizResult as QuizResultType } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trophy, Star, Target, Zap } from "lucide-react";

interface QuizResultProps {
  result: QuizResultType;
  onRestart: () => void;
}

const levelIcons = {
  "Débutant": Target,
  "Intermédiaire": Star,
  "Avancé": Zap,
  "Expert": Trophy,
};

const QuizResultComponent = ({ result, onRestart }: QuizResultProps) => {
  const Icon = levelIcons[result.level];
  const percentage = (result.score / result.total) * 100;

  return (
    <div className="animate-scale-in mx-auto max-w-lg space-y-8 text-center">
      <div className="space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <Icon className="h-10 w-10 text-accent" />
        </div>
        <h2 className="font-heading text-3xl font-bold">Quiz Terminé !</h2>
      </div>

      <div className="rounded-2xl bg-card p-8 shadow-lg border border-border space-y-6">
        <div className="space-y-2">
          <div className="font-heading text-5xl font-bold text-accent">
            {result.score}/{result.total}
          </div>
          <p className="text-muted-foreground">réponses correctes</p>
        </div>

        <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="space-y-2">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            {result.level}
          </span>
          <p className="text-muted-foreground leading-relaxed">{result.message}</p>
        </div>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8"
      >
        <RotateCcw className="h-4 w-4" />
        Recommencer
      </Button>
    </div>
  );
};

export default QuizResultComponent;
