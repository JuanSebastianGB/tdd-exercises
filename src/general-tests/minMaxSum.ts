export const minMaxSum = (array: number[]) => {
  const ascendingArray = [...array].sort();
  const descendingArray = [...array].sort((a, b) => b - a);
  const minValue = ascendingArray.slice(0, 4).reduce((a, b) => a + b, 0);
  const maxValue = descendingArray.slice(0, 4).reduce((a, b) => a + b, 0);
  console.log(`${minValue} ${maxValue}`);
  return [minValue, maxValue];
};
