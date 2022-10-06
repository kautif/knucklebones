import React, {useState, useEffect} from 'react';
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
    setP1Turn,
    p1Roll,
    setP1Roll } = props.dice.diceState;

let P1DiceArr = [];

function setDiceVal(e) {
    if (e.target.classList.contains("column_A") && 
        e.target.classList.contains("player1") && 
        p1ColumnA.length < 3 
        && p1Turn
         ) {

        setP1ColumnA(prevColumn => {
            if (prevColumn !== undefined) {
                return [...prevColumn, currentDice];
            }
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC]; 

        // props.dice.setRandomVal();
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

        P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
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
        setP1ColumnC(prevColumn => {
            return [...prevColumn, currentDice]
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
        // props.dice.setRandomVal();
        // console.log("column C", p1ColumnC);
    }

    if (p1ColumnA.length === 3) {
        // console.log("columnC: ", p1ColumnC);
    }

}

useEffect(() => {
    if (p1ColumnA[0] !== undefined) {
        $('.column_A.player1 h2')[p1ColumnA.length - 1].innerHTML = p1ColumnA[p1ColumnA.length - 1];
        // console.log(p1ColumnA[0]);
    }

    if (p1ColumnB[0] !== undefined) {
        $('.column_B.player1 h2')[p1ColumnB.length - 1].innerHTML = p1ColumnB[p1ColumnB.length - 1];
        // console.log(p1ColumnB[0]);
    }

    if (p1ColumnC[0] !== undefined) {
        $('.column_C.player1 h2')[p1ColumnC.length - 1].innerHTML = p1ColumnC[p1ColumnC.length - 1];
        // console.log(p1ColumnA[0]);
    }
}, [p1ColumnA, p1ColumnB, p1ColumnC])

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