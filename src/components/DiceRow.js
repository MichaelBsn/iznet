import Die from "./Die"

const DiceRow = ({ diceValues, setDiceValues, generateDieValue, diceNumberOf }) => {
    //each returnRowOfDie const is a freshly-calculated list of {diceNumberOf} <Die />
    function generateDie() {
        return Math.ceil(Math.random() * 6)
    }

    function returnRowOfDice() {
        const row = [] //list of multiple <Die />, 
        const dieValues = []
        for (let index = 0; index < diceNumberOf; index++) {
            const dieValue = generateDie() //generating a number for the die
            console.log(dieValue)
            const die = <Die key={index} value={dieValue} />
            row.push(die)
            dieValues.push(dieValue)
            setDiceValues([...diceValues, dieValue])
        }
        return row
    }

    return (
        <>
            {returnRowOfDice()}
        </>
    )
}

export default DiceRow
