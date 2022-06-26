import { useState, useEffect } from 'react';
import './App.css';
import Dice from "./components/Dice"
import Hardcore from "./components/Hardcore"
import Difficulty from './components/Difficulty';


function App() {
  const [diceNumberOf, setDiceNumberOf] = useState(3)
  const [hardcore, setHardcore] = useState(false)

  function generateDieValue() {
    return Math.ceil(Math.random() * 6)
  }

  function getDice() {
    if (hardcore === true) {
      return <Dice numberOfRows={diceNumberOf} generateDieValue={generateDieValue} diceNumberOf={diceNumberOf} />
    } else if (hardcore === false) {
      return <Dice numberOfRows={1} generateDieValue={generateDieValue} diceNumberOf={diceNumberOf} />
    } else {
      return <p>getDice() ERROR</p>
    }
  }

  function getDiceTest() {
    let rows = 1
    if (hardcore === true) {
      rows = diceNumberOf
      console.log("hardcore true")
    } else if (hardcore === false) {
      rows = 1
      console.log("hardcore false")
    } else {
      console.log("getDiceTest() error")
    }
    return <Dice numberOfRows={rows} generateDieValue={generateDieValue} diceNumberOf={diceNumberOf} />
  }


  return (
    <div className="App">
      <h1>Iznet</h1>
      <div className='inputs'>
        <h2>Difficulty level:</h2>
        <Difficulty setDiceNumberOf={setDiceNumberOf} />
        <Hardcore setHardcore={setHardcore} />
      </div>

      <button>Roll Dice (broken)</button>
      <div>{getDiceTest()}</div>

      <div className="log">
        <h3>LOGS</h3>
        <p>diceNumberOf: {diceNumberOf}</p>
        <p>Hardcore Value: {hardcore}</p>
      </div>

    </div>
  );
}

export default App;