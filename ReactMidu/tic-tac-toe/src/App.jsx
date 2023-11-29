import confetti from "canvas-confetti";
import { useState } from "react";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import "./index.css";
import { checkWinner } from "./logic/board";
import { removeGameFromStorage, saveGameToStorage } from "./storage";
import { TURNS } from "./utils/constants";

function App() {
  const [board, setBoard] = useState(() => {
    const board = window.localStorage.getItem("board");
    return board ? JSON.parse(board) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.player1;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.player1 ? TURNS.player2 : TURNS.player1;
    setTurn(newTurn);

    saveGameToStorage({board: newBoard, turn: newTurn});
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.player1);
    setWinner(null);
    removeGameFromStorage();
  };

  return (
    <main className="board">
      <h1>hello</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.player1}>{TURNS.player1}</Square>
        <Square isSelected={turn === TURNS.player2}>{TURNS.player2}</Square>
      </section>
      <section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
    </main>
  );
}

export default App;
