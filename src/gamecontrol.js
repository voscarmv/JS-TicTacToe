import UserInterfaceControl from './uicontrol';

const GameControl = (() => {
  const board = Gameboard;
  let p1 = null;
  let p2 = null;
  let currentPlayer = p1;
  let firstPlayer = p1;
  let enabled = true;
  const createPlayers = (p1Name, p2Name) => {
    p1 = Player(p1Name, '☠️');
    p2 = Player(p2Name, '🌘');
  };

  const enableBoard = () => {
    enabled = true;
  };

  const altScoreBoard = () => {
    UserInterfaceControl.printScoreBoard(p1, p2, enableBoard, board.reset);
  };

  const clickEvent = (index) => {
    if (board.empty(index) && enabled) {
      board.move(currentPlayer.getSymbol(), index);
      UserInterfaceControl.setSymbolOnBoard(index, currentPlayer);
      const wins = board.winner(currentPlayer.getSymbol());
      if (wins) {
        currentPlayer.win();
        altScoreBoard();
        UserInterfaceControl.printWinMsg(currentPlayer);
        enabled = false;
        if (firstPlayer === p1) { firstPlayer = p2; } else { firstPlayer = p1; }
        currentPlayer = firstPlayer;
      } else if (board.draw()) {
        UserInterfaceControl.gameDraw();
        if (firstPlayer === p1) { firstPlayer = p2; } else { firstPlayer = p1; }
        currentPlayer = firstPlayer;
      }
      if (currentPlayer === p1) { currentPlayer = p2; } else { currentPlayer = p1; }
    }
  };

  const addEvents = () => {
    UserInterfaceControl.addBoardEvents(clickEvent);
  };

  const prepareBoard = () => {
    currentPlayer = p1;
    addEvents();
    altScoreBoard();
  };

  const initForm = () => {
    UserInterfaceControl.printSignUp(prepareBoard, createPlayers);
  };

  return { initForm };
})();

export default GameControl;