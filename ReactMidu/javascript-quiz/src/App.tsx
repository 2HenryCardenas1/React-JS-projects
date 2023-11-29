import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { Game } from "./Game";
import { JavaScriptLogo } from "./JavaScriptLogo";
import { Start } from "./Start";
import { userQuestionsStore } from "./store/questions";

function App() {
  const questions = userQuestionsStore((state) => state.questions);
  console.log(questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quiz
          </Typography>
        </Stack>

        {questions.length === 0 ? <Start /> : <Game />}
      </Container>
    </main>
  );
}

export default App;
