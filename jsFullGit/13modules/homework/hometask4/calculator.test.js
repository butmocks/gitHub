import { calc } from './calculator';

it('should return null if it is not string', () => {
  const result = calc(1 + 2);

  expect(result).toEqual(null);
});

it('should add numbers', () => {
  const result = calc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
});

it('should subtract numbers', () => {
  const result = calc('1 - 2');

  expect(result).toEqual('1 - 2 = -1');
});

it('should multiplicate numbers', () => {
  const result = calc('1 * 2');

  expect(result).toEqual('1 * 2 = 2');
});

it('should divise numbers', () => {
  const result = calc('1 / 2');

  expect(result).toEqual('1 / 2 = 0.5');
});
