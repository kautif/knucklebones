import React, { useContext} from 'react';
import BoardContext from '../BoardContext';

export default function Player (props) {
    const { dice } = useContext(BoardContext);
    console.log("player: ", props.player);
    const { currentDice, p1Score, p1Turn, p1Image } = dice.p1Dice.diceState;
    const { p2Image, p2Score, } = dice.p2Dice.diceState;
    const { setDiceImg } = dice.sharedFuncs;
    const p1Side = <div className="p1__side">
    <div className="p1__diceholder">
        <span className="p1__diceholder__dice">{p1Turn && <img src={setDiceImg(currentDice)} alt={`dice with a value of ${currentDice}`}/>}</span>
    </div>
    <div className="knucklebones__p1">
        <img className="p1__pp" src={p1Image} alt="player 1 image" />
        <h1>Player 1</h1>
        <h2 id="p1__score">Score: {p1Score}</h2>
    </div>
</div>;

    const p2Side = <div className="p2__side">
    <div className="p2__diceholder">
        <h2 className="p2__diceholder__dice">{!p1Turn && <img src={setDiceImg(currentDice)} alt={`dice with a value of ${currentDice}`}/>}</h2>
    </div>
    <div className="knucklebones__p2">
        <img className="p2__pp" src={p2Image} alt="player 2 image" />
        <h1>Player 2</h1>
        <h2 id="p2__score">Score: {p2Score}</h2>
    </div>
</div>;

    if (props.player === "1") {
        return p1Side;
    } else {
        return p2Side;
    }

}