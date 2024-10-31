/** @returns un numero aleatorio entre 0 y 255 sin decimales, para ser utilizado al crear un color rgb */
const getRandomNumberRgb = () => (Math.random() * 255).toFixed(0);

/** @returns crea un color rgb con 3 valores numericos aleatorios entre 0 y 255 */
export const getRandomColorRgb = () =>
  `rgb(${getRandomNumberRgb()},${getRandomNumberRgb()},${getRandomNumberRgb()})`;
