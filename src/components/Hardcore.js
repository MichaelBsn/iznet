import React from 'react'

const Hardcore = ({ diceRowValues, hardcore, setHardcore }) => {
    return (
        <div className='hardcore'>
            <h2>Hardcore Mode</h2>


            <div>
                <label htmlFor="hardcore">On</label>
                <input
                    name="hardcore"
                    id='on'
                    type="radio"
                    value={true}
                    onChange={event => { setHardcore(event.target.value) }}
                />
            </div>
            <div>
                <label htmlFor="hardcore">Off</label>
                <input
                    name="hardcore"
                    id='off'
                    type="radio"
                    value={false}
                    onChange={event => { setHardcore(event.target.value) }}
                />
            </div>
        </div>
    )
}

export default Hardcore

// onClick={setHardcore(event => event.target.value)} 