import React from 'react'

const Difficulty = ({ setDiceNumberOf }) => {
    return (
        <div className='difficulty'>
            <h3>DIFFICULTY</h3>
            <div>
                <label htmlFor="one">Very Easy(1)</label>
                <input
                    type="radio"
                    value={1}
                    id='one'
                    name='diceselect'
                    onClick={event => { setDiceNumberOf(event.target.value) }} />
            </div>
            <div>
                <label htmlFor="two">Easy(2)</label>
                <input
                    type="radio"
                    value={2}
                    id='two'
                    name='diceselect'
                    onClick={event => { setDiceNumberOf(event.target.value) }} />
            </div>
            <div>
                <label htmlFor="three">Normal(3)</label>
                <input
                    type="radio"
                    value={3}
                    id='three'
                    name='diceselect'
                    onClick={event => { setDiceNumberOf(event.target.value) }} />
            </div>
            <div>
                <label htmlFor="four">Hard(4)</label>
                <input
                    type="radio"
                    value={4}
                    id='four'
                    name='diceselect'
                    onClick={event => { setDiceNumberOf(event.target.value) }} />
            </div>
            <div>
                <label htmlFor="five">Very Hard(5)</label>
                <input
                    type="radio"
                    value={5}
                    id='five'
                    name='diceselect'
                    onClick={event => { setDiceNumberOf(event.target.value) }} />
            </div>
        </div>
    )
}

export default Difficulty