const Gameboard = (() => {
  const board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ];
  const winning_combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const move = (symbol, cell) => {
    board[cell] = symbol;
  };
  const empty = (cell) => {
    if (board[cell] === ' '){
      return true;
    }
    return false;
  };
  const winner = (symbol) => {
    for(let i = 0; i < winning_combinations.length; i++){
      let c = winning_combinations[i];
      if(board[c[0]] == symbol && board[c[1]] == symbol && board[c[2]] == symbol){
        return true;
      }
    }
    return false;
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
  return { move, print, empty, winner }
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

const GameControl = (() => {
  let board = Gameboard;
  let p1 = null;
  let p2 = null;
  let current_player = p1;
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
      current_player = p1;
      document.getElementById('divBoardCard').className = 'card';
      addEvents();
      altScoreBoard();
    });
  };

  const altScoreBoard = () => {
    let scoreBoard = `
    <div>${p1.getName()} V.S. ${p2.getName()}</div>
    <div>${p1.getName()}: ${p1.getScore()} victories.</div>
    <div>${p2.getName()}: ${p2.getScore()} victories.</div>
    `;
    document.getElementById('divGameControls').innerHTML = scoreBoard;
  };

  const addEvents = () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(`cell_${i}`).addEventListener('click', () => {
        
        if(board.empty(i)){
          board.move(current_player.getSymbol(), i);
          document.getElementById(`cell_${i}`).innerHTML = current_player.getSymbol();
          let wins = board.winner(current_player.getSymbol());
          if (wins){
            current_player.win();
            altScoreBoard();
            console.log(`p1 score ${p1.getScore()}`);
            console.log(`p2 score ${p2.getScore()}`);
            console.log(`current_player score ${current_player.getScore()}`);
            // document.getElementById('divGameControls').innerHTML = `${current_player.getName()} wins!`;
          }
          current_player === p1 ? current_player = p2 : current_player = p1;  
        }
        
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