import React, { useContext} from 'react';
import BoardContext from '../BoardContext';

export default function Player1 (props) {
    const { dice } = useContext(BoardContext);
    const { currentDice, p1Score, p1Turn, p1Image } = dice.p1Dice.diceState;
    const { setDiceImg } = dice.sharedFuncs;
    return (
        <div className="p1__side">
            <div className="p1__diceholder">
                <span className="p1__diceholder__dice">{p1Turn && <img src={setDiceImg(currentDice)} alt={`dice with a value of ${currentDice}`}/>}</span>
            </div>
            <div className="knucklebones__p1">
                {/* {!p1Turn && setRandomVal()} */}
                <img className="p1__pp" src={p1Image} alt="player 1 image" />
                <h1>Player 1</h1>
                <h2 id="p1__score">Score: {p1Score}</h2>
            </div>
        </div>
    )
}