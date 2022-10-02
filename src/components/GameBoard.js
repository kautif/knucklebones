import React, {useState} from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';

export default function GameBoard () {

    const [currentDice, setCurrentDice] = useState(0);
    const [p1ColumnA, setP1ColumnA] = useState([]);
    const [p1ColumnB, setP1ColumnB] = useState([]);
    const [p1ColumnC, setP1ColumnC] = useState([]);
    const [p2ColumnA, setP2ColumnA] = useState([]);
    const [p2ColumnB, setP2ColumnB] = useState([]);
    const [p2ColumnC, setP2ColumnC] = useState([]);
    const [p1Turn, setP1Turn] = useState(true);

    let randomVal;

    let setRandomVal = () => {
        randomVal = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomVal);
        // setP1Turn(prevTurn => !prevTurn); 
    }

    let p1Dice = {
        diceState: {
            currentDice,
            setCurrentDice,
            p1ColumnA,
            setP1ColumnA,
            p1ColumnB,
            setP1ColumnB,
            p1ColumnC,
            setP1ColumnC,
            p1Turn,
            setP1Turn
        },
        setRandomVal
    }

    let p2Dice = {
        diceState: {
            currentDice,
            setCurrentDice,
            p2ColumnA,
            setP2ColumnA,
            p2ColumnB,
            setP2ColumnB,
            p2ColumnC,
            setP2ColumnC,
            p1Turn,
            setP1Turn
        },
        setRandomVal
    }

    return (
        <div className="board">
            <Player1 dice={p1Dice} />
            <DiceBoards dice={{p1: p1Dice, p2: p2Dice}} />
            <Player2 dice={p2Dice} />
        </div>
    )
}