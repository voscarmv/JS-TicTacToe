const UserInterfaceControl = (() => {
  const printSignUp = (prepareBoard, makePlayers) => {
    const signUp = document.getElementById('signup_template');
    const clon = signUp.content.cloneNode(true);
    document.getElementById('divGameControls').appendChild(clon);

    document.getElementById('divHeaderControls').innerHTML = "Players' names";
    document.getElementById('start_game').addEventListener('click', () => {
      const p1Name = document.getElementById('player1').value;
      const p2Name = document.getElementById('player2').value;

      document.getElementById('invalid-p1').className = 'alert alert-danger d-none';
      document.getElementById('invalid-p2').className = 'alert alert-danger d-none';
      if (p1Name.length > 0 && p2Name.length > 0) {
        makePlayers(p1Name, p2Name);
        prepareBoard();
        document.getElementById('divBoardCard').className = 'card mr-3';
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
  const printBoard = () => {
    const gameBoard = document.getElementById('game_board');
    const clon = gameBoard.content.cloneNode(true);
    document.getElementById('divGameBoard').appendChild(clon);
    document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!";
  };
  const printScoreBoard = (player1, player2, enable, boarReset) => {
    const score = document.getElementById('score_board');
    score.content.querySelector('#players_match').innerHTML = `${player1.getName()} V.S. ${player2.getName()}`;
    score.content.querySelector('#player1_score').innerHTML = `${player1.getName()}: ${player1.getScore()} victories.`;
    score.content.querySelector('#player2_score').innerHTML = `${player2.getName()}: ${player2.getScore()} victories.`;
    const clon = score.content.cloneNode(true);
    document.getElementById('divGameControls').innerHTML = '';
    document.getElementById('divGameControls').appendChild(clon);
    document.getElementById('btnResetBoard').addEventListener('click', () => {
      boarReset();
      for (let i = 0; i < 9; i += 1) {
        document.getElementById(`cell_${i}`).innerHTML = ' ';
      }
      document.getElementById('divHeaderGameBoard').innerHTML = "Let's play!!";
      document.getElementById('divHeaderGameBoard').className = 'card-header';
      enable();
    });
    document.getElementById('divHeaderControls').innerHTML = 'Game Score';
  };

  const printWinMsg = (player) => {
    document.getElementById('divHeaderGameBoard').innerHTML = `${player.getName()} wins!`;
    document.getElementById('divHeaderGameBoard').className = 'font-weight-bold text-white card-header bg-success';
  };

  const gameDraw = () => {
    document.getElementById('divHeaderGameBoard').innerHTML = "It's a draw!";
    document.getElementById('divHeaderGameBoard').className = 'font-weight-bold card-header bg-warning';
  };

  const setSymbolOnBoard = (index, player) => {
    document.getElementById(`cell_${index}`).innerHTML = player.getSymbol();
  };

  const addBoardEvents = (clickMethod) => {
    for (let i = 0; i < 9; i += 1) {
      document.getElementById(`cell_${i}`).addEventListener('click', () => {
        clickMethod(i);
      });
    }
  };

  return {
    printSignUp,
    printBoard,
    printScoreBoard,
    printWinMsg,
    gameDraw,
    setSymbolOnBoard,
    addBoardEvents,
  };
})();

export default UserInterfaceControl;