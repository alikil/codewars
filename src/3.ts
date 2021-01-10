export function findOutlier(integers: number[]): number {
  const count: { [x: string]: number } = { o: 0, e: 0 };
  const data = integers.map((v) => {
    return { o: v % 2 ? true : false, v };
  });
  data.forEach((v) => count[v.o ? "o" : "e"]++);
  let answear = 0;
  for (const f of data) {
    if (f.o && count.o < count.e) answear = f.v;
    if (!f.o && count.o > count.e) answear = f.v;
    if (answear) break;
  }
  return answear;
}

const a = findOutlier([1, 1, 0, 1, 1]);
console.log(a);

// найти единственное четное или единственное нечетное в смассиве
