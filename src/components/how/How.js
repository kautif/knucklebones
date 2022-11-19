import React from 'react';
import Nav from '../Nav';

export default function Rules () {
    return (
        <div className="knucklebones__rules__container">
            <Nav />
            <h1>Rules</h1>
            <div className="knucklebones__rules__flex">
                <div className="knucklebones__rules__howto">
                    <h2>How to Play</h2>
                    <ol>
                        <li>Player 1 uses the bottom 3x3 grid. Player 2 uses the top one.</li>
                        <li>When a 3x3 grid is fully filled in the game ends. </li>
                        <li>The user with the highest score wins.</li>
                        <li>Place your die in the 1st, 2nd or 3rd column. It will occupy the highest most available row.</li>
                    </ol>
                </div>

                <div className="knucklebones__rules__scoring">
                    <h2>Scoring</h2>
                    <ol>
                        <li>The value of your die is shown in the rectangular box (i.e. the dice holder) above your character.</li>
                        <li>Placing your die in a row will increase your score by its value if there are no matching dice</li>
                        <li>Two matching dice in a column will increase your score by the value of the die multiplied by 2 and multiplied by 2 again.
                            So, two 3s in a column would give you a score of 3 x 2 x 2 = 12
                        </li>
                        <li>Three matching dice in a column will increase your score by the value of the die multiplied by 3 and multiplied by 3 again.
                            So, three 4s in a column would give you a score of 4 x 3 x 3 = 36
                        </li>
                        <li>If you place a die in your column and the opposing player has a matching die in their corresponding column,
                            you remove that die from their column and reduce their score by the value of that die. If you drop one 6 and they have two 6s,
                            it would remove both 6s and reduce their score by 6 x 2 x 2. If they had three 6s, it would remove all three 6s on their side and
                            reduce their score by 6 x 3 x 3. And, likewise if you're on the receiving end. 
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}