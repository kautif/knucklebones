import React from 'react';

export default function Player1 (props) {
    let {p1Turn, p1Roll, setP1Roll, currentDice, setCurrentDice} = props.dice.diceState;
    let {setRandomVal} = props.dice;

    function handleDiceHolder () {
        if (p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    return (
        <div className="knucklebones__p1">
            <img className="p1__pp" src="https://upload.wikimedia.org/wikipedia/en/8/8d/Zero-mmx.png" alt="player 1 image" />
            <h1>Player 1</h1>
            <h2>(Player 1 Score)</h2>
            <div className="p1__diceholder">
                {/* <Dice /> */}
                <h2 className="p1__diceholder__dice">{p1Turn && currentDice}</h2>
                {!p1Turn && setRandomVal()}
            </div>
        </div>
    )
}