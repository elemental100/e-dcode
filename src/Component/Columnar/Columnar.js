import { useState } from "react";

function Columnar() {
  const [cText, setCtext] = useState("");
  const [pTextInput, setPTextInput] = useState("");
  const [keytInput, setKeyInput] = useState(0);
  const [modInput, setMOdInput] = useState(0);

  const arr = [];

  function onEncodeClick(planText = "", modText = 0, keyText =0) {
    let key = parseInt(keyText);
    let mod = parseInt(modText);
    let text = planText.replace(/\s+/g, '');
    for (let i = 0; i < text.length; i++) {
        let asciiText = (text.toUpperCase().charCodeAt(i))-65;
        let newT = ((asciiText + key) % mod)+65;
        arr.push(String.fromCharCode(newT))
    }
    console.log(arr)
    setCtext(arr);
  }

  function onDecodeClick(planText = "", modText = 0, keyText =0) {
    let key = parseInt(keyText);
    let mod = parseInt(modText);
    let text = planText.replace(/\s+/g, '');
    for (let i = 0; i < text.length; i++) {
        let asciiText = (text.toUpperCase().charCodeAt(i))-65;
        if(asciiText < key){
          let newT = ((asciiText + mod) - key) + 65;
          console.log("test")
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
        type="number"
        placeholder="Key"
        value={keytInput}
        onInput={(event) => setKeyInput(event.target.value)}
      />
      <h1>Mod</h1>
      <input
        type="number"
        placeholder="Mod"
        value={modInput}
        onInput={(event) => setMOdInput(event.target.value)}
      />
      <div>
        <button
          onClick={() => {
            onEncodeClick(pTextInput,modInput,keytInput);
          }}
        >
          Encode
        </button>
        <button
          onClick={() => {
            onDecodeClick(pTextInput,modInput,keytInput);
          }}
        >
          Decode
        </button>
        <h1>{cText}</h1>
      </div>
    </div>
  );
}

export default Columnar;
