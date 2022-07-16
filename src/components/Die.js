import React from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa';

const Die = (props) => {
    function face() {
        switch (props.value) {
            case 1:
                return (
                    <div><FaDiceOne /></div>
                );
            case 2:
                return (
                    <div><FaDiceTwo /></div>
                );
            case 3:
                return (
                    <div><FaDiceThree /></div>
                );
            case 4:
                return (
                    <div><FaDiceFour /></div>
                );
            case 5:
                return (
                    <div><FaDiceFive /></div>
                );
            case 6:
                return (
                    <div><FaDiceSix /></div>
                );
        }

    }

    return (
        <div className='face'>{face()}</div>
    )
}

export default Die