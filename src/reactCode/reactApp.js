import React, { useState } from "react";
import "./App.css";

function App() {
  const [passwordLenght, setPasswordLenght] = useState(0);
  const [password, setPassword] = useState("");
  const [includeLetters, setIncludeLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const useLengthHandler = (event) => {
    const parsValue = parseInt(event.target.value);
    if (!isNaN(parsValue)) {
      setPasswordLenght(parsValue);
    }
  };

  const generateHandler = () => {
    const numbers = "1234567890";
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    const symbols = "!@#$%^&*()";

    let validChars = "";

    if (includeLetters) {
      validChars += letters;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = "";

    for (let i = 0; i < passwordLenght; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }
    setPassword(generatedPassword);
  };

  const useLettersHandler = () => {
    setIncludeLetters(!includeLetters);
  };

  const useNumbersHandler = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const useSymbolsHandler = () => {
    setIncludeSymbols(!includeSymbols);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div>
        <label>Enter Length</label>
        <input onInput={useLengthHandler} />
      </div>

      <div>
        <label>Use Letters</label>
        <input onChange={useLettersHandler} type="checkbox" />
      </div>

      <div>
        <label>Use Numbers</label>
        <input onChange={useNumbersHandler} type="checkbox" />
      </div>

      <div>
        <label>Use Symbols</label>
        <input onChange={useSymbolsHandler} type="checkbox" />
      </div>

      <div>
        <button
          disabled={
            !(
              passwordLenght &&
              (includeLetters || includeNumbers || includeSymbols)
            )
          }
          onClick={generateHandler}
        >
          Generate
        </button>
      </div>

      <div>
        <label>Your Password</label>
        <input readOnly value={password} />
      </div>
    </div>
  );
}

export default App;
