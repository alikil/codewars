export function order(words: string): string {
  const numbers = [...Array(10).keys()];
  return words
    .split(" ")
    .map((w) => {
      const pos = +w
        .split("")
        .map((l) => (numbers.indexOf(+l) !== -1 ? l : null))
        .filter((f) => f)
        .join();
      return { w, pos };
    })
    .sort((a, b) => a.pos - b.pos)
    .map((t) => t.w)
    .join(" ");
}

const a = order("is2 Thi1s T4est 3a");
console.log(a);

// order by number at string
// regex is better
