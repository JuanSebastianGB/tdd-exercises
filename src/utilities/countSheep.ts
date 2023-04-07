// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

interface Sheep {
  name: string;
  color: string;
}
export const countSheep = (data: Sheep[]) => {
  if (typeof data === 'undefined') throw new Error('Data must be provided');
  if (!Array.isArray(data)) throw new Error('Data must be a list');
  if (data.length === 0) return [];
  return data.filter((sheep) => {
    const isRed = sheep.color === 'rojo';
    const lowerCaseName = sheep.name.toLowerCase();
    const hasNandA = lowerCaseName.includes('n') && lowerCaseName.includes('a');
    return hasNandA && isRed;
  });
};
