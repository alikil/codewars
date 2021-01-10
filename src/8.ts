export const convertFrac = (lst: [number, number][]): string => {
  const m = Math.max(...lst.map((b) => b[1]));
  let s = 1;
  let r = "";
  let c = false;
  do {
    c = lst
      .map((d) => Number.isInteger(((s * m) / d[1]) * d[0]))
      .every((d) => d === true);
    if (c) lst.forEach((v) => (r += `(${((s * m) / v[1]) * v[0]},${s * m})`));
    s++;
  } while (c === false);
  return r;
};

const a = convertFrac([
  [1, 2],
  [4, 5],
  [3, 4],
  [6, 9],
  [7, 10],
]);
console.log(a);

// Найти общим минимальный множитель дроби и вернуть преобразованные дроби
