const saveGameToStorage = ({board, turn}) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

const removeGameFromStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};

export {removeGameFromStorage, saveGameToStorage};
