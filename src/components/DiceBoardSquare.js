import React, {useEffect} from 'react';

export default function DiceBoardSquare (props) {
    useEffect(() => {
        // console.log("DiceBoardSquare props: ", props);
    }, [props])
    return (
        <div className="knucklebones__diceboard__square">
            {props.diceVals ? props.diceVals : ""}
        </div>
      )
}

{  /* <div className={"knucklebones__diceboard__square column_" + props.column + " player" + props.player} 
        onClick={(e) => props.setDiceVal(e)}>
            <span onClick={(e) => props.setDiceVal(e)}></span>
</div> */}