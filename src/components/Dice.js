import Die from "./Die"

const Dice = ({ diceRowValues, generateDieValue, diceNumberOf, hardcore }) => {
    //diceRowValues is a list of {diceNumberOf} dice values in one row

    //each return RowOfDie const is a list of {diceNumberOf} <Die />
    function returnRowOfDie() {
        return diceRowValues.map((dieValue, index) => (
            <Die key={index} value={generateDieValue()} />
        ))
    }

    function returnRowsList() {
        const rows = []
        for (let index = 0; index < diceNumberOf; index++) {
            rows.push(returnRowOfDie()) // 
        }
        return rows
    }

    console.log(returnRowsList())

    function returnAllRows() {
        if (hardcore === true) {
            return returnRowOfDie()
        } else {
            return returnRowsList().map((x) => x)
        }
    }
    return (
        <div>
            <div className="dice-elements">{returnAllRows()}</div>
        </div>
    )
}

export default Dice