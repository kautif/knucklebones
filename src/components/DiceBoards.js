import React from 'react';
import DiceBoardP1 from './DiceBoardP1';
import DiceBoardP2 from './DiceBoardP2';
import Winner from './Winner';

export default function DiceBoards () {
    return (
        <div className="knucklebones__diceboard__container">
            <DiceBoardP1 />
            <Winner />
            <DiceBoardP2 />
        </div>
    )
}