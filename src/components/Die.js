import React from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa';

const Die = (props) => {
    function face() {
        switch (props.value) {
            case 1:
                return (
                    <><FaDiceOne /></>
                );
            case 2:
                return (
                    <><FaDiceTwo /></>
                );
            case 3:
                return (
                    <><FaDiceThree /></>
                );
            case 4:
                return (
                    <><FaDiceFour /></>
                );
            case 5:
                return (
                    <><FaDiceFive /></>
                );
            case 6:
                return (
                    <><FaDiceSix /></>
                );
        }

    }

    return (
        <div className='face'>{face()}</div>
    )
}

export default Die