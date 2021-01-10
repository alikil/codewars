// import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  return morseCode
    .split("   ")
    .map((w) => {
      return w
        .split(" ")
        .map((l) => {
          // MORSE_CODE[l]
        })
        .join("");
    })
    .join(" ");
}

const a = decodeMorse(".... . -.--   .--- ..- -.. .");
console.log(a);

// Розделить по словам => буквам => декодировать буквы. Вернуть текст
