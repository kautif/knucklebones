import React from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';

export default function GameBoard () {
    return (
        <div className="board">
            <Player1 />
            <DiceBoards />
            <Player2 />
        </div>
    )
}