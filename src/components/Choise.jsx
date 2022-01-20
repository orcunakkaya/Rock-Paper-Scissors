import React from 'react'
import bg from '../Images/bg-triangle.svg';
import paper from '../Images/icon-paper.svg';
import rock from '../Images/icon-rock.svg';
import scissors from '../Images/icon-scissors.svg';
import { useDispatch } from 'react-redux';
import { setChoise, setRandomChoise, isMatch } from '../redux/gameSlice.js';

function Choise() {
    let dispatch = useDispatch();
    const randomChoise = [paper, rock, scissors] 

    const handleClick = (choise) => {
        dispatch(setChoise(choise))
        let random = Math.floor(Math.random() * 3)
        dispatch(setRandomChoise(randomChoise[random]))
       
    }

    return (
        <div className='choise'>
            <img src={bg} alt='bg' className='bg' />
            <button className='paper-button' onClick={() => handleClick({choise: paper, color: "paper"})}>
                <img src={paper} alt='paper'/>
            </button>
            <button className='rock-button' onClick={() => handleClick({choise: rock, color: "rock"})}>
                <img src={rock} alt='rock'/>
            </button>
            <button className='scissors-button' onClick={() => handleClick({choise: scissors, color: "scissors"})}>
                <img src={scissors} alt='scissors' />
            </button>
        </div>
    )
}

export default Choise
