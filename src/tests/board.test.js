import gameBoard from '../board';

beforeEach(() => {
  gameBoard.reset();
});

test('Player X move.', () => {
  expect(gameBoard.move('X', 2)).toEqual([' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']);
});

test('Player X wrong move.', () => {
  expect(gameBoard.move('X', 3)).not.toEqual([' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']);
});

test('Find empty space', () => {
  gameBoard.move('X', 3);
  expect(gameBoard.empty(2)).toBe(true);
});

test('Find non-empty space', () => {
  gameBoard.move('X', 3);
  expect(gameBoard.empty(3)).toBe(false);
});

test('There is a winner', () => {
  gameBoard.move('X', 0);
  gameBoard.move('X', 1);
  gameBoard.move('X', 2);
  expect(gameBoard.winner('X')).toBe(true);
});

test('There is NO winner', () => {
  gameBoard.move('X', 1);
  gameBoard.move('X', 4);
  gameBoard.move('X', 3);
  expect(gameBoard.winner('X')).toBe(false);
});

test('There is a draw', () => {
  gameBoard.move('X', 0);
  gameBoard.move('O', 1);
  gameBoard.move('X', 2);
  gameBoard.move('O', 3);
  gameBoard.move('X', 4);
  gameBoard.move('O', 5);
  gameBoard.move('X', 6);
  gameBoard.move('O', 7);
  gameBoard.move('X', 8);
  expect(gameBoard.draw()).toBe(true);
});

test('There is NO draw', () => {
  gameBoard.move('X', 1);
  gameBoard.move('X', 4);
  gameBoard.move('X', 3);
  expect(gameBoard.draw()).toBe(false);
});
