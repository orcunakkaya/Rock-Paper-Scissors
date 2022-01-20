import React from 'react'
import Choise from './Choise';
import Resault from './Resault';
import { useSelector } from 'react-redux';

function Main() {
    const choise = useSelector((state) => state.game.userChoise);

    return (
        <div>
            {
                choise === null ?
                    <Choise />
                :
                    <Resault />
            }
            
        </div>
    )
}

export default Main
