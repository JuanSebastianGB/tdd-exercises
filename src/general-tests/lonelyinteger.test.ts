import { lonelyInteger } from './lonelyinteger';

describe('lonelyInteger', () => {
  it.concurrent('should exists', () => {
    expect(lonelyInteger).toBeDefined();
  });
  it.concurrent('should be a function', () => {
    expect(typeof lonelyInteger).toBe('function');
  });
  it.concurrent('should return 4', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];
    expect(lonelyInteger(arr)).toBe(4);
  });
  it.concurrent('should return 7', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1, 4, 7];
    expect(lonelyInteger(arr)).toBe(7);
  });

  it.concurrent('should return 15', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1, 4, 7, 7, 15];
    expect(lonelyInteger(arr)).toBe(15);
  });
  it.concurrent('should return 5', () => {
    const arr = [1, 2, 3, 4, 3, 5, 2, 1, 4, 7, 7, 15];
    expect(lonelyInteger(arr)).toBe(15);
  });
});
