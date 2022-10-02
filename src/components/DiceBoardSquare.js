import React from 'react';

export default function DiceBoardSquare (props) {
    return (
        <div className={"knucklebones__diceboard__square column_" + props.column + " player" + props.player} 
        onClick={(e) => props.setDiceVal(e)}>
            <h2></h2>
        </div>
    )
}