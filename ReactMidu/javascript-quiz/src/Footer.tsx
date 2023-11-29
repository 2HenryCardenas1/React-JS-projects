import { Button } from "@mui/material";
import { useQuestionsData } from "./hooks/useQuestionsData";
import { userQuestionsStore } from "./store/questions";
export const Footer = () => {
  const { correctAnswers, incorrectAnswers, unanswered } = useQuestionsData();

  const reste = userQuestionsStore((state) => state.reset);

  const handleReset = () => {
    reste();
  };

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correctAnswers}  correctas - ❌ ${incorrectAnswers} incorrectas - ❓${unanswered} sin responder`}</strong>
      <Button onClick={handleReset}>Reseteart juego</Button>
      <p>© 2021 - Todos los derechos reservados</p>
    </footer>
  );
};
