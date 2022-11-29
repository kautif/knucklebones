import React, { createContext, useCallback, useState } from "react";

const BoardContext = createContext();

export function BoardProvider ({children}) {
    let simbaHappy = "./simba_happy_face_right.gif";
    let simbaSad = "./simba_sad_face_right.gif";
    let simbaNeutral = "./simba_neutral_face_right.gif";
    
    let roseHappy = "./rose_happy_face_left.gif";
    let roseSad = "./rose_sad_face_left.gif";
    let roseNeutral = "./rose_neutral_face_left.gif";

    const [gameOver, setGameOver] = useState(false);
    const [currentDice, setCurrentDice] = useState(0);

    const [p1Image, setP1Image] = useState(simbaNeutral);
    const [p1ColumnA, setP1ColumnA] = useState([]);
    const [p1ColumnB, setP1ColumnB] = useState([]);
    const [p1ColumnC, setP1ColumnC] = useState([]);
    const [p1DiceArr, setP1DiceArr] = useState([]);

    const [p2Image, setP2Image] = useState(roseNeutral);
    const [p2ColumnA, setP2ColumnA] = useState([]);
    const [p2ColumnB, setP2ColumnB] = useState([]);
    const [p2ColumnC, setP2ColumnC] = useState([]);
    const [p2DiceArr, setP2DiceArr] = useState([]);
    
    const [p1Turn, setP1Turn] = useState(true);
    const [p1Roll, setP1Roll] = useState(true);

    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    let [winner, setWinner] = useState("");

    let randomVal;
    const setRandomVal = useCallback(() => {
        randomVal = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomVal);
    }, [])

    const setDiceImg = useCallback((diceVal) => {
        let diceImg = ""
        switch(diceVal) {
            case 1:
                diceImg = "./dice1.png";
                break;
            case 2:
                diceImg = "./dice2.png";
                break;
            case 3:
                diceImg = "./dice3.png";
                break;
            case 4:
                diceImg = "./dice4.png";
                break;
            case 5:
                diceImg = "./dice5.png";
                break;
            case 6: 
                diceImg = "./dice6.png";
                break;
            default:
                break;
        }
        return diceImg;
    })

    const scoreCheck = useCallback((column, setPScore, setPImage, happy, neutral) => {
        // score multipler x3
        if (((column[0] === column[1] && column[0] === column[2]) && column[0] !== undefined))  {
            setPScore(prevScore => {
                return prevScore += (currentDice + currentDice + currentDice) * 3;
            })

            setPImage(prevImg => {
                return happy;   
            })

            setTimeout(function () {
                setPImage(prevImv => {
                    return neutral;
                })
            }, 2000)

            return;
        }
    
        // score multiplier x2
        if ((currentDice === column[0] && column[0] === column[1] && column[0] !== undefined) ||
            (currentDice === column[1] && column[1] === column[2] && column[1] !== undefined) ||
            (currentDice === column[0] && column[0] === column[2] && column[2] !== undefined) )  {
                setPScore(prevScore => {
                    return prevScore += (currentDice + currentDice) * 2;
                })

                setPImage(prevImg => {
                    return happy;   
                })
    
                setTimeout(function () {
                    setPImage(prevImv => {
                        return neutral;
                    })
                }, 2000)
                
                return;
        }
    
        // regular score
        if (column[0] !== column[1] !== column[2] && column[0] !== undefined) {
            setPScore((prevScore) => {
                prevScore += currentDice;
                return prevScore;
            })
        }
    }, [currentDice]) 

    function reduceScore (setPScore, removedTarget, setPImage, sad, neutral) {
        if (removedTarget.length === 1) {
            setPScore((prevScore) => {
                return prevScore -= (currentDice);
            })

            setPImage(prevImage => {
                return sad
            })

            setTimeout(function () {
                setPImage(prevImage => {
                    return neutral
                })
            }, 2000)
        }

        if (removedTarget.length === 2) {
            setPScore((prevScore) => {
                return prevScore -= currentDice + ((currentDice * 2) * 2);
            })

            setPImage(prevImage => {
                return sad
            })

            setTimeout(function () {
                setPImage(prevImage => {
                    return neutral
                })
            }, 2000)
        }

        if (removedTarget.length === 3) {
            setPScore((prevScore) => {
                return prevScore -= currentDice + ((currentDice * 2) * 2) + ((currentDice * 3) * 3);
            })

            setPImage(prevImage => {
                return sad
            })

            setTimeout(function () {
                setPImage(prevImage => {
                    return neutral
                })
            }, 2000)
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

            reduceScore(setP2Score, removedVals, setP2Image, roseSad, roseNeutral);
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

            reduceScore(setP1Score, removedVals, setP1Image, simbaSad, simbaNeutral);
        }
    }

    let sharedFuncs = {
        setRandomVal,
        setDiceImg,
        reduceScore,
        removeP2MatchingVals,
        removeP1MatchingVals,
        scoreCheck,
        winner,
        setGameOver,
        gameOver        
    }

    let p1Dice = {
        diceState: {
            currentDice, setCurrentDice, p1Image, setP1Image, 
            simbaSad, simbaNeutral, simbaHappy,p1ColumnA, setP1ColumnA,
            p1ColumnB, setP1ColumnB, p1ColumnC, setP1ColumnC,
            p1DiceArr, setP1DiceArr, p2ColumnA, setP2ColumnA,
            p2ColumnB, setP2ColumnB, p2ColumnC, setP2ColumnC,
            p2DiceArr, p1Turn, setP1Turn, p1Roll,
            setP1Roll, p1Score, setP1Score,p2Score, setP2Score
        }
    }

    let p2Dice = {
        diceState: {
            currentDice,
            setCurrentDice,
            p2Image,
            setP2Image,
            roseSad,
            roseNeutral,
            roseHappy,
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
        }
    }

    return (
        <BoardContext.Provider value={{dice: { p1Dice, p2Dice, sharedFuncs}}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext;