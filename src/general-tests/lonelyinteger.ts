export const lonelyInteger = (arr: number[]) => {
  let result = 0;
  const myMap = new Map<number, number>();
  arr.forEach((i) => {
    if (myMap.has(i)) myMap.set(i, myMap.get(i)! + 1);
    else myMap.set(i, 1);
  });
  myMap.forEach((value, key) => {
    if (value === 1) result = key;
  });
  return result;
};
