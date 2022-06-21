import { useState } from 'react';
import './App.css';
import Die from "./components/Die"

function App() {
  const [dice, setDice] = useState([])
  const [diceNumberOf, setDiceNumberOf] = useState('')

  function generateDie() {
    return Math.ceil(Math.random() * 6);
  }

  function newDice() {
    const theDice = []
    for (let index = 0; index < diceNumberOf; index++) {
      theDice.push(generateDie())
    }
    return theDice
  }

  function rollDice() {
    setDice(newDice())
  }

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die} />
  ))


  return (
    <div className="App">
      <div className='inputs'>
        <p>Difficulty level:</p>
        <div>
          <div>
            <label htmlFor="one">One</label>
            <input type="radio" value={1} id='one' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="two">Two</label>
            <input type="radio" value={2} id='two' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="three">Three</label>
            <input type="radio" value={3} id='three' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="four">Four</label>
            <input type="radio" value={4} id='four' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
          <div>
            <label htmlFor="five">Five</label>
            <input type="radio" value={5} id='five' name='diceselect' onChange={event => { setDiceNumberOf(event.target.value) }} />
          </div>
        </div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <div className='dice-elements'>{diceElements}</div>
    </div>
  );
}

export default App;