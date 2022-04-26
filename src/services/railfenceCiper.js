import { mod } from 'mathjs';
export function encrypt(plaintext, key) {
  let text = plaintext.toUpperCase();
  var ciphertext = "";
  if (key >= 2) {
    for (var line = 0; line < key - 1; line++) {
      var skip = 2 * (key - line - 1);
      var j = 0;
      // console.log(skip)
      for (var i = line; i < text.length; ) {
        // console.log(i);
        ciphertext += text.charAt(i);
        //  console.log(ciphertext);
        if (line === 0 || mod(j, 2) === 0) {
          i += skip;
          // console.log(i);
        } else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < text.length; i += 2 * (key - 1))
      ciphertext += text.charAt(i);
    return ciphertext;
  }
}
export function decrypt(ciphertext, key) {
  var plaintext = "";
  var pt = new Array(ciphertext.length);
  var k = 0;
  if (key >= 2) {
    for (var line = 0; line < key - 1; line++) {
      var skip = 2 * (key - line - 1);
      var j = 0;
      for (var i = line; i < ciphertext.length; ) {
        pt[i] = ciphertext.charAt(k++);
        console.log(pt);
        if (line === 0 || mod(j, 2) === 0) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (i = line; i < ciphertext.length; i += 2 * (key - 1))
      pt[i] = ciphertext.charAt(k++);
    plaintext = pt.join("");
    return plaintext.toUpperCase();
  }
}
