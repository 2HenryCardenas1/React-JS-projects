import {WINNING_COMBINATIONS} from "../utils/constants";

const checkWinner = (boardToCheck) => {
  for (const combo of WINNING_COMBINATIONS) {
    // recuperamos los valores de la combinacion
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // si hay un valor en la posicion a
      boardToCheck[a] === boardToCheck[b] && // si el valor de la posicion a es igual al de la posicion b
      boardToCheck[a] === boardToCheck[c] // si el valor de la posicion a es igual al de la posicion c
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export {checkWinner};
