import React, {useState, useEffect} from 'react';

export default function Player1 (props) {
    let {p1Turn, p1Roll, setP1Roll, currentDice, setCurrentDice, p1DiceArr, p1ColumnA, p1ColumnB, p1ColumnC, p1Score, setP1Score } = props.dice.diceState;
    let {setRandomVal} = props.dice;
    let [multipleMax, setMultipleMax] = useState(false);

    function handleDiceHolder () {
        if (p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    // useEffect(() => {

    // }, [p1DiceArr])



    function multiplesOf2 (column) {
        if ((column[0] === column[1] && column[0] !== undefined) ||
            (column[1] === column[2] && column[1] !== undefined) ||
            (column[0] === column[2] && column[2] !== undefined) )  {
                setP1Score(prevScore => {
                    return prevScore += (currentDice + currentDice) * 2;
                })
        }
    }

    function multiplesOf3 (column) {
        if (((column[0] === column[1] && column[0] === column[2]) && column[0] !== undefined))  {
            setP1Score(prevScore => {
                console.log("x3[0]: ", column[0]);
                console.log("x3[1]: ", column[1]);
                console.log("x3[2]: ", column[2]);
                return prevScore += (currentDice + currentDice + currentDice) * 3;
            })
            return;
        }

        if ((currentDice === column[0] && column[0] === column[1] && column[0] !== undefined) ||
            (currentDice === column[1] && column[1] === column[2] && column[1] !== undefined) ||
            (currentDice === column[0] && column[0] === column[2] && column[2] !== undefined) )  {
                setP1Score(prevScore => {
                    console.log("x2[0]: ", column[0]);
                    console.log("x2[1]: ", column[1]);
                    console.log("x2[2]: ", column[2]);
                    return prevScore += (currentDice + currentDice) * 2;
                })
                
                return;
        }

        if (column[0] !== column[1] !== column[2] && column[0] !== undefined) {
            setP1Score(prevScore => {
                return prevScore += currentDice;
            })
        }
    }
    
    useEffect(() => {
        multiplesOf3(p1ColumnA);
        // multiplesOf2(p1ColumnA);
        // console.log("column A useEffect");
    }, [p1ColumnA])

    useEffect(() => {
        multiplesOf3(p1ColumnB);
        // console.log("column B useEffect");
        // multiplesOf2(p1ColumnB);
    }, [p1ColumnB])

    useEffect(() => {
        multiplesOf3(p1ColumnC);
        // multiplesOf2(p1ColumnC);
    }, [p1ColumnC])

    return (
        <div className="knucklebones__p1">
            <img className="p1__pp" src="https://upload.wikimedia.org/wikipedia/en/8/8d/Zero-mmx.png" alt="player 1 image" />
            <h1>Player 1</h1>
            <h2 id="p1__score">{p1Score}</h2>
            <div className="p1__diceholder">
                {/* <Dice /> */}
                <span className="p1__diceholder__dice">{p1Turn && currentDice}</span>
                {!p1Turn && setRandomVal()}
            </div>
        </div>
    )
}