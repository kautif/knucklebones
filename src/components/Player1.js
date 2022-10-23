import React, {useState, useEffect} from 'react';
import $ from 'jquery';

export default function Player1 (props) {
    let {p1Turn, currentDice, p1ColumnA, p1ColumnB, p1ColumnC, p1Score, p2ColumnA, setP2ColumnA, p2ColumnB, p2ColumnC, setP1Score, setP2Score } = props.dice.diceState;
    let {setRandomVal} = props.dice;

    function scoreCheck (column) {
        console.log("scoreCheck");
        // score multipler x3
        if (((column[0] === column[1] && column[0] === column[2]) && column[0] !== undefined))  {
            setP1Score(prevScore => {
                return prevScore += (currentDice + currentDice + currentDice) * 3;
            })
            return;
        }

        // score multiplier x2
        if ((currentDice === column[0] && column[0] === column[1] && column[0] !== undefined) ||
            (currentDice === column[1] && column[1] === column[2] && column[1] !== undefined) ||
            (currentDice === column[0] && column[0] === column[2] && column[2] !== undefined) )  {
                setP1Score(prevScore => {
                    return prevScore += (currentDice + currentDice) * 2;
                })
                
                return;
        }

        // regular score
        if (column[0] !== column[1] !== column[2] && column[0] !== undefined) {
            setP1Score(prevScore => {
                return prevScore += currentDice;
            })
        }
    }


    // Oct 12th, 2022, 6:55 pm 
    // TODO: Count how many of a number are in the opponent's corresponding column
        // Depending on whether the count is 1, 2, or 3, remove those numbers and deduct their score accordingly.

    function negateScore () {
        // console.log("p2A: ", p2ColumnA);
        // console.log("p2B: ", p2ColumnB);
        // console.log("p2C: ", p2ColumnC);

        let removedVals;
        let keptVals;
        // Oct 13th, 2022 7:32 am
        // TODO: Remove matching values from dice array
        // TODO: Update opponent's column array to equal keptVals array
        // TODO: Delete old column and render new column
        // TODO: Reduce score based on number of matching values
        // for (let y = 0; y < p2ColumnA.length; y++) {
        //     if (p2ColumnA[y] === currentDice) {
        //         removedVals = p2ColumnA.filter((val, i) => {
        //             console.log("removed index: ", i);
        //             return val === currentDice;
        //         })

        //         keptVals = p2ColumnA.filter((val, i) => {
        //             // $('.column_A.player1 span')[p1ColumnA.length - 1].innerHTML = p1ColumnA[p1ColumnA.length - 1];
        //             return val !== currentDice;
        //         })
        //     }
        // }

        // console.log("removedVals: ", removedVals);
        // console.log("keptVals: ", keptVals);
    }

    // function updateColumn(column) {
        
    // }
    
    useEffect(() => {
        scoreCheck(p1ColumnA);
        // negateScore();
        // multiplesOf2(p1ColumnA);
        // console.log("column A useEffect: ", p2ColumnA);
    }, [p1ColumnA])

    useEffect(() => {
        scoreCheck(p1ColumnB);
        // console.log("column B useEffect");
        // multiplesOf2(p1ColumnB);
    }, [p1ColumnB])

    useEffect(() => {
        scoreCheck(p1ColumnC);
        // multiplesOf2(p1ColumnC);
    }, [p1ColumnC])

    return (
        <div className="knucklebones__p1">
            <img className="p1__pp" src="https://upload.wikimedia.org/wikipedia/en/8/8d/Zero-mmx.png" alt="player 1 image" />
            <h1>Player 1</h1>
            <h2 id="p1__score">{p1Score}</h2>
            <div className="p1__diceholder">
                {/* <Dice /> */}
                <span className="p1__diceholder__dice">{p1Turn && currentDice}</span>
                {!p1Turn && setRandomVal()}
            </div>
        </div>
    )
}