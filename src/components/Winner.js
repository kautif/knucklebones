import React, {useContext} from 'react';
import BoardContext from '../BoardContext';

export default function Winner () {
    const { dice } = useContext(BoardContext);
    const { setRandomVal } = dice.sharedFuncs;
    const { p1ColumnA, setP1ColumnA, p1ColumnB, 
            setP1ColumnB, p1ColumnC, setP1ColumnC, 
            setP1DiceArr, p1Image, setP1Image, 
            simbaHappy, simbaNeutral, simbaSad, 
            setCurrentDice, p1Score, setP1Score } = dice.p1Dice.diceState;
    
    const { p2ColumnA, setP2ColumnA, p2ColumnB, 
            setP2ColumnB, p2ColumnC, setP2ColumnC, 
            setP2DiceArr, p2Image, setP2Image,
            roseHappy, roseNeutral, roseSad, 
            p2Score, setP2Score } = dice.p2Dice.diceState;
    let p1AllVals = [];
    let p2AllVals = [];
    p1AllVals = [...p1ColumnA, ...p1ColumnB, ...p1ColumnC];
    p2AllVals = [...p2ColumnA, ...p2ColumnB, ...p2ColumnC];
    let winner = "";
    let winScreen = ""
    let alt1 = "";
    let alt2 = "";

    function checkWinner () {
        if (p1Score > p2Score) {
            winner = "Player 1";
            alt1 = "happy orange cat";
            alt2 = "sad white cat";
            setP1Image(prevImg => {
                return simbaHappy
            });

            setP2Image(prevImg => {
                return roseSad;
            })
        } else if (p2Score > p1Score) {
            winner = "Player 2";
            alt1 = "sad orange cat";
            alt2 = "happy white cat";
            setP1Image(prevImg => {
                return simbaSad;
            })

            setP2Image(prevImg => {
                return roseHappy;
            })
        } else {
            winner = "No one";
            alt1 = "sad orange cat";
            alt2 = "sad white cat";

            setP1Image(prevImg => {
                return simbaSad;
            })

            setP2Image(prevImg => {
                return roseSad;
            })
        }
        setCurrentDice(prevDice => {
            return 0;
        })
    }

    function newGame () {
        setP1Image(prevImg => {
            return simbaNeutral;
        })

        setP2Image(prevImg => {
            return roseNeutral;
        })

        setP1Score(prevScore => {
            return 0;
        })

        setP2Score(prevScore => {
            return 0
        })

        setP1ColumnA(prevCol => {
            return []
        })

        setP1ColumnB(prevCol => {
            return []
        })

        setP1ColumnC(prevCol => {
            return []
        })

        setP1DiceArr(prevArr => {
            return [p1ColumnA, p1ColumnB, p1ColumnC]
        })

        setP2ColumnA(prevCol => {
            return []
        })

        setP2ColumnB(prevCol => {
            return []
        })

        setP2ColumnC(prevCol => {
            return []
        })

        setP2DiceArr(prevArr => {
            return [p2ColumnA, p2ColumnB, p2ColumnC]
        })

        setRandomVal();
    }

    if (p1AllVals.length === 9 || p2AllVals.length === 9) {
        checkWinner();
    winScreen = <div className="knucklebones__diceboards__winner">
                            <div className="knucklebones__diceboards__winner__screen">
                            <h1 className="knucklebones__diceboards__winner__screen__player">{`${winner} wins`}</h1>
                            <div class="knucklebones__diceboards__winner__score">
                                <div class="knucklebones__diceboards__winner__score__p1">
                                    <img src={`${p1Image}`} alt={`${alt1}`} />
                                    <h2>P1 Score</h2>
                                    <h3>{p1Score}</h3>
                                </div>
                                <div class="knucklebones__diceboards__winner__score__p2">
                                    <img src={`${p2Image}`} alt={`${alt2}`} />
                                    <h2>P2 Score</h2>
                                    <h3>{p2Score}</h3>
                                </div>
                            </div>
                                <button className="knucklebones__diceboards__winner__newgame" onClick={newGame}>New Game</button>
                            </div>
                        </div> 
    }
    
    return (
        <div>
            {winner && winScreen}
        </div>
    )
}