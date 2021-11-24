import getMinSquaredNumber from './getMinSquaredNumber';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

it('should return null if it is not array', () => {
  const result = getMinSquaredNumber(![]);

  expect(result).toEqual(null);
});

it('should return null if it is empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});
