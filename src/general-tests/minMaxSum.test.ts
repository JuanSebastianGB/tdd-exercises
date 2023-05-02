import { minMaxSum } from './minMaxSum';

describe('minMaxSum', () => {
  it.concurrent('should exists', () => {
    expect(minMaxSum).toBeDefined();
  });
  it.concurrent('should be a function', () => {
    expect(typeof minMaxSum).toBe('function');
  });
  it.concurrent('should print the min sum of an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = minMaxSum(array);
    expect(result.includes(10)).toBe(true);
  });
  it.concurrent('should print the max sum of an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = minMaxSum(array);
    expect(result.includes(14)).toBe(true);
  });
  it.concurrent(
    'should work as expected if the array have more than 5 elements',
    () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result = minMaxSum(array);
      expect(result.includes(10)).toBe(true);
      expect(result.includes(30)).toBe(true);
    }
  );
});
