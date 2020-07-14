const Gameboard = (() => {
  const board = () => [['', '', ''], ['', '', ''], ['', '', '']];
  return { board }
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