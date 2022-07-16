import React from 'react'

const Hardcore = ({ diceNumberOf, setRowsNumberOf }) => {
    return (
        <div className='hardcore'>
            <h3>Hardcore Mode</h3>
            <div className='hardcore-options'>
                <div>
                    <label htmlFor="hardcore">On</label>
                    <input
                        name="hardcore"
                        id='on'
                        type="radio"
                        value={diceNumberOf}
                        onClick={(event => setRowsNumberOf(event.target.value))} />
                </div>
                <div>
                    <label htmlFor="hardcore">Off</label>
                    <input
                        name="hardcore"
                        id='on'
                        type="radio"
                        value={1}
                        onChange={(event => setRowsNumberOf(event.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default Hardcore

// onClick={setHardcore(event => event.target.value)} 