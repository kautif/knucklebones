import React, {useState} from 'react';
import DiceBoardSquare from './DiceBoardSquare';
import $ from 'jquery';

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
    p1Turn,
    setP1Turn } = props.dice.diceState;

// let [P1DiceArr, setP1DiceArr] = useState([])

console.log("initialize gb: ", p1Turn);

let P1DiceArr; 


// 9-19-22
    // When you click in Column A multiple times, it adds values to the array *** RESOLVED ***
    // Once you click in the dice holder, it changes the length of the array back to 1 *** RESOLVED ***

// 9-26-22
    // When any column is clicked, the same numbers are being added to all arrays *** RESOLVED ***
    // Need to make it so that it is recognized only when columns A, B or C are clicked *** RESOLVED ***

// 9-27-22
    // Keep track of who's turn it is *** RESOLVED ***
    // When it's a player's turn and a square is clicked, the number should fill in the next square in the selected column
    // Give P2's diceholder a dice
    // Alternate between P1's and P2's turn *** RESOLVED ***
        // Should make it so that it only switches dice for p1 once on their turn *** RESOLVED ***
        // Should make it so that it only switches dice for p2 once on their turn 
    // Squares should be arranged in such a way that player 1 cannot add dice to player 2's columns o rvice versa

function setDiceVal(e) {
    console.log("dbp1: ", p1Turn);
    if (e.target.classList.contains("column_A") && 
        e.target.classList.contains("player1") && 
        p1ColumnA.length < 3 && 
        p1Turn) {
        setP1ColumnA(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
    }

    if (p1ColumnA.length === 3) {
        // console.log("columnA: ", p1ColumnA);
    }

    if (e.target.classList.contains("column_B")
        && e.target.classList.contains("player1")
        && p1ColumnB.length < 3
        && p1Turn) {
        setP1ColumnB(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
        // console.log("column B", p1ColumnB);
    }

    if (p1ColumnB.length === 3) {
        // console.log("columnB: ", p1ColumnB);
    }

    if (e.target.classList.contains("column_C")
        && e.target.classList.contains("player1")
        && p1ColumnC.length < 3
        && p1Turn) {
        setP1ColumnC(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
        // console.log("column C", p1ColumnC);
    }

    if (p1ColumnA.length === 3) {
        // console.log("columnC: ", p1ColumnC);
    }

    P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
    console.log("P1DiceArr: ", P1DiceArr);
}
    return (
        <div className="knucklebones__diceboard__p1">
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="1" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="1" setDiceVal={setDiceVal}/>
        </div>
    )
}