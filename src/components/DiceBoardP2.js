// TODO: In GameBoard, instead of making two distinct DiceBoard player components, have two instances of a single Diceboard player component

import React, {useEffect, useContext} from 'react';
import BoardContext from '../BoardContext';
import DiceBoardSquare from './DiceBoardSquare';
import $ from 'jquery';
import Column from './Column'; 

export default function DiceBoardP2 (props) {
    const { dice } = useContext(BoardContext);

    let {currentDice, 
        setCurrentDice, 
        p2ColumnA, 
        setP2ColumnA, 
        p2ColumnB, 
        setP2ColumnB, 
        p2ColumnC, 
        setP2ColumnC,
        p2DiceArr,
        setP2DiceArr,
        p1ColumnA,
        setP1ColumnA,
        p1ColumnB,
        setP1ColumnB,
        p1ColumnC,
        setP1ColumnC,
        p1Score,
        setP1Score,
        p1Turn,
        setP1Turn,
        p1Roll,
        setP1Roll } = props.dice.diceState;

    let {setRandomVal} = props.dice.setRandomVal;

    // let P2DiceArr; 

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
            setP1Score(prevScore => {
                return prevScore -= currentDice;
            })
        }

        if (removedVals.length === 2) {
            setP1Score(prevScore => {
                return prevScore = prevScore - ((currentDice * 2) * 2);
            })
        }

        if (removedVals.length === 3) {
            setP1Score(prevScore => {
                return prevScore = prevScore - ((currentDice * 3) * 3);
            })
        }

        console.log(columnClass, column);
    }

    //  TODO: When setDiceVal is uncommmented, there is an infinite loop of player 1's dice being set on load.
        // 10/19/22 -- 8:19 pm
    function setDiceVal(e) {
        // TODO: Redundant. Consolidate.
        if (e.target.classList.contains("column_A") && 
            e.target.classList.contains("player2") && 
            p2ColumnA.length < 3 
            && !p1Turn
             ) {
            // removeMatchingVals(p1ColumnA, 'player1.column_A', setP1ColumnA);

            setP2ColumnA(prevColumn => {
                if (prevColumn !== undefined) {
                    return [...prevColumn, currentDice];
                }
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })
    
            setP2DiceArr(prevDice => {
                return [p2ColumnA, p2ColumnB, p2ColumnC]
            })
    
            // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC]; 
    
            // props.dice.setRandomVal();
        }
    
        if (p1ColumnA.length === 3) {
            // console.log("columnA: ", p1ColumnA);
        }
    
        if (e.target.classList.contains("column_B")
            && e.target.classList.contains("player2")
            && p1ColumnB.length < 3
            && !p1Turn) {

            // removeMatchingVals(p1ColumnB, 'player1.column_B', setP1ColumnB);

            setP2ColumnB(prevColumn => {
                return [...prevColumn, currentDice]
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })
    
            setP2DiceArr(prevDice => {
                return [p2ColumnA, p2ColumnB, p2ColumnC]
            })
    
            // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
            // props.dice.setRandomVal();
            // console.log("column B", p1ColumnB);
        }
    
        if (p1ColumnB.length === 3) {
            // console.log("columnB: ", p1ColumnB);
        }
    
        if (e.target.classList.contains("column_C")
            && e.target.classList.contains("player2")
            && p1ColumnC.length < 3
            && !p1Turn
            ) {

            // removeMatchingVals(p1ColumnC, 'player1.column_C', setP1ColumnC);

            setP2ColumnC(prevColumn => {
                return [...prevColumn, currentDice]
            })
    
            setP1Turn(prevTurn => {
                return !prevTurn;
            })
    
            setP2DiceArr(prevDice => {
                return [p2ColumnA, p2ColumnB, p2ColumnC]
            })
    
            // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
            // props.dice.setRandomVal();
            // console.log("column C", p1ColumnC);
        }
    
        if (p2ColumnA.length === 3) {
            // console.log("columnC: ", p1ColumnC);
        }
    
    }

 /*   function removeMatchingVals(column, columnClass, setColumn) {
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
                setP1Score(prevScore => {
                    console.log("prevScore1 CD: ", currentDice);
                    console.log("prevScore1: ", prevScore);
                    return prevScore = prevScore - currentDice;
                })
            }
    
            if (removedVals.length === 2) {
                setP1Score(prevScore => {
                    console.log("prevScore2 CD: ", currentDice);
                    console.log("prevScore2: ", prevScore);
                    return prevScore = prevScore - ((currentDice * 2) * 2);
                })
            }
    
            if (removedVals.length === 3) {
                setP1Score(prevScore => {
                    console.log("prevScore3 CD: ", currentDice);
                    console.log("prevScore3: ", prevScore);
                    return prevScore = prevScore - ((currentDice * 3) * 3);
                })
            }
            // console.log("currentDice: ", currentDice);
            // console.log("p2Score: ", p2Score);
    } */
    
    useEffect(() => {
        // removeMatchingVals(p1ColumnA, 'column_A.player1', setP1ColumnA)
    }, [])
    
    useEffect(() => {
        // removeMatchingVals(p1ColumnB, 'column_B.player1', setP1ColumnB)
    }, [])
    
    useEffect(() => {
        // removeMatchingVals(p1ColumnC, 'column_C.player1', setP1ColumnC)
    }, [])

    useEffect(() => {
        // TODO: Clicking on squares to render numbers is not consistent. Use another method or element to trigger
        if (p2ColumnA[0] !== undefined) {
            // $('.column_A.player2 span')[p2ColumnA.length - 1].innerHTML = p2ColumnA[p2ColumnA.length - 1];
            // console.log(p2ColumnA[0]);
        }
    
        if (p2ColumnB[0] !== undefined) {
            // $('.column_B.player2 span')[p2ColumnB.length - 1].innerHTML = p2ColumnB[p2ColumnB.length - 1];
            // console.log(p2ColumnB[0]);
        }
    
        if (p2ColumnC[0] !== undefined) {
            // $('.column_C.player2 span')[p2ColumnC.length - 1].innerHTML = p2ColumnC[p2ColumnC.length - 1];
            // console.log(p2ColumnA[0]);
        }
    }, [p2ColumnA, p2ColumnB, p2ColumnC])

    return (
        <div className='knucklebones__diceboard__column__container'>
            <Column column="A" player="2" setDiceVal={setDiceVal} diceArr={p2ColumnA}/>
            <Column column="B" player="2" setDiceVal={setDiceVal} diceArr={p2ColumnB} />
            <Column column="C" player="2" setDiceVal={setDiceVal} diceArr={p2ColumnC} />

        {/*<div className="knucklebones__diceboard__p2">
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="A" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="B" player="2" setDiceVal={setDiceVal}/>
            <DiceBoardSquare column="C" player="2" setDiceVal={setDiceVal}/>
    </div> */}
        </div>
    )
}