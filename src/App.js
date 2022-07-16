import { useState, useEffect } from 'react';
import './App.css';
import Dice from "./components/Dice"
import Hardcore from "./components/Hardcore"
import Difficulty from './components/Difficulty';


function App() {
  const [diceNumberOf, setDiceNumberOf] = useState(10) //this is the number of dice in ONE ROW
  const [rowsNumberOf, setRowsNumberOf] = useState(5)
  const [diceValues, setDiceValues] = useState([])


  //generates number between 1 and 6. Made into a function for calculating the value of <Die />
  function generateDieValue() {
    return Math.ceil(Math.random() * 6)
  }
  function processDie() {
    return
  }


  function handleButton() {
    console.log('button clicked')
    setRowsNumberOf(Math.ceil(Math.random() * 6))
  }

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <p>Match all the dice to win</p>
      <div className='inputs'>

        <button onClick={handleButton}>Roll Dice</button>
      </div>

      <Dice diceValues={diceValues} setDiceValues={setDiceValues} numberOfRows={rowsNumberOf} generateDieValue={generateDieValue} diceNumberOf={diceNumberOf} />

      <div className="log">
        <h3>LOGS</h3>

        <p>diceNumberOf: {diceNumberOf}</p>
        <p>rowsNumberOf: {rowsNumberOf}</p>
      </div>

    </div>
  );
}

export default App;

{/* <Difficulty setDiceNumberOf={setDiceNumberOf} />
<Hardcore diceNumberOf={diceNumberOf} setRowsNumberOf={setRowsNumberOf} /> */}

{/* <Dice numberOfRows={rowsNumberOf} generateDieValue={generateDieValue} diceNumberOf={diceNumberOf} /> */ }