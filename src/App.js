import { useState, useEffect } from 'react';
import './App.css';
import Die from "./components/Die"
import Dice from "./components/Dice"
import Hardcore from "./components/Hardcore"
import Difficulty from './components/Difficulty';
import Scratch from './components/Scratch';


function App() {
  const [diceRowValues, setDiceRowValues] = useState([]) //list of {diceNumberOf} dice values in one row
  const [diceNumberOf, setDiceNumberOf] = useState(3)
  const [hardcore, setHardcore] = useState(true)


  function generateDieValue() {
    return Math.ceil(Math.random() * 6)
  }

  function generateRowValues() { //returns a list of {diceNumberOf} dice values that will be mapped to one row
    const numbers = []
    for (let index = 0; index < diceNumberOf; index++) {
      numbers.push(generateDieValue()) // 
    }
    return numbers
  }

  //roll dice button, sets up the row of dice
  function generateRow() {
    setDiceRowValues(generateRowValues())
  }


  return (
    <div className="App">
      <h1>Iznet</h1>
      <div className='inputs'>
        <h2>Difficulty level:</h2>
        <Difficulty setDiceNumberOf={setDiceNumberOf} />
        <Hardcore hardcore={hardcore} setHardcore={setHardcore} diceRowValues={diceRowValues} />
      </div>
      <button onClick={generateRow}>Roll Dice</button>
      <Dice generateDieValue={generateDieValue} diceRowValues={diceRowValues} diceNumberOf={diceNumberOf} hardcore={hardcore} />

      <div className="log">
        <h3>log</h3>
        <p>diceNumberOf: {diceNumberOf}</p>
        <p>{"{dice}: " + diceRowValues}</p>
        <p>Hardcore Value: {hardcore}</p>
      </div>

    </div>
  );
}

export default App;