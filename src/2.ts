export function isValidWalk(walk: string[]) {
  const steps: { [x: string]: number } = { w: 0, e: 0, s: 0, n: 0 };
  walk.forEach((f) => steps[`${f}`]++ || 1);
  let access1 = 0;
  let access2 = 0;
  access1 += steps.n - steps.s;
  access2 += steps.w - steps.e;
  if (access1 === 0 && access2 === 0 && walk.length === 10) return true;
  else return false;
}

const a = isValidWalk([
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
]);
console.log(a);

// дорожная карта которая должна вернуть обратно за 10 часов
