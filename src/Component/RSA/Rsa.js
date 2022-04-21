import { useState } from "react";
import bigInt from "big-integer";

function Rsa() {
  const [cText, setCtext] = useState("");
  const [decryptText, setDecryptTexttext] = useState("");
  const [publicText, setPublictext] = useState("");
  const [privateText, setPrivatetext] = useState("");
  const [mTextInput, setMTextInput] = useState("");
  const [mDTextInput, setMDTextInput] = useState("");
  const [keyEncryptText, setkeyEncryptText] = useState("");
  const [keyDecryptText, setkeyDecryptText] = useState("");

  function onDecryptClick(plainText = "") {
    let pubText = atob(keyDecryptText).split(",");
    let d = bigInt(pubText[0]);
    let n = bigInt(pubText[1]);
    let c = atob(plainText);
    let m = bigInt(c).modPow(d, n).toString();
    let asciiText = "";
    let arr = [];
    for (let i = 0; i <= m.length; i++) {
      if (+asciiText >= 32) {
        arr.push(String.fromCharCode(+asciiText));
        asciiText = m[i]
      } else {
        asciiText += m[i];
      }
    }
    setDecryptTexttext(arr.join(""))
  }

  function onEnCrpytClick(planText = "") {
    let pubText = atob(keyEncryptText).split(",");
    let e = bigInt(pubText[0]);
    let n = bigInt(pubText[1]);
    let mtext = [];
    for (let index = 0; index < planText.length; index++) {
      let asciiText = planText.charCodeAt(index);
      mtext.push(asciiText);
    }
    let m = bigInt(mtext.join(""));
    setCtext(btoa(bigInt(m).modPow(e, n).toString()));
  }

  function onGenerateClick() {
    let p = rndPrimeNumber("P");
    let q = rndPrimeNumber("Q", p);
    let n = bigInt(p).multiply(q);
    let phiN = bigInt(bigInt(p).minus(1)).multiply(bigInt(q).minus(1));
    let e = rndPrimeNumber("E");

    if (e < phiN && +bigInt.gcd(e, phiN) === 1) {
      let d = bigInt(e).modInv(phiN);
      setPublictext(btoa([e, n]));
      setPrivatetext(btoa([d, n]));
    } else {
      return onGenerateClick();
    }
  }

  function rndPrimeNumber(type = "", p = 0) {
    const min = bigInt.one.shiftLeft(512 - 1);
    const max = bigInt.one.shiftLeft(512).prev();
    while (true) {
      let number = bigInt.randBetween(min, max);
      if (number.isProbablePrime(256)) {
        if (type === "P") {
          return number;
        } else if (type === "Q") {
          if (number !== p && Math.abs(p - number) !== 1) {
            return number;
          } else {
            return rndPrimeNumber("Q");
          }
        } else if (type === "E") {
          return number;
        }
      } else {
        return rndPrimeNumber(type);
      }
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            onGenerateClick();
          }}
        >
          Generate Key
        </button>
      </div>
      <h1>Public Key</h1>
      <textarea readOnly value={publicText} />
      <h1>Private Key</h1>
      <textarea readOnly value={privateText} />
      <div>
        <h1>PlainText</h1>
        <input
          type="text"
          placeholder="PlainText"
          value={mTextInput}
          onInput={(event) => setMTextInput(event.target.value)}
        />
        <h1>Public/Private Key</h1>
        <div>
          <textarea
            value={keyEncryptText}
            onInput={(event) => setkeyEncryptText(event.target.value)}
          />
        </div>

        <button
          onClick={() => {
            onEnCrpytClick(mTextInput);
          }}
        >
          Encrypt
        </button>
      </div>
      <h1>{cText}</h1>
      <div>
        <h1>PlainText</h1>
        <input
          type="text"
          placeholder="PlainText"
          value={mDTextInput}
          onInput={(event) => setMDTextInput(event.target.value)}
        />
        <h1>Public/Private Key</h1>
        <div>
          <textarea
            value={keyDecryptText}
            onInput={(event) => setkeyDecryptText(event.target.value)}
          />
        </div>

        <button
          onClick={() => {
            onDecryptClick(mDTextInput);
          }}
        >
          Decrypt
        </button>
        <h1>{decryptText}</h1>
      </div>
    </div>
  );
}

export default Rsa;
