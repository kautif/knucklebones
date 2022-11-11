import React, {useEffect, useContext} from 'react';
import BoardContext from '../BoardContext';

export default function Player2 (props) {
    const { dice } = useContext(BoardContext);
    const { setP1Roll, p1Roll, currentDice, p2Score, p1Turn } = dice.p2Dice.diceState;
    const { setRandomVal } = dice.p2Dice;

    function handleDiceHolder () {
        if (!p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    return (
        <div className="knucklebones__p2">
            <img className="p2__pp" src="https://upload.wikimedia.org/wikipedia/en/7/73/MegamanXcharacter.png" alt="player 2 image" />
            <h1>Player 2</h1>
            <h2>{p2Score}</h2>
            <div className="p2__diceholder" onClick={handleDiceHolder}>
                <h2 className="p2__diceholder__dice">{!p1Turn && currentDice}</h2>
                {p1Turn && setRandomVal()}
            </div>
        </div>
    )
}