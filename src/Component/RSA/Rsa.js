import { useState } from "react";

function Columnar() {
  const [cText, setCtext] = useState("");
  const [mTextInput, setMTextInput] = useState(0);
  const [pTextInput, setPInput] = useState(2);
  const [qTextInput, setQInput] = useState(3);

  function onEncodeClick() {
    let n = pTextInput * qTextInput;
    let phiN = (pTextInput - 1) * (qTextInput - 1);
    let e = rndPrimeNumber("E");
    let d = 1;
    if (e < phiN) {
      setCtext(e);
    } else {
      rndPrimeNumber("E");
    }
  }

  function rndPrimeNumber(type = "") {
    let number = Math.floor(Math.random() * 100) + 2;
    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      if (type === "P") {
        setPInput(number);
      } else if (type === "Q") {
        setQInput(number);
      } else if (type === "E") {
        return number;
      }
    } else {
      return rndPrimeNumber(type);
    }
  }

  return (
    <div>
      <h1>M</h1>
      <input
        type="text"
        placeholder="Plantext"
        value={mTextInput}
        onInput={(event) => setMTextInput(event.target.value)}
      />
      <h1>P</h1>
      <input type="number" placeholder="Key" value={pTextInput} />
      <button
        onClick={() => {
          rndPrimeNumber("P");
        }}
      >
        Random
      </button>
      <h1>Q</h1>
      <input type="number" placeholder="Key" value={qTextInput} />
      <button
        onClick={() => {
          rndPrimeNumber("Q");
        }}
      >
        Random
      </button>
      <div>
        <button
          onClick={() => {
            onEncodeClick();
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
