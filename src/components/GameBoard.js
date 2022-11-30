import React from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';
import { BoardProvider } from '../BoardContext';
import Nav from './Nav';

export default function GameBoard () {
    return (
        <div className="board">
            <BoardProvider>
                <Nav />
                <Player1 />
                <DiceBoards  />
                <div className="board__mobile-warning">
                    <p>On mobile, dice read from left to right instead of top to bottom</p>
                </div>
                <Player2 />
            </BoardProvider>
        </div>
    )
}