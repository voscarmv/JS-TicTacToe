const UserInterfaceControl = (() => {
  const printSignUp = () =>{
    let signUp = document.getElementById('signup_template');
    let clon = signUp.content.cloneNode(true);
    document.getElementById('divGameControls').appendChild(clon);
  };
  const printBoard = (board) =>{
    let gameBoard = document.getElementById('game_board');
    for(let i = 0; i < 9; i += 1){
      gameBoard.querySelectorAll(`#cell_${i}`).innerHTML = board[i];
    }
    let clon = gameBoard.content.cloneNode(true);
    document.getElementById('divGameBoard').appendChild(clon);
  };
  return { printSignUp, printBoard }
})();

const Gameboard = (() => {
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

  const print = () => {
    // const divGameBoard = `    
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td class='border border-dark'><div id='cell_0' class='cell d-flex justify-content-center align-items-center'>${board[0]}</div></td>
    //         <td class='border border-dark'><div id='cell_1' class='cell d-flex justify-content-center align-items-center'>${board[1]}</div></td>
    //         <td class='border border-dark'><div id='cell_2' class='cell d-flex justify-content-center align-items-center'>${board[2]}</div></td>
    //       </tr>
    //       <tr>
    //         <td class='border border-dark'><div id='cell_3' class='cell d-flex justify-content-center align-items-center'>${board[3]}</div></td>
    //         <td class='border border-dark'><div id='cell_4' class='cell d-flex justify-content-center align-items-center'>${board[4]}</div></td>
    //         <td class='border border-dark'><div id='cell_5' class='cell d-flex justify-content-center align-items-center'>${board[5]}</div></td>
    //       </tr>
    //       <tr>
    //         <td class='border border-dark'><div id='cell_6' class='cell d-flex justify-content-center align-items-center'>${board[6]}</div></td>
    //         <td class='border border-dark'><div id='cell_7' class='cell d-flex justify-content-center align-items-center'>${board[7]}</div></td>
    //         <td class='border border-dark'><div id='cell_8' class='cell d-flex justify-content-center align-items-center'>${board[8]}</div></td>
    //       </tr>          
    //     </tbody>
    //   </table>
    // `;

    UserInterfaceControl.printBoard(board);

    document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!";
    // document.getElementById('divGameBoard').innerHTML = divGameBoard;
  };
  const reset = () => {
    for (let i = 0; i < 9; i += 1) {
      board[i] = ' ';
    }
  };
  return {
    move, print, empty, winner, reset, draw,
  };
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
  return {
    getName, getSymbol, getScore, win,
  };
};

const GameControl = (() => {
  const board = Gameboard;
  const uicontrol = UserInterfaceControl;
  let p1 = null;
  let p2 = null;
  let currentPlayer = p1;
  let firstPlayer = p1;
  let enabled = true;
  const createPlayers = (p1Name, p2Name) => {
    p1 = Player(p1Name, '☠️');
    p2 = Player(p2Name, '🌘');
  };

  const altScoreBoard = () => {
    const scoreBoard = `
      <div class='mb-2 font-weight-bold'>${p1.getName()} V.S. ${p2.getName()}</div>
      <div class='mb-2'>${p1.getName()}: ${p1.getScore()} victories.</div>
      <div class='mb-3'>${p2.getName()}: ${p2.getScore()} victories.</div>
      <button id='btnResetBoard' class='btn btn-primary'>Reset the board</button>
    `;
    document.getElementById('divHeaderControls').innerHTML = 'Game Score';
    document.getElementById('divGameControls').innerHTML = scoreBoard;
    document.getElementById('btnResetBoard').addEventListener('click', () => {
      board.reset();
      for (let i = 0; i < 9; i += 1) {
        document.getElementById(`cell_${i}`).innerHTML = ' ';
      }
      enabled = true;
      document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!!";
      document.getElementById('divHeaderGameBoard').className = 'card-header';
    });
  };

  const clickEvent = (index) => {
    if (board.empty(index) && enabled) {
      board.move(currentPlayer.getSymbol(), index);
      document.getElementById(`cell_${index}`).innerHTML = currentPlayer.getSymbol();
      const wins = board.winner(currentPlayer.getSymbol());
      if (wins) {
        currentPlayer.win();
        altScoreBoard();
        document.getElementById('divHeaderGameBoard').innerHTML = `${currentPlayer.getName()} wins!`;
        document.getElementById('divHeaderGameBoard').className = 'font-weight-bold text-white card-header bg-success';
        enabled = false;
        if(firstPlayer === p1){ firstPlayer = p2; } else { firstPlayer = p1; }
        currentPlayer = firstPlayer;
      } else if (board.draw()) {
        document.getElementById('divHeaderGameBoard').innerHTML = "It's a draw!";
        document.getElementById('divHeaderGameBoard').className = 'font-weight-bold card-header bg-warning';
        firstPlayer === p1 ? firstPlayer = p2 : firstPlayer = p1;
        currentPlayer = firstPlayer;
      }
      currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;
    }
  };

  const addEvents = () => {
    for (let i = 0; i < 9; i += 1) {
      document.getElementById(`cell_${i}`).addEventListener('click', () => {
        clickEvent(i);
      });
    }
  };

  const initForm = () => {
    // let signUp = '';
    // signUp = `
    //   <div class="form-group">
    //   <label for="player1">Player 1</label>
    //   <input type="text" class="form-control" id="player1" placeholder="Player 1" />
    //     <div id="invalid-p1" class="alert alert-danger d-none" role="alert">
    //       Player 1 name not valid.
    //     </div>
    //   </div>
    //   <div class="form-group">
    //   <label for="player2">Player 2</label>
    //   <input type="text" class="form-control" id="player2" placeholder="Player 2" />
    //     <div id="invalid-p2" class="alert alert-danger d-none" role="alert">
    //       Player 2 name not valid.
    //     </div>
    //   </div>
    //   <button id="start_game" type="submit" class="btn btn-primary">Start!</button>
    // `;
    uicontrol.printSignUp();
    document.getElementById('divHeaderControls').innerHTML = "Players' names";
    // document.getElementById('divGameControls').innerHTML = signUp;
    document.getElementById('start_game').addEventListener('click', () => {
      const p1Name = document.getElementById('player1').value;
      const p2Name = document.getElementById('player2').value;

      document.getElementById('invalid-p1').className = 'alert alert-danger d-none';
      document.getElementById('invalid-p2').className = 'alert alert-danger d-none';
      if (p1Name.length > 0 && p2Name.length > 0) {
        createPlayers(p1Name, p2Name);
        currentPlayer = p1;
        document.getElementById('divBoardCard').className = 'card mr-3';
        addEvents();
        altScoreBoard();
      } else {
        if (p1Name.length === 0) {
          document.getElementById('invalid-p1').className = 'alert alert-danger';
        }
        if (p2Name.length === 0) {
          document.getElementById('invalid-p2').className = 'alert alert-danger';
        }
      }
    });
  };

  return { initForm };
})();




Gameboard.print();
GameControl.initForm();