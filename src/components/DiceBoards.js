import React, { useContext } from 'react';
import DiceBoardP1 from './DiceBoardP1';
import DiceBoardP2 from './DiceBoardP2';
import Winner from './Winner';
import BoardContext from '../BoardContext';

export default function DiceBoards () {
    const { dice } = useContext(BoardContext);
    const { currentDice } = dice;

    return (
        <div className="knucklebones__diceboard__container">
            {/* <DiceBoardP2 dice={props.dice.p2} /> 
            <DiceBoardP1 dice={props.dice.p2} player="2" />
            <Winner />
            <DiceBoardP1 dice={props.dice.p1} player="1" />
            */}
            <DiceBoardP1 player="2" />
            <Winner />
            <DiceBoardP1 player="1"/>
        </div>
    )
}