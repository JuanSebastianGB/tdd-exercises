export const isValid = (letter: string) => {
  if (typeof letter !== 'string') throw new Error('Parameter must be a string');
  if (letter.length === 0) return false;
  if (letter.length <= 2) return false;

  for (const word of letter.trim().split(' ')) {
    if (word.includes('()') || word.startsWith(')')) return false;
    if (word.startsWith('(') && !word.endsWith(')')) return false;
    if (!word.startsWith('(')) continue;
    if (word.includes('{') || word.includes('}')) return false;
  }
  return true;
};
