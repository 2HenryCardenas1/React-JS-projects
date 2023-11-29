import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { userQuestionsStore } from "./store/questions";
import { type Question as QuestionType } from "./store/types";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = userQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info;

    // usuario no ha seleccionado nada todavía
    if (userSelectedAnswer == null) return "transparent";
    // si ya selecciono pero la solución es incorrecta
    if (index !== correctAnswer && index !== userSelectedAnswer)
      return "transparent";
    // si esta es la solución correcta
    if (index === correctAnswer) return "green";
    // si esta es la selección del usuario pero no es correcta
    if (index === userSelectedAnswer) return "red";
    // si no es ninguna de las anteriores

    return "transparent";
  };

  return (
    <Card
      variant="outlined"
      sx={{ textAlign: "left", p: 2, bgcolor: "#222", marginTop: 4 }}
    >
      <Typography variant="h5" component="h2">
        {info.question}
      </Typography>

      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} sx={{ bgcolor: "#333" }} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(index) }}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  //obtenemos las preguntas y la pregunta actual
  const questions = userQuestionsStore((state) => state.questions);
  const currentQuestion = userQuestionsStore((state) => state.currentQuestion);
  const goToNextQuestion = userQuestionsStore(
    (state) => state.goToNextQuestion
  );
  const goToPreviousQuestion = userQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goToNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
};
