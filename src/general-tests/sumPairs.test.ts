import { sumPairs } from '../utilities/sumPairs';

describe('sumPairs', () => {
  test('sumPairs to be defined', () => {
    expect(sumPairs).toBeDefined();
  });
  test('should be a function', () => {
    expect(typeof sumPairs).toBe('function');
  });
  test('should throw an error if the argument is missing', () => {
    expect(() => sumPairs()).toThrow();
  });
  test('should throw an error with text first included if the first argument is missing', () => {
    expect(() => sumPairs()).toThrow(/first/);
  });
  test('should throw an error if the first argument is not a list', () => {
    expect(() => sumPairs('hello')).toThrow(/list/);
  });
  test('should thow an error if the lists doesnt have numbers', () => {
    expect(() => sumPairs(['hello'])).toThrow(/number/);
  });
  test('should throw an error if the second argument is missing', () => {
    expect(() => sumPairs([1, 2])).toThrow(/second/);
  });
  test('should return null if the length of the first argument is less than 2', () => {
    expect(sumPairs([1], 2)).toBeNull();
  });
  test('should return [3,7]  if arguments are [3, 5, 7, 2] and 10', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7]);
  });
  test('sumPairs([-3, -2, 7, -5], 10)should return null', () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull();
  });
  test('sumPairs([0, 2, 2, 3, -1, 1, 5], 6)should return [1,5]', () => {
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5]);
  });
  test('sumPairs([0, 2, 2, 3, -1, 1, 9], 6)should return null', () => {
    expect(sumPairs([0, 2, 2, 3, -1, 1, 9], 6)).toBeNull();
  });
  test('sumPairs([1,5], 6)should return [1,5]', () => {
    expect(sumPairs([1, 5], 6)).toEqual([1, 5]);
  });
  test('should return the pair that is at the left', () => {
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2]);
  });
});
