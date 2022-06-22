import Die from "./Die"

const Dice = ({ dice, diceNumberOf }) => {
    const myList = [1, 2, 3]
    const diceElements = dice.map((die, index) => (
        <span>
            <Die key={index} value={die} />
        </span>
    ))

    const something = <div className="dice-elements">{diceElements}</div>

    return (
        <div className="dice-elements">{diceElements}</div>
    )
}

export default Dice