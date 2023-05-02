import { countingSort } from './countingSort';

describe('counting sort', () => {
  it.concurrent('should exists', () => {
    expect(countingSort).toBeDefined();
  });
  it.concurrent('should be a function', () => {
    expect(typeof countingSort).toBe('function');
  });
  it.concurrent('should return an array on numbers', () => {
    const array = [1, 2, 3, 4, 5];
    const result = countingSort(array);
    expect(Array.isArray(result)).toBe(true);
    expect(typeof result[0]).toBe('number');
  });
  it.concurrent('should return an array of length 100', () => {
    const array = [1, 1, 2];
    const result = countingSort(array);
    expect(result.length).toEqual(100);

    const array2 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
    const result2 = countingSort(array2);
    expect(result2.length).toEqual(100);
  });
  it.concurrent('should return includes [0,2] if the input is [1,1]', () => {
    const array = [1, 1];
    const result = countingSort(array);
    expect(result.toString().startsWith('0,2')).toBe(true);
  });
  it.concurrent('should includes [1,5] if the input is [0,1,1,1,1,1]', () => {
    const array = [0, 1, 1, 1, 1, 1];
    const result = countingSort(array);
    expect(result.toString().startsWith('1,5')).toBe(true);
  });
});
