import React, {useState} from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';

export default function GameBoard () {

    const [currentDice, setCurrentDice] = useState(0);
    const [columnA, setColumnA] = useState([]);
    const [columnB, setColumnB] = useState([]);
    const [columnC, setColumnC] = useState([]);

    let randomVal;

    let setRandomVal = () => {
        randomVal = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomVal); 
    }

    let dice = {
        diceState: {
            currentDice,
            setCurrentDice,
            columnA,
            setColumnA,
            columnB,
            setColumnB,
            columnC,
            setColumnC
        },
        setRandomVal
    }

    return (
        <div className="board">
            <Player1 dice={dice} />
            <DiceBoards dice={dice} />
            <Player2 dice={dice} />
        </div>
    )
}