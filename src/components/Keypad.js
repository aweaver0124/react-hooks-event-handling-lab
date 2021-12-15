import React from 'react'

function Keypad(){
    return (
        <input 
            type="password"
            onChange={handleChange}
        />
    )
}

function handleChange(){
    console.log('Entering password...')
}

export default Keypad