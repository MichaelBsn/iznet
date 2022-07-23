import { useState, useEffect } from 'react';
import './App.css';
import Die from "./components/Die"



function App() {
  const [diceValues, setDiceValues] = useState([]) //diceValues is a list of the values of the dice
  const [dice, setDice] = useState([]) //{dice} is a list of <Die /> components


  useEffect(() => {
    getDiceValues()
  }, [])


  //generates number between 1 and 6. Made into a function for calculating the value of <Die />
  function generateDie() {
    return Math.ceil(Math.random() * 6)
  }

  function getDiceValues() {
    const row = [] //list of multiple <Die />, 
    const dieValues = []
    for (let index = 0; index < 25; index++) {
      const dieValue = generateDie() //generating a number for the die
      dieValues.push(dieValue)
      const die = <Die key={index} value={dieValue} /> //creating the <Die />
      row.push(die)

    }
    setDiceValues(dieValues)
    setDice(row) // updating the state of list {dice}
  }


  function handleButton() {
    console.log('button clicked')
    getDiceValues()
    checkRoot()
    console.log(dice)
  }


  function checkRoot() {
    for (const num of diceValues) {
      console.log(num)
      const root = Math.sqrt(num)
      const isRoot = Number.isInteger(root)
      if (isRoot === true) {
        console.log("its an integer")
      }
    }
  }




  return (
    <div className="App">
      <header>
        <h1>Dice Game</h1>
        <p>Match all the dice to win!!!!</p>
      </header>

      <div className='dice-container'>
        {dice}
      </div>
      <div className='inputs'>
        <button className='dice-btn' onClick={handleButton}>Roll Dice</button>
      </div>


      <div className="log">
        <h3>DEBUGGING LOGS</h3>
        <p>diceValues: {diceValues}</p>
      </div>
    </div>
  );
}

export default App;

