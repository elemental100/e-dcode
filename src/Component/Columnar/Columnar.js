import { useState } from "react";

function Columnar() {
  const [cText, setCtext] = useState("");
  const [pTextInput, setPTextInput] = useState("");
  const [keytInput, setKeyInput] = useState(12);
  let arr = [];
  const keyArr = [];

  function onEncodeClick(plantext = "", key = 0) {
    for (let i = 0; i < key.length; i++) {
      keyArr.push(key[i]);
    }

    for (let i = 0; i < keyArr.length; i++) {
      for (let j = keyArr[i]; j < plantext.length; j+=3) {
        arr.push(plantext[keyArr[j]-1])
      }
      
    }

    console.log(plantext.length);
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
      <div>
        <button
          onClick={() => {
            onEncodeClick(pTextInput, keytInput);
          }}
        >
          Encode
        </button>
        <button>Decode</button>
        <h1>{cText}</h1>
      </div>
    </div>
  );
}

export default Columnar;
