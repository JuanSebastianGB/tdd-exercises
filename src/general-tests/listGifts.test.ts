import { listGifts } from '../utilities';

describe('listGifts', () => {
  test('listGifts should be a function', () => {
    expect(typeof listGifts).toBe('function');
  });
  test('parameter should be an string', () => {
    expect(() => listGifts()).toThrow(/string/i);
  });
  test('should return an object', () => {
    expect(typeof listGifts('hello world')).toBe('object');
  });
  test('should return an empty object if an empty string', () => {
    expect(listGifts('')).toEqual({});
  });
  test('with a string "tv" should return an object with a property tv with value 1', () => {
    expect(listGifts('tv')).toEqual({ tv: 1 });
  });
  test('with a string "tv tv" should return an object with a property tv with value 2', () => {
    expect(listGifts('tv tv')).toEqual({ tv: 2 });
  });
  test('with a string "tv  car" should return an object tv and car with 1 as value', () => {
    expect(listGifts('tv  car')).toEqual({ tv: 1, car: 1 });
  });
  test('with a string "tv _car" should return an object tv with 1 as value', () => {
    expect(listGifts('tv _car')).toEqual({ tv: 1 });
  });
});
