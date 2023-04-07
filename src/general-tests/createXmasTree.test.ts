import { createXmasTree } from '../utilities';

describe('createXmasTree', () => {
  test('createXmasTree should be a function', () => {
    expect(typeof createXmasTree).toBe('function');
  });
  test('should throw an error if the argument is missing', () => {
    expect(() => createXmasTree()).toThrow();
  });
  test('should throw an error if the argument is not a number', () => {
    expect(() => createXmasTree('hello')).toThrow(/number/);
  });
  test('should be able to print a tree without break line at the end', () => {
    expect(createXmasTree(1).endsWith('\n')).toBe(false);
  });
  test('height must be between 1 and 100', () => {
    expect(() => createXmasTree(0)).toThrow(/between 1 and 100/);
    expect(() => createXmasTree(101)).toThrow(/between 1 and 100/);
  });
  test('should print *\n#\n# if height is 1', () => {
    expect(createXmasTree(1)).toBe('*\n#\n#');
  });
  test('should include at most 2 #', () => {
    const result = createXmasTree(1);
    const count = (result.match(/#/g) || []).length;
    expect(count).toBe(2);
  });
  test('should print _*_\n***\n_#_ if height is 3', () => {
    expect(createXmasTree(2)).toBe('_*_\n***\n_#_\n_#_');
  });
  test('should print __*__\n_***_\n*****\n__#__ if height is 3', () => {
    expect(createXmasTree(3)).toBe('__*__\n_***_\n*****\n__#__\n__#__');
  });
});
