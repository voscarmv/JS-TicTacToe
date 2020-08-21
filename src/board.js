const gameBoard = (() => {
  const board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' ',
  ];
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const move = (symbol, cell) => {
    board[cell] = symbol;
    return board;
  };
  const empty = (cell) => {
    if (board[cell] === ' ') {
      return true;
    }
    return false;
  };
  const winner = (symbol) => {
    for (let i = 0; i < winningCombinations.length; i += 1) {
      const c = winningCombinations[i];
      if (board[c[0]] === symbol && board[c[1]] === symbol && board[c[2]] === symbol) {
        return true;
      }
    }
    return false;
  };
  const draw = () => !board.includes(' ');

  const reset = () => {
    for (let i = 0; i < 9; i += 1) {
      board[i] = ' ';
    }
    return board;
  };

  return {
    move, empty, winner, reset, draw
  };
})();

export default gameBoard;