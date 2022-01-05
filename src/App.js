import React, { useState } from "react";
import "./App.css";
import { bootcampers } from "./bootcampers.js";

function App() {
  const [bootcamperIndex, setBootcamperIndex] = useState(0);

  function handleClick() {
    let randomIndex = Math.floor(
      Math.random() * (bootcampers.length - 1 - 0 + 1) + 0
    );
    console.log(randomIndex);
    setBootcamperIndex(randomIndex);
  }

  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
