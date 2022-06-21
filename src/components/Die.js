import React from 'react'

const Die = (props) => {
    function face() {
        switch (props.value) {
            case 1:
                return (
                    <div className='die-face face-one'>
                        <span className='dot'></span>
                    </div>
                );
            case 2:
                return (
                    <div className='die-face face-two'>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </div>
                );
            case 3:
                return (
                    <div className='die-face face-three'>
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </div>
                );
            case 4:
                return (
                    <div className='die-face face-four'>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className='die-face face-five'>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='divider'>
                            <span className='dot'></span></div>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className='die-face face-six'>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='divider'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>

                    </div>
                );
        }

    }

    return (
        <div className='face'>{face()}</div>
    )
}

export default Die