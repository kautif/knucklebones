import React, {useState} from 'react';
import DiceBoardSquareP1 from './DiceBoardSquareP1';
import $ from 'jquery';

export default function DiceBoardP1 (props) {

let selected = false;
let {currentDice, setCurrentDice, columnA, setColumnA} = props.dice.diceState;

// let [P1DiceArr, setP1DiceArr] = useState([])

let P1DiceArr = []; 


// 9-19-22
    // When you click in Column A multiple times, it adds values to the array
    // Once you click in the dice holder, it changes the length of the array back to 1
    // Maybe you need to save the array and copy it over before the user can click the diceholder
function setDiceVal() {
    if ($(".knucklebones__diceboard__square").hasClass('column_A') && columnA.length < 3) {
        setColumnA(prevColumn => {
            return [...prevColumn, currentDice]
        })
        console.log("column A: ", columnA);
    }

    if (columnA.length === 3) {
        console.log("columnA: ", columnA);
    }
}
    return (
        <div className="knucklebones__diceboard__p1">
            <div className="knucklebones__diceboard__square column_A" 
            onClick={() => setDiceVal()}>
                <h2></h2>
            </div>
            <div className="knucklebones__diceboard__square column_B">
            
            </div>
            <div className="knucklebones__diceboard__square column_C">
            
            </div>
            
            <div className="knucklebones__diceboard__square column_A" onClick={() => setDiceVal()}>
            
            </div>
            <div className="knucklebones__diceboard__square column_B">
            
            </div>
            <div className="knucklebones__diceboard__square column_C">
            
            </div>

            <div className="knucklebones__diceboard__square column_A" onClick={() => setDiceVal()}>
            
            </div>
            <div className="knucklebones__diceboard__square column_B">
            
            </div>
            <div className="knucklebones__diceboard__square column_C">
            
            </div>
        </div>
    )
}