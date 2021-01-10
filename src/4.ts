export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) arr.push(a);
    if (i === 1) arr.push(b);
    if (i === 2) arr.push(c);
    if (i > 2) arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

const a = tribonacci([3, 2, 1], 10);
console.log(a);

// Как Фибоначи, толино суммировать 3 чиста а не 2.
