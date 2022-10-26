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
    p2DiceArr,
    setP2DiceArr,
    p1Turn,
    setP1Turn,
    p1Roll,
    setP1Roll,
    p1Score,
    setP1Score,
    p2Score,
    setP2Score } = props.dice.diceState;

function renderColumn (colLetter, setColumn, playerNum, colArr, setPlayerDice) {
    return (
        <Column 
            column={colLetter} 
            setColumn={setColumn} 
            player={playerNum} 
            setDiceVal={setDiceVal} 
            colArr={colArr} 
            diceArr={setPlayerDice} 
        />
    )    
}

function aggregateColumns () {
    if (props.player === "1") {
        return (
            <div className='knucklebones__diceboard__column__container'>
                {renderColumn("A", setP1ColumnA, props.player, p1ColumnA, setP1DiceArr)}
                {renderColumn("B", setP1ColumnB, props.player, p1ColumnB, setP1DiceArr)}
                {renderColumn("C", setP1ColumnC, props.player, p1ColumnC, setP1DiceArr)}
            </div>
        )
    }

    if (props.player === "2") {
        return (
            <div className='knucklebones__diceboard__column__container'>
                {renderColumn("A", setP2ColumnA, props.player, p2ColumnA, setP2DiceArr)}
                {renderColumn("B", setP2ColumnB, props.player, p2ColumnB, setP2DiceArr)}
                {renderColumn("C", setP2ColumnC, props.player, p2ColumnC, setP2DiceArr)}
            </div>
        )
    }
}

function removeMatchingVals (column, setColumn) {
    let keptVals = [];
    let removedVals = [];
    setColumn((prevColumn) => {
        return []
    })

    // if (column.includes(currentDice)) {
    //     for (let i = 0; i < column.length; i++) {
    //         $(`.${columnClass} span`)[i].innerHTML = "";
    //     }
    // }

    for (let k = 0; k < column.length; k++) {
        if (currentDice !== column[k]) {
                keptVals.push(column[k]);
                // $(`.${columnClass} span`)[keptVals.length - 1].innerHTML = keptVals[keptVals.length - 1];
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
            console.log("prevScore: ", prevScore);
            return prevScore -= (currentDice);
        })
    }

    if (removedVals.length === 2) {
        setP2Score(prevScore => {
            return prevScore -= (currentDice * 2) * 2;
        })
    }

    if (removedVals.length === 3) {
        setP2Score(prevScore => {
            return prevScore = prevScore - ((currentDice * 3) * 3);
        })
    }
}

