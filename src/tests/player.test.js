import Player from '../player';

const p1 = Player('Oscar', 'X');
const p2 = Player('Sergio', 'O');

test('Get player\'s name', () => {
  expect(p1.getName()).toBe('Oscar');
  expect(p2.getName()).toBe('Sergio');
});

test('Get player\'s symbol', () => {
  expect(p1.getSymbol()).toBe('X');
  expect(p2.getSymbol()).toBe('O');
});

test('Get player\'s score', () => {
  p1.win();
  expect(p1.getScore()).toBe(1);
  expect(p2.getScore()).toBe(0);
});

test('Get player\'s score after win', () => {
  expect(p2.win()).toBe(1);
});

test('Get player\'s score after win', () => {
  expect(p2.win()).not.toBe(1);
});