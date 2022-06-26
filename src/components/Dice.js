import DiceRow from "./DiceRow"

const Dice = ({ generateDieValue, diceNumberOf, numberOfRows }) => {
    //diceRowValues is a list of {diceNumberOf} dice values in one row
    function returnAllRows() {
        const diceRow = <div className="dice-row">
            <DiceRow diceNumberOf={diceNumberOf} generateDieValue={generateDieValue} /></div>
        const allRows = []
        for (let index = 0; index < numberOfRows; index++) {
            allRows.push(diceRow)
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