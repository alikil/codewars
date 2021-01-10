export function duplicateEncode(word: string) {
  word = word.toLowerCase();
  let res = "";
  for (let i = 0; i < word.length; i++) {
    const test = word.substr(word.indexOf(word[i]) + 1, word.length);
    if (test.indexOf(word[i]) === -1) res += "(";
    else res += ")";
  }
  return res;
}

const a = duplicateEncode("din");
console.log(a);

// Уникальные буквы "(", повторяющиеся "("
