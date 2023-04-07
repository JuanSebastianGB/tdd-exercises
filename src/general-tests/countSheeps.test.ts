import { countSheep } from '../utilities';

describe('countSheep', () => {
  test('should be a function', () => {
    expect(typeof countSheep).toBe('function');
  });
  test('should get an array of sheep', () => {
    expect(() => countSheep()).toThrow(/provided/i);
  });
  test('should return [] if not sheep provided', () => {
    expect(countSheep([])).toEqual([]);
  });
  // test('should return a list', () => {
  //   expect(Array.isArray(countSheep([1, 2, 2]))).toBeTruthy();
  // });
  test('should return a list of rojo sheep', () => {
    const testSheepList = [
      { name: 'Nana', color: 'rojo' },
      { name: 'Betty', color: 'blue' },
    ];
    expect(countSheep(testSheepList)).toEqual([
      { name: 'Nana', color: 'rojo' },
    ]);
  });
  test('should return a list of name containing n and a', () => {
    const testSheepList = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' },
    ];
    const result = JSON.stringify(countSheep(testSheepList));
    expect(result).toEqual(
      JSON.stringify([
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo' },
      ])
    );
  });
});
