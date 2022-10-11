import React, {useState, useEffect} from 'react';
import DiceBoards from './DiceBoards';
import Player1 from './Player1';
import Player2 from './Player2';
import $ from 'jquery';

export default function GameBoard () {

    const [currentDice, setCurrentDice] = useState(0);

    const [p1DiceArr, setP1DiceArr] = useState([]);
    const [p1ColumnA, setP1ColumnA] = useState([]);
    const [p1ColumnB, setP1ColumnB] = useState([]);
    const [p1ColumnC, setP1ColumnC] = useState([]);

    const [p2DiceArr, setP2DiceArr] = useState([]);
    const [p2ColumnA, setP2ColumnA] = useState([]);
    const [p2ColumnB, setP2ColumnB] = useState([]);
    const [p2ColumnC, setP2ColumnC] = useState([]);
    
    const [p1Turn, setP1Turn] = useState(true);
    const [p1Roll, setP1Roll] = useState(true);

    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);

    let randomVal;

    let setRandomVal = () => {
        randomVal = Math.floor(Math.random() * 6) + 1;
        // setCurrentDice(1);
        setCurrentDice(randomVal);
    }
 
    // let multiplierCheck = (playerArr) => {
    //     for (let i = 0; i < playerArr.length; i++) {
    //         for (let k = 0; k < playerArr[i].length; k++) {
    //             if (currentDice !== playerArr[i][k]) {
    //                 setP1Score(prevScore => {
    //                     console.log("prevScore: ", prevScore);
    //                     return prevScore += currentDice;
    //                 })
    //             }
    //         }
    //     }
    //     // console.log("P1Score: ", p1Score);
    // }

    let eliminationCheck = (p1Arr, p2Arr) => {
        for (let i = 0; i < p1Arr.length; i++) {
            for (let k = 0; k < p1Arr[i].length; k++) {

            }
        }
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
            p1DiceArr,
            setP1DiceArr,
            p1Turn,
            setP1Turn,
            p1Roll,
            setP1Roll,
            p1Score,
            setP1Score
        },
        setRandomVal
        // multiplierCheck
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
            setP1Turn,
            p1Roll,
            setP1Roll
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