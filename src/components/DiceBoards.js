import React from 'react';
import DiceBoardP1 from './DiceBoardP1';
import Winner from './Winner';

export default function DiceBoards () {
    return (
        <div className="knucklebones__diceboard__container">
            <DiceBoardP1 player="2" />
            <Winner />
            <DiceBoardP1 player="1"/>
        </div>
    )
}