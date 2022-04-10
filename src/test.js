// plaintext = "Engineering";
// key = 4;
// ciphertext = "";
// for(line=0; line<key-1; line++){
//     skip=2*(key-line-1);   j=0;
//     // console.log(skip)
//      for(i=line; i<plaintext.length;){
//         // console.log(i);
//          ciphertext += plaintext.charAt(i);
//         //  console.log(ciphertext);
//          if((line==0) || (j%2 == 0)){
//              i+=skip;
//             // console.log(i);
//         } 
//         else i+=2*(key-1) - skip;  
//         j++;          
//      }
//  }
//  for(i=line; i<plaintext.length; i+=2*(key-1)) ciphertext += plaintext.charAt(i);
//  console.log(ciphertext);

ciphertext = "Eenergnigin";
key = 4;
pt = new Array(ciphertext.length); k = 0;
for (line = 0; line < key - 1; line++) {
    skip = 2 * (key - line - 1); j = 0;
    for (i = line; i < ciphertext.length;) {
        pt[i] = ciphertext.charAt(k++);
        console.log(pt);
        if ((line == 0) || (j % 2 == 0)) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
    }
}
for (i = line; i < ciphertext.length; i += 2 * (key - 1)) pt[i] = ciphertext.charAt(k++);
pt.join("");
for (i = pt.length; i < pt.length; i++) {
    pt[i] += pt[i + 1]
    console.log(pt);
}
console.log(pt);