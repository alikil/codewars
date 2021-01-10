export function josephusSurvivor(n: number, k: number) {
  const stepUp = (length: number, pick: number) => {
    pick = pick - length;
    if (length <= pick) pick = stepUp(length, pick);
    return pick;
  };
  let pick = 0;
  const arr = [...Array(n).keys()];
  for (let i = 0; i < n - 1; i++) {
    pick = pick + k - 1;
    if (arr.length <= pick) pick = stepUp(arr.length, pick);
    arr.splice(pick, 1);
  }
  return arr[0] + 1;
}

const a = josephusSurvivor(11, 19);
console.log(a);

// самое крутое решение, но по формуле решать не царское дело. Костыли наше все)
// export function josephusSurvivor(n: number, k: number): number {
//   return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;
// }
