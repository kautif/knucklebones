import React, {useEffect, useContext} from 'react';
import BoardContext from '../BoardContext';

export default function Player2 (props) {
    const { dice } = useContext(BoardContext);
    const { setP1Roll, p1Roll, currentDice, p2Image, p2Score, p1Turn } = dice.p2Dice.diceState;
    const { setRandomVal } = dice.p2Dice;
    const { setDiceImg } = dice.p1Dice;

    function handleDiceHolder () {
        if (!p1Roll) {
            setP1Roll(prevRoll => !prevRoll);
        }
    }

    return (
        <div className="p2__side">
            <div className="p2__diceholder" onClick={handleDiceHolder}>
                <h2 className="p2__diceholder__dice">{!p1Turn && <img src={setDiceImg(currentDice)} alt={`dice with a value of ${currentDice}`}/>}</h2>
            </div>
            <div className="knucklebones__p2">
                {/* {p1Turn && setRandomVal()} */}
                <img className="p2__pp" src={p2Image} alt="player 2 image" />
                <h1>Player 2</h1>
                <h2>Score: {p2Score}</h2>
            </div>
        </div>
    )
}