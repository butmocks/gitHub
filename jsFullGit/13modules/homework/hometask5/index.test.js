import { reverseArray, withdraw, getAdults } from './index';

// reverseArray

it('should get reversed array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6, 7]);

  expect(result).toEqual([7, 6, 5, 4, 3, 2, 1]);
});

it('should get reversed array', () => {
  const result = reverseArray([1, 3, 2, 4]);

  expect(result).toEqual([4, 2, 3, 1]);
});

it('should return null, if input is not array', () => {
  const result = reverseArray(![]);

  expect(result).toEqual(null);
});

// withdraw

it('should get balance after transaction', () => {
  const result = withdraw(
    ['Bob', 'Jlob', 'Obormot', 'Barmaglot'],
    [666, 13, 69, 42],
    'Obormot',
    12,
  );

  expect(result).toEqual(57);
});

it('should get balance after transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should return -1 if balance < transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

// getAdults

it('should get names who are adult', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get names who are adult', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get names who are adult', () => {
  const result = getAdults({ Ann: 5, Andrey: 7 });

  expect(result).toEqual({});
});
