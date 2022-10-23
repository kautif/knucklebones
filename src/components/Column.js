import React from 'react';
import DiceBoardSquare from './DiceBoardSquare';

export default function Column (props) {
    return (
        <div className={`knucklebones__diceboard__column column_${props.column} player${props.player}`}>
            <DiceBoardSquare />
            <DiceBoardSquare />
            <DiceBoardSquare />
        </div>
    )
}