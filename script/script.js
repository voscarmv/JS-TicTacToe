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
    let divGameBoard = `    
      <table>
        <tbody>
          <tr>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[0][0]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[0][1]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[0][2]}</span></td>
          </tr>
          <tr>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[1][0]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[1][1]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[1][2]}</span></td>
          </tr>
          <tr>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[2][0]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[2][1]}</span></td>
            <td class='border border-dark'><span class='cell d-flex justify-content-center align-items-center'>${board[2][2]}</span></td>
          </tr>          
        </tbody>
      </table>
    `;

    document.getElementById('divGameBoard').innerHTML = divGameBoard;
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

Gameboard.print();