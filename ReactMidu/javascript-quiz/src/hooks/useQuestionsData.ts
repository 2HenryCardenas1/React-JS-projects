import { userQuestionsStore } from "../store/questions";

export const useQuestionsData = () => {
  const questions = userQuestionsStore((state) => state.questions);

  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;

    if (userSelectedAnswer === undefined) {
      unanswered++;
    } else if (userSelectedAnswer === correctAnswer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  });

  return { correctAnswers, incorrectAnswers, unanswered };
};
