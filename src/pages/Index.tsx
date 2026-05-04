import { useState, useCallback } from "react";
import { Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import QuizResultComponent from "@/components/QuizResult";
import LoadingQuiz from "@/components/LoadingQuiz";
import { QuizState } from "@/types/quiz";
import { computeResult } from "@/lib/quiz-utils";
import { getQuizQuestions } from "@/lib/questions";

const INITIAL_STATE: QuizState = {
  questions: [],
  currentIndex: 0,
  answers: [],
  isFinished: false,
  isLoading: false,
};

const Index = () => {
  const [state, setState] = useState<QuizState>(INITIAL_STATE);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  const startQuiz = useCallback(() => {
    setState((s) => ({ ...s, isLoading: true }));
    setStarted(true);

    setTimeout(() => {
      const questions = getQuizQuestions();
      setState({
        questions,
        currentIndex: 0,
        answers: new Array(questions.length).fill(null),
        isFinished: false,
        isLoading: false,
      });
    }, 800);
  }, []);

  const advanceQuestion = useCallback((answer: number | null) => {
    setState((s) => {
      const newAnswers = [...s.answers];
      newAnswers[s.currentIndex] = answer;

      const isLast = s.currentIndex === s.questions.length - 1;
      return {
        ...s,
        answers: newAnswers,
        currentIndex: isLast ? s.currentIndex : s.currentIndex + 1,
        isFinished: isLast,
      };
    });
    setSelectedAnswer(null);
  }, []);

  const handleNext = () => {
    if (selectedAnswer === null) return;
    advanceQuestion(selectedAnswer);
  };

  const handleTimeUp = useCallback(() => {
    advanceQuestion(selectedAnswer);
  }, [advanceQuestion, selectedAnswer]);

  const handleRestart = () => {
    setState(INITIAL_STATE);
    setStarted(false);
    setSelectedAnswer(null);
  };

  // ── Écran d'accueil ──────────────────────────────────────────────────────
  if (!started) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="animate-fade-in max-w-md space-y-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
            <Brain className="h-10 w-10 text-primary-foreground" />
          </div>
          <div className="space-y-3">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              NeuroTest
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              10 questions pour tester vos connaissances en culture générale, science, logique et plus encore.
              <br />
              <span className="text-sm font-medium text-accent">⏱ 15 secondes par question</span>
            </p>
          </div>
          <Button
            onClick={startQuiz}
            size="lg"
            className="gap-2 rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Sparkles className="h-4 w-4" />
            Commencer le quiz
          </Button>
        </div>
      </div>
    );
  }

  // ── Chargement ───────────────────────────────────────────────────────────
  if (state.isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <LoadingQuiz />
      </div>
    );
  }

  // ── Résultats ────────────────────────────────────────────────────────────
  if (state.isFinished) {
    const score = state.answers.reduce<number>(
      (acc, ans, i) => acc + (ans === state.questions[i].correctAnswer ? 1 : 0),
      0
    );
    const result = computeResult(score, state.questions.length);

    return (
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <QuizResultComponent result={result} onRestart={handleRestart} />
      </div>
    );
  }

  // ── Quiz ─────────────────────────────────────────────────────────────────
  const currentQuestion = state.questions[state.currentIndex];

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8 sm:py-12">
      <div className="mb-6 flex items-center gap-2">
        <Brain className="h-5 w-5 text-accent" />
        <span className="font-heading text-lg font-semibold">NeuroTest</span>
      </div>

      <ProgressBar current={state.currentIndex} total={state.questions.length} />

      <div className="mt-8 flex-1">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={state.currentIndex + 1}
          totalQuestions={state.questions.length}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          onTimeUp={handleTimeUp}
          timeLimit={15}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          size="lg"
          className="rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90 disabled:opacity-40"
        >
          {state.currentIndex === state.questions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
};

export default Index;