import { useState } from "react";

function Monoalphabetic() {
  const [pText, setCtext] = useState("");
  return (
    <div>
      <h1>Plantext</h1>
      <input
        type="text"
        placeholder="Plantext"
        value={pText}
        onChange={(event) => {
          setCtext(event.target.value);
        }}
      />
      <h1>Key</h1>
      <input type="text" placeholder="Key" />
      <h1>Mod</h1>
      <input type="text" placeholder="Mod" />
      <div>
        <button>ANS</button>
        <h1>C text</h1>
      </div>
    </div>
  );
}

export default Monoalphabetic;
