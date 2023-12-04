import React, { useState } from 'react';
import './App.css';

function generateLottoNumbers() {
  let numbers = [];
  while (numbers.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}


function App() {
  const [numbers, setNumbers] = useState([]);
  const handleGenerate = () => {
    setNumbers(generateLottoNumbers());
  };
  return (
    <div className="App">
      <h1>Dockerfile.site</h1>
      <header className="App-header">
        <h1>Lotto Number Generator</h1>
        <button onClick={handleGenerate}>Generate Numbers</button>
        <div>
          {numbers.sort((a,b)=>a-b).map((number, index) => (
            <span key={index}>{number} </span>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