function setDiceVal(e, column, player, playerCol, setColumn, setDiceArr) {
    // TODO: Redundant. Consolidate.
    if (e.target.parentElement.classList.contains(`column_${column}`) && 
        e.target.parentElement.classList.contains(`player1`) && 
        playerCol.length < 3 
        && p1Turn
         ) {
        // removeMatchingVals(p2ColumnA, 'player2.column_A', setP2ColumnA);

        setColumn(prevColumn => {
            if (prevColumn !== undefined) {
                return [...prevColumn, currentDice];
            }
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        if (player === "1") {
            setDiceArr(prevDice => {
                return [p1ColumnA, p1ColumnB, p1ColumnC]
            })
        }

        if (player === "2") {
            // setDiceArr(prevDice => {
            //     return [p2ColumnA, p2ColumnB, p2ColumnC]
            // })
        }
    } 

    if (e.target.parentElement.classList.contains(`column_${column}`) && 
        e.target.parentElement.classList.contains(`player2`) && 
        playerCol.length < 3 
        && !p1Turn) {
        setColumn(prevColumn => {
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
    }

    if (playerCol.length === 3) {
        // console.log("columnA: ", p1ColumnA);
    }
}

// function setDiceVal(e, column, player, playerCol, setColumn, setDiceArr) {
//     // TODO: Redundant. Consolidate.
//     if (e.target.parentElement.classList.contains("column_A") && 
//         e.target.parentElement.classList.contains("player1") && 
//         p1ColumnA.length < 3 
//         && p1Turn
//          ) {

//         // removeMatchingVals(p2ColumnA, 'player2.column_A', setP2ColumnA);

//         setP1ColumnA(prevColumn => {
//             if (prevColumn !== undefined) {
//                 return [...prevColumn, currentDice];
//             }
//         })

//         setP1Turn(prevTurn => {
//             return !prevTurn;
//         })

//         setP1DiceArr(prevDice => {
//             return [p1ColumnA, p1ColumnB, p1ColumnC]
//         })
//         console.log("P1DiceArr: ", p1DiceArr);
//     }

//     if (p1ColumnA.length === 3) {
//         // console.log("columnA: ", p1ColumnA);
//     }

//     if (e.target.parentElement.classList.contains("column_B")
//         && e.target.parentElementclassList.contains("player1")
//         && p1ColumnB.length < 3
//         && p1Turn) {

//         // removeMatchingVals(p2ColumnB, 'player2.column_B', setP2ColumnB);

//         setP1ColumnB(prevColumn => {
//             return [...prevColumn, currentDice]
//         })

//         setP1Turn(prevTurn => {
//             return !prevTurn;
//         })

//         setP1DiceArr(prevDice => {
//             return [...p1ColumnA, ...p1ColumnB, ...p1ColumnC]
//         })

//         // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
//         // props.dice.setRandomVal();
//         // console.log("column B", p1ColumnB);
//     }

//     if (p1ColumnB.length === 3) {
//         // console.log("columnB: ", p1ColumnB);
//     }

//     if (e.target.parentElement.classList.contains("column_C")
//         && e.target.parentElement.classList.contains("player1")
//         && p1ColumnC.length < 3
//         && p1Turn
//         ) {

//         removeMatchingVals(p2ColumnC, 'player2.column_C', setP2ColumnC);
        
//         setP1ColumnC(prevColumn => {
//             return [...prevColumn, currentDice]
//         })

//         setP1Turn(prevTurn => {
//             return !prevTurn;
//         })

//         setP1DiceArr(prevDice => {
//             return [...p1ColumnA, ...p1ColumnB, ...p1ColumnC]
//         })

//         // P1DiceArr = [p1ColumnA, p1ColumnB, p1ColumnC];
//         // props.dice.setRandomVal();
//         // console.log("column C", p1ColumnC);
//     }

//     if (p1ColumnA.length === 3) {
//         // console.log("columnC: ", p1ColumnC);
//     }

// }

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
    removeMatchingVals(p2ColumnA, setP2ColumnA)
    console.log("p1A changed: ", p1ColumnA);
}, [p1ColumnA])

useEffect(() => {
    // removeMatchingVals(p2ColumnB, 'column_B.player2', setP2ColumnB)
}, [])

useEffect(() => {
    // removeMatchingVals(p2ColumnC, 'column_C.player2', setP2ColumnC)
}, [])

useEffect(() => {
    // TODO: Clicking on squares to render numbers is not consistent. Use another method or element to trigger
    if (p1ColumnA[0] !== undefined) {
        // $('.column_A.player1 span')[p1ColumnA.length - 1].innerHTML = p1ColumnA[p1ColumnA.length - 1];
        // console.log(p1ColumnA[0]);
    }

    if (p1ColumnB[0] !== undefined) {
        // $('.column_B.player1 span')[p1ColumnB.length - 1].innerHTML = p1ColumnB[p1ColumnB.length - 1];
        // console.log(p1ColumnB[0]);
    }

    if (p1ColumnC[0] !== undefined) {
        // $('.column_C.player1 span')[p1ColumnC.length - 1].innerHTML = p1ColumnC[p1ColumnC.length - 1];
        // console.log(p1ColumnA[0]);
    }
}, [p1ColumnA, p1ColumnB, p1ColumnC])

    return (
        aggregateColumns()
    )
}