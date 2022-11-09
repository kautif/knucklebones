import React, { createContext, useState } from "react";

const BoardContext = createContext();

export function BoardProvider ({children}) {
    const [currentDice, setCurrentDice] = useState(0);

    const [p1ColumnA, setP1ColumnA] = useState([]);
    const [p1ColumnB, setP1ColumnB] = useState([]);
    const [p1ColumnC, setP1ColumnC] = useState([]);
    const [p1DiceArr, setP1DiceArr] = useState([]);
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

    function scoreCheck (column, setPScore) {
        // score multipler x3
        if (((column[0] === column[1] && column[0] === column[2]) && column[0] !== undefined))  {
            setPScore(prevScore => {
                return prevScore += (currentDice + currentDice + currentDice) * 3;
            })
            return;
        }
    
        // score multiplier x2
        if ((currentDice === column[0] && column[0] === column[1] && column[0] !== undefined) ||
            (currentDice === column[1] && column[1] === column[2] && column[1] !== undefined) ||
            (currentDice === column[0] && column[0] === column[2] && column[2] !== undefined) )  {
                setPScore(prevScore => {
                    return prevScore += (currentDice + currentDice) * 2;
                })
                return;
        }
    
        // regular score
        if (column[0] !== column[1] !== column[2] && column[0] !== undefined) {
            setPScore((prevScore) => {
                prevScore += currentDice;
                return prevScore;
            })
        }
    }

    function reduceScore (setPScore, removedTarget) {
        // let newScore;
        if (removedTarget.length === 1) {
            setPScore((prevScore) => {
                return prevScore -= (currentDice);
                // newScore = prevScore
                // return newScore;
            })
        }

        if (removedTarget.length === 2) {
            setPScore((prevScore) => {
                return prevScore -= (currentDice * 2) * 2;
                // newScore = prevScore;
                // return newScore;
            })
        }

        if (removedTarget.length === 3) {
            setPScore((prevScore) => {
                return prevScore -= (currentDice * 3) * 3;
                // newScore = prevScore;
                // return newScore
            })
        }
    }

    function removeP2MatchingVals (player, p2Column, setP2Column) {
        let keptVals = [];
        let removedVals = [];

        if (player === "1") {
            setP2Column(prevColumn => { return [] })
            for (let i = 0; i < p2Column.length; i++) {
                if (currentDice !== p2Column[i]) {
                    keptVals.push(p2Column[i])
                } else {
                    removedVals.push(p2Column[i])
                }
            }

            setP2Column(prevCol => {
                return keptVals;
            })

            reduceScore(setP2Score, removedVals);
        }
    }

    function removeP1MatchingVals (player, p1Column, setP1Column) {
        let keptVals = [];
        let removedVals = [];
        if (player === "2") {
            setP1Column(prevColumn => { return [] })
            for (let i = 0; i < p1Column.length; i++) {
                if (currentDice !== p1Column[i]) {
                    keptVals.push(p1Column[i])
                } else {
                    removedVals.push(p1Column[i])
                }
            }

            setP1Column(prevCol => {
                return keptVals;
            })

            reduceScore(setP1Score, removedVals);
        }
    }

    // function removeMatchingVals (column, setColumn, setPScore) {
    //     let keptVals = [];
    //     let removedVals = [];
    //     let newScore;
    //     setColumn(prevColumn => { return [] })
    
    //     for (let k = 0; k < column.length; k++) {
    //         if (currentDice !== column[k]) {
    //                 keptVals.push(column[k]);
    //                 // $(`.${columnClass} span`)[keptVals.length - 1].innerHTML = keptVals[keptVals.length - 1];
    //             } else {
    //                 removedVals.push(column[k]);
    //             }
    //     }
    
    //     setColumn(prevCol => {
    //         prevCol = keptVals;
    //         return keptVals;
    //     })
    
    //     if (removedVals.length === 1) {
    //         setPScore((prevScore) => {
    //             prevScore -= (currentDice);
    //             newScore = prevScore
    //             return newScore;
    //         })
    //     }
    
    //     if (removedVals.length === 2) {
    //         setPScore((prevScore) => {
    //             prevScore -= (currentDice * 2) * 2;
    //             newScore = prevScore;
    //             return newScore;
    //         })
    //     }
    
    //     if (removedVals.length === 3) {
    //         setPScore((prevScore) => {
    //             prevScore -= (currentDice * 3) * 3;
    //             newScore = prevScore;
    //             return newScore
    //         })
    //     }
    // }
 
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
            p2ColumnA,
            setP2ColumnA,
            p2ColumnB,
            setP2ColumnB,
            p2ColumnC,
            setP2ColumnC,
            p2DiceArr,
            p1Turn,
            setP1Turn,
            p1Roll,
            setP1Roll,
            p1Score,
            setP1Score,
            p2Score,
            setP2Score
        },
        setRandomVal,
        reduceScore,
        removeP2MatchingVals,
        removeP1MatchingVals,
        scoreCheck,
    }

    let p2Dice = {
        diceState: {
            currentDice,
            setCurrentDice,
            setP2DiceArr,
            p2DiceArr,
            p2ColumnA,
            setP2ColumnA,
            p2ColumnB,
            setP2ColumnB,
            p2ColumnC,
            setP2ColumnC,
            p1ColumnA,
            setP1ColumnA,
            p1ColumnB,
            setP1ColumnB,
            p1ColumnC,
            setP1ColumnC,
            p1DiceArr,
            p1Turn,
            setP1Turn,
            p1Roll,
            setP1Roll,
            p1Score,
            setP1Score,
            p2Score,
            setP2Score
        },
        setRandomVal
    }

    return (
        <BoardContext.Provider value={{dice: { p1Dice, p2Dice}}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext;