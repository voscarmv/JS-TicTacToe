const Gameboard = (() => {
  const board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ];
  // const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], ... ];
  const move = (symbol, row, col) => {
    board[row][col] = symbol;
  };
  const print = () => {
    let divGameBoard = `    
      <table>
        <tbody>
          <tr>
            <td class='border border-dark'><div id='cell_0' class='cell d-flex justify-content-center align-items-center'>${board[0]}</div></td>
            <td class='border border-dark'><div id='cell_1' class='cell d-flex justify-content-center align-items-center'>${board[1]}</div></td>
            <td class='border border-dark'><div id='cell_2' class='cell d-flex justify-content-center align-items-center'>${board[2]}</div></td>
          </tr>
          <tr>
            <td class='border border-dark'><div id='cell_3' class='cell d-flex justify-content-center align-items-center'>${board[3]}</div></td>
            <td class='border border-dark'><div id='cell_4' class='cell d-flex justify-content-center align-items-center'>${board[4]}</div></td>
            <td class='border border-dark'><div id='cell_5' class='cell d-flex justify-content-center align-items-center'>${board[5]}</div></td>
          </tr>
          <tr>
            <td class='border border-dark'><div id='cell_6' class='cell d-flex justify-content-center align-items-center'>${board[6]}</div></td>
            <td class='border border-dark'><div id='cell_7' class='cell d-flex justify-content-center align-items-center'>${board[7]}</div></td>
            <td class='border border-dark'><div id='cell_8' class='cell d-flex justify-content-center align-items-center'>${board[8]}</div></td>
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

const GameControl = ((board) => {
  let p1 = null;
  let p2 = null;
  let players_turn = p1;
  let createPlayers = (p1_name, p2_name) => {
    p1 = Player(p1_name, 'X');
    p2 = Player(p2_name, 'O');
  };
  const initForm = () => {
    let signUp = '';
    signUp = `
      <div class="form-group">
      <label for="player1">Player 1</label>
      <input type="text" class="form-control" id="player1" placeholder="Player 1" />
        <div id="invalid-p1" class="alert alert-danger d-none" role="alert">
          Player 1 name not valid.
        </div>
      </div>
      <div class="form-group">
      <label for="player2">Player 2</label>
      <input type="text" class="form-control" id="player2" placeholder="Player 2" />
        <div id="invalid-p2" class="alert alert-danger d-none" role="alert">
          Player 2 name not valid.
        </div>
      </div>
      <button id="start_game" type="submit" class="btn btn-primary">Start!</button>
    `;
    document.getElementById('divGameControls').innerHTML = signUp;
    document.getElementById('start_game').addEventListener('click', () => {
      p1_name = document.getElementById('player1').value;
      p2_name = document.getElementById('player2').value;
      createPlayers(p1_name, p2_name);
      players_turn = p1;
      addEvents();
      altScoreBoard();
    });
  };

  const altScoreBoard = () => {
    // if (document.getElementById('divBoardCard').className.includes('d-none')) {
    document.getElementById('divBoardCard').className = 'card';
    //   document.getElementById('divGameControls').className = 'card d-none';
    // }
    // else {
    //   document.getElementById('divBoardCard').className = 'card d-none';
    //   document.getElementById('divGameControls').className = 'card';
    // }
    document.getElementById('divGameControls').innerHTML = `${p1.getName()} V.S. ${p2.getName()}`;
  }

  const addEvents = () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(`cell_${i}`).addEventListener('click', () => {
        document.getElementById(`cell_${i}`).innerHTML = players_turn.getSymbol();
        players_turn === p1 ? players_turn = p2 : players_turn = p1;
      });
    }
  };

  const gameLoop = () => {

  };
  return { initForm }
})();

const player1 = Player("Oscar", "O");
const player2 = Player("Sergio", "S");

Gameboard.print();
GameControl.initForm();