import { mod } from "mathjs";

function shiftCipher(plainText, shift, typeValue) {
  let key = shift >= 0 ? parseInt(shift) : parseInt(mod(shift, 26) + 26);
  var output = "";
  for (var i = 0; i < plainText.length; i++) {
    var c = plainText[i];
    if (c.match(/[a-z]/i)) {
      var code = plainText.charCodeAt(i);
      if (typeValue === "encrypt") {
        if (code >= 65 && code <= 90) {
          let ascii = mod(code - 65 + key, 26);
          while (ascii < 0) {
            ascii += 26;
          }
          c = String.fromCharCode(ascii + 65);
        }
        if (code >= 97 && code <= 122) {
          let ascii = mod(code - 97 + key, 26);
          while (ascii < 0) {
            ascii += 26;
          }
          c = String.fromCharCode(ascii + 97);
        }
      } else if (typeValue === "decrypt") {
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(mod(code - 65 - key, 26) + 65);
        }
        if (code >= 97 && code <= 122) {
          c = String.fromCharCode(mod(code - 97 - key, 26) + 97);
        }
      }
    }
    output += c;
  }
  return output;
}

export default shiftCipher;
