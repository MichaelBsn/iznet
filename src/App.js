import { useState } from 'react';
import './App.css';
import Die from "./components/Die"
import Dice from "./components/Dice"


function App() {
  const [dice, setDice] = useState([]) //dice is a list of numbers
  const [diceNumberOf, setDiceNumberOf] = useState(5)
  const [hardcore, setHardcore] = useState(false)

  function generateRow() {
    const numbers = [] //list of {diceNumberOf} dice values in one row
    if (hardcore === true) {
      for (let index = 0; index < diceNumberOf * diceNumberOf; index++) {
        numbers.push(Math.ceil(Math.random() * 6)) // 
      }
      return numbers
    } else {
      for (let index = 0; index < diceNumberOf; index++) {
        numbers.push(Math.ceil(Math.random() * 6)) // 
      }
      return numbers
    }

  }
  //roll dice button
  function drawDice() {
    setDice(generateRow())
  }

  return (
    <div className="App">
      <h1>Iznet</h1>
      <div className='inputs'>
        <p>Difficulty level:</p>
        <div className='difficulty'>
          <div>
            <label htmlFor="one">Very Easy(1)</label>
            <input type="radio" value={1} id='one' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="two">Easy(2)</label>
            <input type="radio" value={2} id='two' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="three">Normal(3)</label>
            <input type="radio" value={3} id='three' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="four">Hard(4)</label>
            <input type="radio" value={4} id='four' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="five">Very Hard(5)</label>
            <input type="radio" value={5} id='five' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
        </div>
        <div className='hardcore'>
          <label htmlFor="hardcore">Hardcore Mode</label>
          <input name="hardcore" type="checkbox" value={true} onChange={event => { setHardcore(event.target.value) }} />
        </div>
      </div>
      <button onClick={drawDice}>Roll Dice</button>
      <Dice dice={dice} diceNumberOf={diceNumberOf} />


    </div>
  );
}

export default App;