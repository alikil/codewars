export function wave(str: string): Array<string> {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    const a = str.split("");
    a[i] = str[i].toUpperCase();
    res.push(a.join(""));
  }
  return res;
}

const a = wave("two words");
console.log(a);

// Вернуть массив фроз где в каждом большая буква следующая (волна)
