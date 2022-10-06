import React from 'react';
import DiceBoardSquare from './DiceBoardSquare';

export default function DiceBoardP2 (props) {
    let {currentDice, 
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
        setP1Roll } = props.dice.diceState;

    let {setRandomVal} = props.dice.setRandomVal;

    let P2DiceArr; 

    function setDiceVal(e) {
        // console.log("p1Turn: ", p1Turn);
        console.log("e: ", e.target.classList);
        if (e.target.classList.contains("column_A")
            && e.target.classList.contains("player2")
            && p2ColumnA.length < 3
            && !p1Turn
            ) {
            setP2ColumnA(prevColumn => {
                return [...prevColumn, currentDice]
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })

            // setRandomVal();
        }
    
        if (p2ColumnA.length === 3) {
            // console.log("columnA: ", p2ColumnA);
        }
    
        if (e.target.classList.contains("column_B") 
            && e.target.classList.contains("player2")
            && p2ColumnB.length < 3
            && !p1Turn
            ) {
            setP2ColumnB(prevColumn => {
                return [...prevColumn, currentDice]
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })

            // setRandomVal();
            // console.log("column B", p2ColumnB);
        }
    
        if (p2ColumnB.length === 3) {
            // console.log("columnB: ", p2ColumnB);
        }
    
        if (e.target.classList.contains("column_C")
            && e.target.classList.contains("player2")
            && p2ColumnC.length < 3
            && !p1Turn
            ) {
            setP2ColumnC(prevColumn => {
                return [...prevColumn, currentDice]
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })

            // setRandomVal();
            // console.log("column C", p2ColumnC);
        }
    
        if (p2ColumnA.length === 3) {
            // console.log("columnC: ", p2ColumnC);
        }
    
        P2DiceArr = [p2ColumnA, p2ColumnB, p2ColumnC];
        console.log("P2DiceArr: ", P2DiceArr);
    }

    return (
        <div className="knucklebones__diceboard__p2">
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
        </div>
    )
}