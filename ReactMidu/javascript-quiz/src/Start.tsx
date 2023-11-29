import { Button } from "@mui/material";
import { userQuestionsStore } from "./store/questions";
const LIMIT_QUESTIONS = 5;

export const Start = () => {
  const fetchQuestions = userQuestionsStore((state) => state.fetchQuestions);

  console.log(fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      ¡Empezar!
    </Button>
  );
};
