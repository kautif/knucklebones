import React, {useEffect, useContext} from 'react';
import BoardContext from '../BoardContext';

export default function DiceBoardSquare (props) {
    const { dice } = useContext(BoardContext);
    const { setDiceImg } = dice.p1Dice;
    return (
        <div className="knucklebones__diceboard__square">
            {props.diceVals ? 
            <img src={setDiceImg(props.diceVals)} alt={"Dice value of " + props.diceVals} /> : ""}
        </div>
      )
}

{  /* <div className={"knucklebones__diceboard__square column_" + props.column + " player" + props.player} 
        onClick={(e) => props.setDiceVal(e)}>
            <span onClick={(e) => props.setDiceVal(e)}></span>
</div> */}