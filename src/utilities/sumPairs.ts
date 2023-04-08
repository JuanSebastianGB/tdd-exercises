export const sumPairs = (numbers: number[], result: number) => {
  if (typeof numbers === 'undefined')
    throw new Error('first argument is missing');
  if (Array.isArray(numbers) === false)
    throw new Error('first argument must be a list');
  if (numbers.some((num) => typeof num !== 'number'))
    throw new Error('list must contain only numbers');
  if (typeof result !== 'number')
    throw new Error('second argument is missing or is not a number');
  if (numbers.length < 2) return null;

  for (let i = 0; i < numbers.length; i++) {
    let difference = result - numbers[i];
    if (numbers.indexOf(difference, i + 1) !== -1)
      return [numbers[i], difference];
  }
  return null;
};
