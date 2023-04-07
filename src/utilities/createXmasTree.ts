export const createXmasTree = (height: number) => {
  if (typeof height !== 'number') throw new Error('Argument must be a number');
  if (height < 1 || height > 100)
    throw new Error('Height must be between 1 and 100');
  let tree = '';
  for (let i = 0; i < height; i++) {
    let lineOfUnderScore = '_'.repeat(height - i - 1);
    let lineOfStar = '*'.repeat(i * 2 + 1);
    tree += lineOfUnderScore + lineOfStar + lineOfUnderScore + '\n';
  }
  for (let i = 0; i < 2; i++) {
    let lineOfUnderScore = '_'.repeat(height - 1);
    tree += lineOfUnderScore + '#' + lineOfUnderScore + '\n';
  }
  if (tree.endsWith('\n')) tree = tree.slice(0, -1);
  return tree;
};
