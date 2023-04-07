interface Gift {
  [key: string]: number;
}
export const listGifts = (data: string) => {
  if (typeof data !== 'string') throw new Error('Parameter must be a string');
  if (data.length === 0) return {};
  const cache: Gift = {};
  data
    .trim()
    .split(' ')
    .forEach((el) => {
      if (el === '' || el.startsWith('_')) return;
      if (el in cache) cache[el]++;
      else cache[el] = 1;
    });
  return cache;
};
