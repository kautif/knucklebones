import React, {useState, useEffect, useContext} from 'react';
import BoardContext from '../BoardContext';
import $ from 'jquery';

export default function Player1 (props) {
    // let {p1Turn, currentDice, p1ColumnA, p1ColumnB, p1ColumnC, p1Score, p2ColumnA, setP2ColumnA, p2ColumnB, p2ColumnC, setP1Score, setP2Score } = props.dice.diceState;
    // let {setRandomVal} = props.dice;

    const { dice } = useContext(BoardContext);
    console.log("p1 dice: ", dice);
    const { setP1Score, currentDice, p1ColumnA, p1ColumnB, p1ColumnC, p1Score, p1Turn } = dice.p1Dice.diceState;
    const { setRandomVal } = dice.p1Dice;
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