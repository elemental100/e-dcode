import { useState } from "react";

function Monoalphabetic() {
  const [cText, setCtext] = useState("");
  const [pTextInput, setPTextInput] = useState("");
  const [keytInput, setKeyInput] = useState(0);

  const arr = [];

  function onEncodeClick(planText = "", keyText =0) {
    let key = parseInt(keyText);
    let text = planText.replace(/\s+/g, '');
    for (let i = 0; i < text.length; i++) {
        let asciiText = (text.toUpperCase().charCodeAt(i))-65;
        let newT = ((asciiText + key) % 26)+65;
        arr.push(String.fromCharCode(newT))
    }
    setCtext(arr);
  }

  function onDecodeClick(planText = "", keyText =0) {
    let key = parseInt(keyText);
    let text = planText.replace(/\s+/g, '');
    for (let i = 0; i < text.length; i++) {
        let asciiText = (text.toUpperCase().charCodeAt(i))-65;
        if(asciiText < key){
          let newT = ((asciiText - key) + 26) + 65;
          arr.push(String.fromCharCode(newT))
        }else{
          let newT = (asciiText - key) + 65;
          arr.push(String.fromCharCode(newT))
        }   
    }
    setCtext(arr);
  }
  return (
    <div>
      <h1>Plantext</h1>
      <input
        type="text"
        placeholder="Plantext"
        value={pTextInput}
        onInput={(event) => setPTextInput(event.target.value)}
      />
      <h1>Key</h1>
      <input
        type="text"
        placeholder="Key"
        value={keytInput}
        onInput={(event) => setKeyInput(event.target.value)}
      />
      <div>
        <button
          onClick={() => {
            onEncodeClick(pTextInput,keytInput);
          }}
        >
          Encode
        </button>
        <button
          onClick={() => {
            onDecodeClick(pTextInput,keytInput);
          }}
        >
          Decode
        </button>
        <h1>{cText}</h1>
      </div>
    </div>
  );
}

export default Monoalphabetic;
