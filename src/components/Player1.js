import React from 'react';
import Dice from './Dice';

export default function Player1 (props) {

    return (
        <div className="knucklebones__p1">
            <img className="p1__pp" src="https://upload.wikimedia.org/wikipedia/en/8/8d/Zero-mmx.png" alt="player 1 image" />
            <h1>Player 1</h1>
            <h2>(Player 1 Score)</h2>
            <div className="p1__diceholder" onClick={props.dice.setRandomVal}>
                {/* <Dice /> */}
                <h2 className="p1__diceholder__dice">{props.dice.diceState.currentDice}</h2>
            </div>
        </div>
    )
}