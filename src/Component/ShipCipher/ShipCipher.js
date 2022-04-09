import { useState } from "react";

function ShipCipher() {
  const [resultText, setResultText] = useState("");
  const [plainTextInput, setPlaintext] = useState("");
  const [keyTextInput, setKeyInput] = useState(0);

  var caesarShift = function (plainText = "", shift = 0, typeValue = "") {
    let text = plainText.replace(/\s+/g, '');
    let key = parseInt(shift);
    if (key < 0) {
      return caesarShift(text, key + 26);
    }
    // สร้างตัวแปร Output
    var output = "";
    // เข้าไปในทุก ๆ ตัวอักษร
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      // หากเป็นตัวหนังสือ
      if (c.match(/[a-z]/i)) {
        // ให้ระบุตำแหน่ง ascii ของตัวอักษร
        var code = text.charCodeAt(i);
        // ถ้าเป็นตัวพิมพ์ใหญ่
        if (typeValue === "encrypt") {
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + key) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + key) % 26) + 97);
          }
        } else {
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 - key) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 - key) % 26) + 97);
          }
        }
      }
      // รวมคำตอบ
      output += c;
    }
    // ส่งค่าไปให้ตัวแปรที่กำหนด
    return setResultText(output);
  };

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <h1>Plain text:</h1>
      <input
        type="text"
        placeholder="Input a plain text.."
        value={plainTextInput}
        onInput={(event) => setPlaintext(event.target.value)}
      />
      <h1>Key</h1>
      <input
        type="number"
        placeholder="Input a key.."
        value={keyTextInput}
        onInput={(event) => setKeyInput(event.target.value)}
      />
      <div>
        <button onClick={() => {
          caesarShift(plainTextInput, keyTextInput, "encrypt");
        }}
        >
          Encrypt
        </button>
        <button onClick={() => {
          caesarShift(plainTextInput, keyTextInput, "decrypt");
        }}
        >
          Decrypt
        </button>
        <h1>Result: {resultText}</h1>
        <h1>---End of Shift---</h1>
      </div>
    </div>
  );
}
export default ShipCipher;