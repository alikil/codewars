export function solution(roman: string): number {
  const replaceWordWithNumber = (l: string[]): number[] => {
    return l.map((w): number => {
      if (w === "I") return 1;
      else if (w === "V") return 5;
      else if (w === "X") return 10;
      else if (w === "L") return 50;
      else if (w === "C") return 100;
      else if (w === "D") return 500;
      else if (w === "M") return 1000;
      else return 0;
    });
  };
  const letters = roman.split("");
  const numbers = replaceWordWithNumber(letters);
  return numbers.reduce((acc, c, i, a) => {
    const b = a[i - 1];
    const f = a[i + 1];
    if (b < c && i === 1) return (acc = c - b);
    if (b < c && i !== 1) return (acc += c - b);
    if (b === c) return (acc += c);
    if (f > c) return (acc += acc);
    return (acc += c);
  });
}

const a = solution("MMVIII");
console.log(a);

// перевести римские часы в цифровые
// Мое решение кастомное с указанием цифр но работает для любых комбинаций надежно.
