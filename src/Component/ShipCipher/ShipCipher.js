import { useState } from "react";

function ShipCipher() {
    const [plainText, setCtext] = useState("");
    return (
      <div>
        <h1>Caesar Cipher</h1>
        <h1>Plain text:</h1>
        <input
          type="text"
          placeholder="Input a plain text.."
          value={plainText}
          onChange={(event) => {
            setCtext(event.target.value);
          }}
        />
        <h1>Key</h1>
        <input type="text" placeholder="Input a key.." />
        <div>
          <button>Encrypt</button>
          <button>Decrypt</button>
          <h1>Result: {plainText}</h1>
        </div>
      </div>
    );
  }
  function caesarCipher(string, shift){
    let resultArray = []
    for (let i = 0; i < string.length; i++){
      let code = string.charCodeAt(i) + shift
      while (code > 122) {
        code = (code - 122) + 96
      }
      resultArray.push(String.fromCharCode(code))
    }
    return resultArray.join('')
  }
export default ShipCipher;