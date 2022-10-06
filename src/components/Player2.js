import React from 'react';

export default function Player2 (props) {
    let {p1Turn, p1Roll, setP1Roll, currentDice, setCurrentDice} = props.dice.diceState;
    let {setRandomVal} = props.dice;

    function handleDiceHolder () {
        if (!p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    return (
        <div className="knucklebones__p2">
            <img className="p2__pp" src="https://upload.wikimedia.org/wikipedia/en/7/73/MegamanXcharacter.png" alt="player 2 image" />
            <h1>Player 2</h1>
            <h2>(Player 2 Score)</h2>
            <div className="p2__diceholder" onClick={handleDiceHolder}>
                {/* <Dice /> */}
                <h2 className="p2__diceholder__dice">{!p1Turn && currentDice}</h2>
                {p1Turn && setRandomVal()}
            </div>
        </div>
    )
}