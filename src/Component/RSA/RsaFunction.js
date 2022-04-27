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

export function onGenerateClick(keysize = 0, type = "") {
  let p = rndPrimeNumber("P", 0, keysize);
  let q = rndPrimeNumber("Q", p, keysize);
  let n = bigInt(p).multiply(q);
  let phiN = bigInt(bigInt(p).minus(1)).multiply(bigInt(q).minus(1));
  let e = rndPrimeNumber("E", p, keysize);

  if (e < phiN && +bigInt.gcd(e, phiN) === 1) {
    let d = bigInt(e).modInv(phiN);
    if (type === "public") {
      return btoa([e, n]);
    } else if (type === "private") {
      return btoa([d, n]);
    }
  } else {
    return onGenerateClick(keysize, type);
  }
}

export function rndPrimeNumber(type = "", p = 0, keysize = 0) {
  console.log(keysize);
  const min = bigInt.one.shiftLeft(keysize - 1);
  const max = bigInt.one.shiftLeft(keysize).prev();
  while (true) {
    let number = bigInt.randBetween(min, max);
    if (number.isProbablePrime(256)) {
      if (type === "P") {
        return number;
      } else if (type === "Q") {
        if (number !== p && Math.abs(p - number) !== 1) {
          return number;
        } else {
          return rndPrimeNumber("Q", p, keysize);
        }
      } else if (type === "E") {
        return number;
      }
    } else {
      return rndPrimeNumber(type, p, keysize);
    }
  }
}
