const log = (is: boolean) => console.log(is);
const t = 1111
const b = "aaaaa"
const c = "11111"
const a = ""
const d = NaN
const e = null
const r = undefined

t ? log(true) : log(false);
b ? log(true) : log(false);
c ? log(true) : log(false);
a ? log(true) : log(false);
d ? log(true) : log(false);
e ? log(true) : log(false);
r ? log(true) : log(false);

