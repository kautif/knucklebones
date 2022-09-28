import React, {useState} from 'react';
import DiceBoardSquare from './DiceBoardSquare';
import $ from 'jquery';

export default function DiceBoardP1 (props) {

let selected = false;
let {currentDice, 
    setCurrentDice, 
    columnA, 
    setColumnA, 
    columnB, 
    setColumnB, 
    columnC, 
    setColumnC,
    p1Turn,
    setP1Turn } = props.dice.diceState;

// let [P1DiceArr, setP1DiceArr] = useState([])

let P1DiceArr; 


// 9-19-22
    // When you click in Column A multiple times, it adds values to the array
    // Once you click in the dice holder, it changes the length of the array back to 1 *** RESOLVED ***
    // Maybe you need to save the array and copy it over before the user can click the diceholder

// 9-26-22
    // When any column is clicked, the same numbers are being added to all arrays *** RESOLVED ***
    // Need to make it so that it is recognized only when columns A, B or C are clicked *** RESOLVED ***

// 9-27-22
    // Keep track of who's turn it is *** RESOLVED ***
    // When it's a player's turn and a square is clicked, the number should fill in the next square in the selected column
    // Give P2's diceholder a dice
    // Alternate between P1's and P2's turn
    // Squares should be arranged in such a way that player 1 cannot add dice to player 2's columns o rvice versa

function setDiceVal(e) {
    console.log("p1Turn: ", p1Turn);
    if (e.target.classList.contains("column_A") 
    && columnA.length < 3
    && p1Turn) {
        setColumnA(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
    }

    if (columnA.length === 3) {
        console.log("columnA: ", columnA);
    }

    if (e.target.classList.contains("column_B") 
    && columnB.length < 3
    && p1Turn) {
        setColumnB(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
        console.log("column B", columnB);
    }

    if (columnB.length === 3) {
        console.log("columnB: ", columnB);
    }

    if (e.target.classList.contains("column_C") 
    && columnC.length < 3
    && p1Turn) {
        setColumnC(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })
        console.log("column C", columnC);
    }

    if (columnA.length === 3) {
        console.log("columnC: ", columnC);
    }

    P1DiceArr = [columnA, columnB, columnC];
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