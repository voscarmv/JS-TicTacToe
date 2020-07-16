const UserInterfaceControl = (() => {
  const printSignUp = () => {
    let signUp = document.getElementById('signup_template');
    let clon = signUp.content.cloneNode(true);
    document.getElementById('divGameControls').appendChild(clon);
  };
  const printBoard = () => {
    let gameBoard = document.getElementById('game_board');
    let clon = gameBoard.content.cloneNode(true);
    document.getElementById('divGameBoard').appendChild(clon);
    document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!";
  };
  const printScoreBoard = (player1, player2) => {
    let score = document.getElementById('score_board');
    score.content.querySelector('#players_match').innerHTML = `${player1.getName()} V.S. ${player2.getName()}`;
    score.content.querySelector('#player1_score').innerHTML = `${player1.getName()}: ${player1.getScore()} victories.`;
    score.content.querySelector('#player2_score').innerHTML = `${player2.getName()}: ${player2.getScore()} victories.`;
    let clon = score.content.cloneNode(true);
    document.getElementById('divGameControls').innerHTML = '';
    document.getElementById('divGameControls').appendChild(clon);
    document.getElementById('btnResetBoard').addEventListener('click', () => {
      Gameboard.reset();
      for (let i = 0; i < 9; i += 1) {
        document.getElementById(`cell_${i}`).innerHTML = ' ';
      }
      document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!!";
      document.getElementById('divHeaderGameBoard').className = 'card-header';
    });
    document.getElementById('divHeaderControls').innerHTML = 'Game Score';
  }

  return { printSignUp, printBoard, printScoreBoard }
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

  // const print = () => {
  //   UserInterfaceControl.printBoard(board);
  // };
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
    UserInterfaceControl.printScoreBoard(p1, p2);
    enabled = true;
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
        if (firstPlayer === p1) { firstPlayer = p2; } else { firstPlayer = p1; }
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
    uicontrol.printSignUp();
    document.getElementById('divHeaderControls').innerHTML = "Players' names";
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

UserInterfaceControl.printBoard();
GameControl.initForm();