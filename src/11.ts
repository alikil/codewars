export function isInteresting(n: number, awesomePhrases: number[]): number {
  let zero = false;
  let one = false;
  let two = false;

  if (awesomePhrases.includes(n)) two = true;
  if (awesomePhrases.includes(n + 1)) one = true;
  if (awesomePhrases.includes(n + 2)) one = true;

  const sp = n.toString().split("");
  const sp1 = (n - 1).toString().split("");
  const sp2 = (n - 2).toString().split("");

  if (sp.slice(1, sp.length).every((e) => +e === 0)) two = true;
  if (sp.slice(1, sp.length).every((e) => +e + 1 === 0)) one = true;
  if (sp.slice(1, sp.length).every((e) => +e + 2 === 0)) one = true;

  if (sp.every((e) => e === e[0])) two = true;
  if (sp1.every((e) => e === e[0])) one = true;
  if (sp2.every((e) => e === e[0])) one = true;

  // if (sp.reduce()) {

  // }

  // CODE HERE
  return 1;
}

const a = isInteresting(1336, [1337, 256]);
console.log(a);
