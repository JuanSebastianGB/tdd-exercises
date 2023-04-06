/*Write a function that when pass a number:
  - if the number is divisible by 3, return 'Fizz'
  - if the number is divisible by 5, return 'Buzz'
  - if the number is divisible by 3 and 5, return 'FizzBuzz'
  - if the number is not divisible by 3 or 5, return the number

*/
export const fizzBuzz = (num: number) => {
  if (typeof num !== 'number') throw new Error('not number provided');
  if (Number.isNaN(num)) throw new Error('not number provided');
  let result = '';
  Object.entries({ 3: 'Fizz', 5: 'Buzz' }).forEach(([key, value]) => {
    if (num % key === 0) result += value;
  });
  return result === '' ? num : result;
};
