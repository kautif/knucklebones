import React from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';
import { BoardProvider } from '../BoardContext';
import $ from 'jquery';
import Nav from './Nav';

export default function GameBoard () {
    return (
        <div className="board">
            <BoardProvider>
                <Nav />
                <Player1 />
                <DiceBoards  />
                <Player2 />
            </BoardProvider>
        </div>
    )
}