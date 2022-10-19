import React, {useEffect} from 'react';

export default function Player2 (props) {
    let {p1Turn,
        p1Roll,
        setP1Roll, 
        currentDice, 
        p2ColumnA, 
        p2ColumnB, 
        p2ColumnC, 
        p2Score, 
        p1ColumnA, 
        setP2Score} = props.dice.diceState;
    let {setRandomVal} = props.dice;

    function handleDiceHolder () {
        if (!p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    function scoreCheck (column) {
        // score multipler x3
        if (((column[0] === column[1] && column[0] === column[2]) && column[0] !== undefined))  {
            setP2Score(prevScore => {
                return prevScore += (currentDice + currentDice + currentDice) * 3;
            })
            return;
        }

        // score multiplier x2
        if ((currentDice === column[0] && column[0] === column[1] && column[0] !== undefined) ||
            (currentDice === column[1] && column[1] === column[2] && column[1] !== undefined) ||
            (currentDice === column[0] && column[0] === column[2] && column[2] !== undefined) )  {
                setP2Score(prevScore => {
                    return prevScore += (currentDice + currentDice) * 2;
                })
                
                return;
        }

        // regular score
        if (column[0] !== column[1] !== column[2] && column[0] !== undefined) {
            setP2Score(prevScore => {
                return prevScore += currentDice;
            })
        }
    }

    useEffect(() => {
        scoreCheck(p2ColumnA);
        // multiplesOf2(p1ColumnA);
        // console.log("column A useEffect: ", p2ColumnA);
    }, [p2ColumnA])

    useEffect(() => {
        scoreCheck(p2ColumnB);
        // console.log("column B useEffect");
        // multiplesOf2(p1ColumnB);
    }, [p2ColumnB])

    useEffect(() => {
        scoreCheck(p2ColumnC);
        // multiplesOf2(p1ColumnC);
    }, [p2ColumnC])

    return (
        <div className="knucklebones__p2">
            <img className="p2__pp" src="https://upload.wikimedia.org/wikipedia/en/7/73/MegamanXcharacter.png" alt="player 2 image" />
            <h1>Player 2</h1>
            <h2>{p2Score}</h2>
            <div className="p2__diceholder" onClick={handleDiceHolder}>
                {/* <Dice /> */}
                <h2 className="p2__diceholder__dice">{!p1Turn && currentDice}</h2>
                {p1Turn && setRandomVal()}
            </div>
        </div>
    )
}