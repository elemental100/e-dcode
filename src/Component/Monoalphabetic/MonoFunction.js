export function encrypt(plainText = "", keyText = 0) {
    let key = parseInt(keyText);
    let arr = [];
    for (let i = 0; i < plainText.length; i++) {
      let asciiText = plainText.charCodeAt(i);
      if (asciiText >= 65 && asciiText <= 90) {
        let newT = ((asciiText - 65 + key) % 26) + 65;
        arr.push(String.fromCharCode(newT));
      } else if (asciiText >= 97 && asciiText <= 122) {
        let newT = ((asciiText - 97 + key) % 26) + 97;
        arr.push(String.fromCharCode(newT));
      } else {
        let newT = asciiText;
        arr.push(String.fromCharCode(newT));
      }
    }
    return arr.join("");
  }
  export function decrypt(plainText = "", keyText = 0) {
    let key = parseInt(keyText);
    let arr = [];
    for (let i = 0; i < plainText.length; i++) {
      let asciiText = plainText.charCodeAt(i);
      if (asciiText >= 65 && asciiText <= 90) {
        let newT = (asciiText - 65 - key) % 26;
        while (newT < 0) {
          newT += 26;
        }
        newT = newT + 65;
        arr.push(String.fromCharCode(newT));
      } else if (asciiText >= 97 && asciiText <= 122) {
        let newT = (asciiText - 97 - key) % 26;
        while (newT < 0) {
          newT += 26;
        }
        newT = newT + 97;
        arr.push(String.fromCharCode(newT));
      } else {
        let newT = asciiText;
        arr.push(String.fromCharCode(newT));
      }
    }
    return arr.join("");
  }
  
  