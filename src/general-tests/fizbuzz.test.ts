import { fizzBuzz } from '../utilities';

describe('FizzBuzz', () => {
  // test('should be a function', () => {
  //   expect(typeof fizzBuzz).toBe('function');
  // });
  test('it should throw an error if not parameter provided', () => {
    expect(() => fizzBuzz()).toThrow();
  });
  test('it should throw an error with a message of number if the parameter is not a number', () => {
    expect(() => fizzBuzz()).toThrow(/number/i);
  });
  test('it should throw an error with a message of number if the parameter is NAN', () => {
    expect(() => fizzBuzz(NaN)).toThrow(/number/i);
  });

  test('return Fizz if the number provided is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  test('if the number is multiple of 3, return Fizz', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
    expect(fizzBuzz(33)).toBe('Fizz');
  });
  test('return Buzz if the number provided is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  test('if the number is multiple of 5, return Buzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
    expect(fizzBuzz(50)).toBe('Buzz');
  });
  test('return FizBuzz if the number provided is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  test('if the number is divisible by 3 and 5, return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(60)).toBe('FizzBuzz');
  });
  test('if the number is not divisible by 3 or 5, return the number', () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(11)).toBe(11);
  });
  test('if the number is 1 return 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });
});
