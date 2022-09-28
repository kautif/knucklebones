import React from 'react';

export default function DiceBoardSquareP1 (props) {
    return (
        <div className={"knucklebones__diceboard__square column_" + props.column + " player" + props.player} 
        onClick={(e) => props.setDiceVal(e)}>
            
        </div>
    )
}