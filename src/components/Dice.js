import React, {useState} from 'react';

export default function Dice () {

    const [currentDice, setCurrentDice] = useState(0);

    let randomVal = Math.floor(Math.random() * 6) + 1;

    function getDiceVal () {
        randomVal = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomVal);
        console.log(randomVal);
        return randomVal;
    }

    return (
        <div>
            <h2 className="knucklebones__dice">{currentDice}</h2>
        </div>
    )
}