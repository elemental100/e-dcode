import bigInt from "big-integer";
export function encrypt(plainText, key) {
  let pubText = atob(key).split(",");
  let e = bigInt(pubText[0]);
  let n = bigInt(pubText[1]);
  let mtext = [];
  for (let index = 0; index < plainText.length; index++) {
    let asciiText = plainText.charCodeAt(index);
    mtext.push(asciiText);
  }
  let m = bigInt(mtext.join(""));
  return btoa(bigInt(m).modPow(e, n).toString());
}
export function decrypt(plainText, key) {
  let pubText = atob(key).split(",");
  let d = bigInt(pubText[0]);
  let n = bigInt(pubText[1]);
  let c = atob(plainText);
  let m = bigInt(c).modPow(d, n).toString();
  let asciiText = "";
  let arr = [];
  for (let i = 0; i <= m.length; i++) {
    if (+asciiText >= 32) {
      arr.push(String.fromCharCode(+asciiText));
      asciiText = m[i];
    } else {
      asciiText += m[i];
    }
  }
  return arr.join("");
}
