import Die from "./Die"

const DiceRow = ({ generateDieValue, diceNumberOf }) => {
    //each returnRowOfDie const is a freshly-calculated list of {diceNumberOf} <Die />
    function returnRowOfDice() {
        let row = []
        for (let index = 0; index < diceNumberOf; index++) {
            const die = <Die key={index} value={generateDieValue()} />
            row.push(die)
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
