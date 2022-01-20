import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
    const score = useSelector((state) => state.game.score);

    return (
        <div id='header'>
            <div className='header'>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
            </div>
            <div className='score'>
                <div className='score__text'>
                    SCORE
                </div>
                <div className='score__number'>
                    {score}
                </div>
            </div>
        </div>
    )
}

export default Header
