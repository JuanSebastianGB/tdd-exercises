export const countingSort = (arr: number[]): number[] => {
  const result = Array(100).fill(0);
  arr.forEach((i) => (result[i] += 1));
  return result;
};
