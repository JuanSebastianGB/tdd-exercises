import { isValid } from '../utilities/isValid';

describe('isValid', () => {
  test('should throw an error if is not a string', () => {
    expect(() => isValid()).toThrow(/string/i);
  });
  test('should return a boolean', () => {
    expect(typeof isValid('')).toBe('boolean');
  });
  test('should return false if the string is empty', () => {
    expect(isValid('')).toBe(false);
  });
  test('should return false if the string length is less or equal 2', () => {
    expect(isValid('()')).toBe(false);
  });
  test('should be false if any of the words is exactly ())', () => {
    expect(isValid('hello ()')).toBe(false);
  });
  test('should return false if a word start with )', () => {
    expect(isValid(')hello')).toBe(false);
  });
  test('should return false if the string starts with ( but does not end with )', () => {
    expect(isValid('(hello')).toBe(false);
  });
  test('should return false if inside parenthesis there is {', () => {
    expect(isValid('(hello {world})')).toBe(false);
  });
  test('should return false if inside parenthesis there is }', () => {
    expect(isValid('(world})')).toBe(false);
  });
  test('should return true if is the word doesnt start with ( but have { or }', () => {
    expect(isValid('world}')).toBe(true);
  });
  test('should be false if atleast on word start with ( but doesnt close with )', () => {
    expect(isValid('bici coche (balón bici coche')).toBe(false);
  });
  test('should be false if an open an closed parenthesis doesnt have nothing', () => {
    expect(isValid('(()) bici')).toBe(false);
  });
});
