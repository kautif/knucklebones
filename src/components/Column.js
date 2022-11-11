import React, {useEffect} from 'react';
import DiceBoardSquare from './DiceBoardSquare';

export default function Column (props) {
    return (
        <div className={`knucklebones__diceboard__column column_${props.column} player${props.player}`} 
        onClick={(e) => props.setDiceVal(e, props.column, props.player, props.colArr, props.setColumn, props.diceArr)}>
            <DiceBoardSquare diceVals={props.colArr && props.colArr.length > 0 && props.colArr[0]} />
            <DiceBoardSquare diceVals={props.colArr && props.colArr.length > 0 && props.colArr[1]} />
            <DiceBoardSquare diceVals={props.colArr && props.colArr.length > 0 && props.colArr[2]} />
        </div>
    )
}