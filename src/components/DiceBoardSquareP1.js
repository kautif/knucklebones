import React from 'react';

export default function DiceBoardSquareP1 (props) {
    return (
        <div className={"knucklebones__diceboard__square column_" + props.column} onClick={() => console.log(props.onClick)}>
            
        </div>
    )
}