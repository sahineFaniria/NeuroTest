import { Brain } from "lucide-react";

const LoadingQuiz = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 animate-fade-in">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-secondary border-t-accent animate-spin" />
        <Brain className="absolute inset-0 m-auto h-7 w-7 text-accent" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-heading text-lg font-semibold">L'IA génère votre quiz…</h3>
        <p className="text-sm text-muted-foreground">Préparation de 10 questions personnalisées</p>
      </div>
    </div>
  );
};

export default LoadingQuiz;
