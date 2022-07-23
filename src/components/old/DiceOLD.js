import DiceRow from "./DiceRow"

const Dice = ({ diceValues, setDiceValues, generateDieValue, diceNumberOf, numberOfRows }) => {
    function returnAllRows() {
        const diceRows = <div className="dice-row">
            <DiceRow diceValues={diceValues} setDiceValues={setDiceValues} diceNumberOf={diceNumberOf} generateDieValue={generateDieValue} /></div>
        const allRows = []
        for (let index = 0; index < numberOfRows; index++) {
            allRows.push(diceRows)
        }
        return allRows
    }

    return (
        <div className="dice">
            {returnAllRows()}
        </div>
    )
}

export default Dice

{/* <div className="dice-elements">{returnAllRows()}</div> */ }