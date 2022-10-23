import React, {useState, useEffect} from 'react';
import DiceBoardSquare from './DiceBoardSquare';
import $ from 'jquery';
import Column from './Column';

export default function DiceBoardP1 (props) {
let selected = false;
let {currentDice, 
    setCurrentDice, 
    p1ColumnA, 
    setP1ColumnA, 
    p1ColumnB, 
    setP1ColumnB, 
    p1ColumnC, 
    setP1ColumnC,
    p1DiceArr,
    setP1DiceArr,
    p2ColumnA,
    setP2ColumnA,
    p2ColumnB,
    setP2ColumnB,
    p2ColumnC,
    setP2ColumnC,
    p1Turn,
    setP1Turn,
    p1Roll,
    setP1Roll,
    p1Score,
    setP1Score,
    p2Score,
    setP2Score } = props.dice.diceState;

// let {multiplierCheck} = props.dice.multiplierCheck;

function removeMatchingVals (column, columnClass, setColumn) {
    let keptVals = [];
    let removedVals = [];
    if (column.includes(currentDice)) {
        for (let i = 0; i < column.length; i++) {
            $(`.${columnClass} span`)[i].innerHTML = "";
        }
    }

    for (let k = 0; k < column.length; k++) {
        if (currentDice !== column[k]) {
                keptVals.push(column[k]);
                $(`.${columnClass} span`)[keptVals.length - 1].innerHTML = keptVals[keptVals.length - 1];
            } else {
                removedVals.push(column[k]);
            }
    }

    setColumn((prevCol) => {
        prevCol = keptVals;
        return keptVals;
    })

    if (removedVals.length === 1) {
        setP2Score(prevScore => {
            return prevScore = prevScore - currentDice;
        })
    }

    if (removedVals.length === 2) {
        setP2Score(prevScore => {
            return prevScore = prevScore - ((currentDice * 2) * 2);
        })
    }

    if (removedVals.length === 3) {
        setP2Score(prevScore => {
            return prevScore = prevScore - ((currentDice * 3) * 3);
        })
    }
}

function setDiceVal(e) {
    // TODO: Redundant. Consolidate.
    if (e.target.classList.contains("column_A") && 
        e.target.classList.contains("player1") && 
        p1ColumnA.length < 3 
        && p1Turn
         ) {

        removeMatchingVals(p2ColumnA, 'player2.column_A', setP2ColumnA);

        setP1ColumnA(prevColumn => {
            if (prevColumn !== undefined) {
                return [...prevColumn, currentDice];
            }
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        setP1DiceArr(prevDice => {
            return [...p1ColumnA, ...p1ColumnB, ...p1ColumnC]
        })

        // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC]; 

        // props.dice.setRandomVal();
    }

    if (p1ColumnA.length === 3) {
        // console.log("columnA: ", p1ColumnA);
    }

    if (e.target.classList.contains("column_B")
        && e.target.classList.contains("player1")
        && p1ColumnB.length < 3
        && p1Turn) {

        removeMatchingVals(p2ColumnB, 'player2.column_B', setP2ColumnB);

        setP1ColumnB(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        setP1DiceArr(prevDice => {
            return [...p1ColumnA, ...p1ColumnB, ...p1ColumnC]
        })

        // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
        // props.dice.setRandomVal();
        // console.log("column B", p1ColumnB);
    }

    if (p1ColumnB.length === 3) {
        // console.log("columnB: ", p1ColumnB);
    }

    if (e.target.classList.contains("column_C")
        && e.target.classList.contains("player1")
        && p1ColumnC.length < 3
        && p1Turn
        ) {

        removeMatchingVals(p2ColumnC, 'player2.column_C', setP2ColumnC);
        
        setP1ColumnC(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        setP1DiceArr(prevDice => {
            return [...p1ColumnA, ...p1ColumnB, ...p1ColumnC]
        })

        // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
        // props.dice.setRandomVal();
        // console.log("column C", p1ColumnC);
    }

    if (p1ColumnA.length === 3) {
        // console.log("columnC: ", p1ColumnC);
    }

}

// TODO: Add removeMatchingVals function to player 2s side. Keep testing.
    // Sometimes, whether matching or not, score is added to player 2's when there should either be no difference or a deduction
    // 10/19/22 -- 7:53 pm
/* function removeMatchingVals(column, columnClass, setColumn) {
    let keptVals = [];
    let removedVals = [];
    // 10/15/22 2:33 pm: Removes matching values
        // When rendering, only removes singular values
            // If user has two 1s, only removes one of them

        if (column.includes(currentDice)) {
            for (let i = 0; i < column.length; i++) {
                $(`.${columnClass} span`)[i].innerHTML = "";
            }
        }

        for (let k = 0; k < column.length; k++) {
            if (currentDice !== column[k]) {
                    keptVals.push(column[k]);
                    $(`.${columnClass} span`)[keptVals.length - 1].innerHTML = keptVals[keptVals.length - 1];
                } else {
                    removedVals.push(column[k]);
                }
        }
        setColumn(prevCol => {
            prevCol = keptVals;
            return keptVals;
        })

        if (removedVals.length === 1) {
            setP2Score(prevScore => {
                console.log("prevScore1 CD: ", currentDice);
                console.log("prevScore1: ", prevScore);
                return prevScore = prevScore - currentDice;
            })
        }

        if (removedVals.length === 2) {
            setP2Score(prevScore => {
                console.log("prevScore2 CD: ", currentDice);
                console.log("prevScore2: ", prevScore);
                return prevScore = prevScore - ((currentDice * 2) * 2);
            })
        }

        if (removedVals.length === 3) {
            setP2Score(prevScore => {
                console.log("prevScore3 CD: ", currentDice);
                console.log("prevScore3: ", prevScore);
                return prevScore = prevScore - ((currentDice * 3) * 3);
            })
        }
        console.log("currentDice: ", currentDice);
        console.log("p2Score: ", p2Score);
} */

useEffect(() => {
    // removeMatchingVals(p2ColumnA, 'column_A.player2', setP2ColumnA)
}, [])

useEffect(() => {
    // removeMatchingVals(p2ColumnB, 'column_B.player2', setP2ColumnB)
}, [])

useEffect(() => {
    // removeMatchingVals(p2ColumnC, 'column_C.player2', setP2ColumnC)
}, [])

useEffect(() => {
    // TODO: Clicking on squares to render numbers is not consistent. Use another method or element to trigger
    if (p1ColumnA[0] !== undefined) {
        $('.column_A.player1 span')[p1ColumnA.length - 1].innerHTML = p1ColumnA[p1ColumnA.length - 1];
        // console.log(p1ColumnA[0]);
    }

    if (p1ColumnB[0] !== undefined) {
        $('.column_B.player1 span')[p1ColumnB.length - 1].innerHTML = p1ColumnB[p1ColumnB.length - 1];
        // console.log(p1ColumnB[0]);
    }

    if (p1ColumnC[0] !== undefined) {
        $('.column_C.player1 span')[p1ColumnC.length - 1].innerHTML = p1ColumnC[p1ColumnC.length - 1];
        // console.log(p1ColumnA[0]);
    }
}, [p1ColumnA, p1ColumnB, p1ColumnC])

    return (
        <div>
          <Column column="A" player="1" />
          <Column column="B" player="1" />
          <Column column="C" player="1" />


           {/*
        <div className="knucklebones__diceboard__p1">
             TODO: Redundant. Reduce to 1/3 of the components 
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
        </div> */}
        </div>
    )
}