import React, {useContext, useEffect} from 'react';
import BoardContext from '../BoardContext';
import Column from './Column';

export default function DiceBoardP1 (props) {
const { dice } = useContext(BoardContext);
const { setP1Image,
        simbaHappy,
        simbaNeutral,
        setP1ColumnA, 
        p1ColumnA, 
        setP1ColumnB, 
        p1ColumnB, 
        setP1ColumnC, 
        p1ColumnC, 
        setP1DiceArr,
        setP1Score,
        currentDice,
        setP1Turn,
        p1Turn } = dice.p1Dice.diceState;

const { removeP2MatchingVals, removeP1MatchingVals, scoreCheck, setRandomVal } = dice.sharedFuncs;

useEffect(() => {
    setRandomVal();
}, [p1Turn, setRandomVal])

const { setP2Image,
        roseHappy,
        roseNeutral,
        setP2ColumnA, 
        p2ColumnA, 
        setP2ColumnB, 
        p2ColumnB, 
        setP2ColumnC, 
        p2ColumnC,
        setP2DiceArr,
        setP2Score } = dice.p2Dice.diceState;
        
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

// don't cause side effects during render phase
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

function setDiceVal(e, column, player, playerCol, setColumn, setDiceArr) {
    if (e.target.parentElement.classList.contains(`column_${column}`) && 
        e.target.parentElement.classList.contains(`player1`) && 
        playerCol.length < 3 
        && p1Turn
         ) {
        setColumn(prevColumn => {
            if (prevColumn !== undefined) {
                const newColumn = [...prevColumn, currentDice];
                scoreCheck(newColumn, setP1Score, setP1Image, simbaHappy, simbaNeutral);

                if (column === "A") {
                    removeP2MatchingVals(player, p2ColumnA, setP2ColumnA);
                } else if (column === "B") {
                    removeP2MatchingVals(player, p2ColumnB, setP2ColumnB);
                } else {
                    removeP2MatchingVals(player, p2ColumnC, setP2ColumnC);
                }
                return newColumn;
            }
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        setDiceArr(prevDice => {
            return [p1ColumnA, p1ColumnB, p1ColumnC]
        })
    } 

    if (e.target.parentElement.classList.contains(`column_${column}`) && 
        e.target.parentElement.classList.contains(`player2`) && 
        playerCol.length < 3 
        && !p1Turn) {
        setColumn(prevColumn => {
            if (prevColumn !== undefined) {
                const newColumn = [...prevColumn, currentDice];
                scoreCheck(newColumn, setP2Score, setP2Image, roseHappy, roseNeutral);
                if (column === "A") {
                    removeP1MatchingVals(player, p1ColumnA, setP1ColumnA);
                } else if (column === "B") {
                    removeP1MatchingVals(player, p1ColumnB, setP1ColumnB);
                } else {
                    removeP1MatchingVals(player, p1ColumnC, setP1ColumnC);
                }
                return newColumn;
            }
        })

        setP1Turn(prevTurn => {
            return !prevTurn;
        })

        setP2DiceArr(prevDice => {
            return [p2ColumnA, p2ColumnB, p2ColumnC]
        })
    }
}

    return (
        <div>
            {aggregateColumns()}
        </div>

    )
}