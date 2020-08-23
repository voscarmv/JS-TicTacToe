const player = (name, symbol) => {
  let score = 0;
  const getName = () => name;
  const getSymbol = () => symbol;
  const getScore = () => score;
  const win = () => {
    score += 1;
    return score;
  };
  return {
    getName, getSymbol, getScore, win,
  };
};

export default player;