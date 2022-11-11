import React, {useContext, useEffect} from 'react';
import BoardContext from '../BoardContext';

export default function Winner () {
    const { dice } = useContext(BoardContext);
    const { p1ColumnA, p1ColumnB, p1ColumnC, p1Turn, p1Score } = dice.p1Dice.diceState;
    const { p2ColumnA, p2ColumnB, p2ColumnC, p2Score } = dice.p2Dice.diceState;
    // const { checkWinner } = dice.p1Dice
    let p1AllVals = [];
    p1AllVals = [...p1ColumnA, ...p1ColumnB, ...p1ColumnC];
    let winner = "";
    let winScreen = ""

    function checkWinner () {
        if (p1Score > p2Score) {
            console.log("Player 1 Wins");
            winner = "Player 1";
        } else if (p2Score > p1Score) {
            console.log("Player 2 Wins");
            winner = "Player 2";
        } else {
            console.log("Tie");
            // return alert("Lame. It's a tie!");
        }
    }

    if (p1AllVals.length === 9) {
        checkWinner();
        winScreen = <div className="knucklebones__diceboards__winner__screen">
                        <h1 className="knucklebones__diceboards__winner__screen__player">{`${winner} wins`}</h1>
                    </div>
    }

    // console.log("winner: ", winner);
    return (
        <div className="knucklebones__diceboards__winner">
            {winner && winScreen}
        </div>
    )
}