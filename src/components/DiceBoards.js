import React from 'react';
import DiceBoardP1 from './DiceBoardP1';
import DiceBoardP2 from './DiceBoardP2';
import Winner from './Winner';

export default function DiceBoards (props) {
    console.log("dice: ", props.dice);
    return (
        <div className="knucklebones__diceboard__container">
            <DiceBoardP2 />
            <Winner />
            <DiceBoardP1 dice={props.dice}/>
        </div>
    )
}