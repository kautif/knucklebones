import React, {useState} from 'react';

export default function Dice () {

    const [currentDice, setCurrentDice] = useState(0);

    return (
        <div>
            <h2 className="knucklebones__dice">{currentDice}</h2>
        </div>
    )
}