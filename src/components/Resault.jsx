import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { isMatch, resetGame } from '../redux/gameSlice.js';
import { useDispatch } from 'react-redux'
function Resault() {
    let dispatch = useDispatch();
    const choise = useSelector((state) => state.game.userChoise)
    const computerChoise = useSelector((state) => state.game.computerChoise);
    const match = useSelector((state) => state.game.match);
    const color = useSelector((state) => state.game.buttonColor)
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const timer = counter > 0 &&
            setInterval(() => {
                setCounter(counter - 1);
                handleMatch()
            }, 1000)
        
        return ()=> clearInterval(timer);
    }, [counter])

    const handleMatch = () => {
        if(counter === 1){
            dispatch(isMatch());
        }
    }

    const handleClick = () => {
        dispatch(resetGame());
    }

    return (
        <div id='result'>
            <div className='you__picked'>
                <div className='picked-text'>YOU PICKED</div>
                <div className={`picked-img picked-${color} ${match === "YOU WON" && "won"} ${match === "DRAW" && "won"}`}>
                    <img alt='you_picked' src={choise} />
                </div>
            </div>
            {
                counter === 0 && (
                    <div className='play-again-container'>
                        <div>{match}</div>
                        <button onClick={handleClick}>PLAY AGAIN</button>
                    </div>
                ) 
            }
            <div className='house__container'>
                <div className='picked-text'>THE HOUSE PICKED</div>
                {
                    counter === 0 ?
                        <div className="house__picked">
                            <div className={`picked-img picked-${computerChoise[1]} ${match === "YOU LOSE" && "won"} ${match === "DRAW" && "won"}`}>
                                <img alt='house__picked' src={computerChoise[0]} />
                            </div>
                        </div>
                    :
                        <div className='house__counter'>
                            {counter}
                        </div>
                }
            </div>
        </div>
    )
}

export default Resault;
