import confetty from "canvas-confetti";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllQuestions } from "../services/questions";
import { Question } from "./types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goToNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const userQuestionsStore = create<State>()(
  // persist is a middleware that will save the state in localStorage
  // so when the user refreshes the page, the state will be restored
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async (limit: number) => {
          const questions = await getAllQuestions(limit);
          set({ questions });
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          const { questions } = get();
          //Structure clone

          const newQuestions = structuredClone(questions);
          // questionIndex , encontrar el indice de la pregunta
          const questionIndex = newQuestions.findIndex(
            (q) => q.id === questionId
          );
          // questionInfo , obtenemos la info de la pregunta
          const questionInfo = newQuestions[questionIndex];
          // isCorrect , si la respuesta es correcta
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex;

          if (isCorrectUserAnswer) confetty();
          // cambiar esta informacion en la copia de la pregunta
          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
          };
          // actualizar el estado
          set({ questions: newQuestions });
        },

        goToNextQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion });
          }
        },
        goPreviousQuestion: () => {
          const { currentQuestion } = get();
          const previousQuestion = currentQuestion - 1;
          if (previousQuestion >= 0) {
            set({ currentQuestion: previousQuestion });
          }
        },
        reset: () => {
          set({ questions: [], currentQuestion: 0 });
        },
      };
    },
    {
      name: "questions",
    }
  )
);
