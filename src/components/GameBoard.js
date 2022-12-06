import React from 'react';
import DiceBoards from './DiceBoards';
import Player from './Player';
import { BoardProvider } from '../BoardContext';
import Nav from './Nav';

export default function GameBoard () {
    return (
        <div className="board">
            <BoardProvider>
                <Nav />
                <Player player="1"/>
                <DiceBoards  />
                <div className="board__mobile-warning">
                    <p>On mobile, dice read from left to right instead of top to bottom</p>
                </div>
                <Player player="2"/>
            </BoardProvider>
        </div>
    )
}