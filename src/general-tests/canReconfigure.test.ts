// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas

interface myObject {
  [key: string]: string;
}

const canReconfigure = (from: string, to: string) => {
  if (typeof from !== 'string') throw new Error('A string is required');
  if (typeof to !== 'string') throw new Error('A string is required');
  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;
  const hasSameUniqueChars = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueChars) return false;

  const cache: myObject = {};
  for (let i = 0; i < from.length; i++) {
    if (cache[from[i]] && cache[from[i]] !== to[i]) return false;
    cache[from[i]] = to[i];
  }
  return true;
};

describe('canReconfigure', () => {
  // test('canReconfigure to be a function', () => {
  //   expect(typeof canReconfigure).toBe('function');
  // });
  test('should throw an error if not argument provided', () => {
    expect(() => canReconfigure()).toThrow();
  });
  test('should throw an error message that include string if not string provided', () => {
    expect(() => canReconfigure()).toThrow(/string/i);
  });
  test('should throw an error message that include string if not string provided', () => {
    expect(() => canReconfigure([1, 25])).toThrow(/string/i);
  });
  test('should throw an error if second argument is missing', () => {
    expect(() => canReconfigure('abc')).toThrow();
  });

  test('should throw an error if second argument is not a string', () => {
    expect(() => canReconfigure('abc', 5)).toThrow();
  });

  test('should be false if the length of both strings mismatch', () => {
    expect(canReconfigure('abc', 'ab')).toBe(false);
  });

  test('should return a boolean', () => {
    expect(canReconfigure('abc', 'abc')).toBeTypeOf('boolean');
  });

  test('should return false if the number of unique chars in both strings mismatch', () => {
    expect(canReconfigure('abc', 'abb')).toBe(false);
  });

  test('should return false if both string have not the same order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  });
});
