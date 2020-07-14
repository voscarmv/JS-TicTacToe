const Gameboard = (() => {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  const move = (symbol, row, col) => {
    board[row][col] = symbol;
  };
  const print = () => {
    console.log(board);
  };
  return { move, print }
})();

const Player = (name, symbol) => {
  let score = 0;
  const getName = () => name;
  const getSymbol = () => symbol;
  const getScore = () => score;
  const win = () => {
    score += 1;
    return score;
  };
  return { getName, getSymbol, getScore, win }
};

const player1 = Player("Oscar", "O");
const player2 = Player("Sergio", "S");