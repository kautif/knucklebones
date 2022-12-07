import React from 'react';
import DiceBoardPlayer from './DiceBoardPlayer';
import Winner from './Winner';

export default function DiceBoards () {
    return (
        <div className="knucklebones__diceboard__container">
            <DiceBoardPlayer player="2" />
            <Winner />
            <DiceBoardPlayer player="1"/>
        </div>
    )
}