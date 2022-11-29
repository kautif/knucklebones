import React, {useContext} from 'react';
import BoardContext from '../BoardContext';

export default function DiceBoardSquare (props) {
    const { dice } = useContext(BoardContext);
    const { setDiceImg } = dice.sharedFuncs;
    return (
        <div className="knucklebones__diceboard__square">
            {props.diceVals ? 
            <img src={setDiceImg(props.diceVals)} alt={"Dice value of " + props.diceVals} /> : ""}
        </div>
      )
}